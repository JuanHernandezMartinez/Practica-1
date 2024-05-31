import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function App() {
  const [json, setJson] = useState();
  const [xml, setXml] = useState();
  const [yaml, setYaml] = useState();

  const obtenerJson = async () => {
    return await axios.get("http://localhost:4000/json");
  };
  const obtenerXml = async () => {
    return await axios.get("http://localhost:4000/xml");
  };
  const obtenerYaml = async () => {
    return await axios.get("http://localhost:4000/yaml");
  };

  function liberarRam() {
    window.location.href = "https://www.youtube.com/watch?v=mCdA4bJAGGk";
  }
  useEffect(() => {
    const obtenerDatos = async () => {
      const respuestaJson = await obtenerJson();
      setJson(JSON.stringify(respuestaJson.data));

      const respuestaXml = await obtenerXml();
      setXml(respuestaXml.data);

      const respuestaYaml = await obtenerYaml();
      setYaml(respuestaYaml.data);
    };

    obtenerDatos();
  }, []);

  return (
    <div style={{ fontFamily: "fantasy", color: "black" }}>
      <Card style={{ marginBottom: "2%" }}>
        <CardContent>
          <div style={{ textAlign: "center", marginBottom: "1%" }}>
            <h1
              style={{
                fontSize: 38,
                fontWeight: 600,
                marginRight: 4,
              }}
            >
              Tipos de formatos para transferir datos
            </h1>
            <Button
              variant="contained"
              color="success"
              onClick={() => liberarRam()}
            >
              Liberar Ram?
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div style={{ marginRight: 12 }}>
              <h1 style={{ fontSize: 24, fontWeight: 400 }}>Formato JSON:</h1>
              <pre style={{ fontSize: 24 }}>{json}</pre>
              <hr />
              <h1 style={{ fontSize: 24, fontWeight: 400 }}>Formato XML:</h1>
              <pre style={{ fontSize: 24 }}>{xml}</pre>
              <hr />
              <h1 style={{ fontSize: 24, fontWeight: 400 }}>Formato YAML:</h1>
              <pre style={{ fontSize: 24 }}>{yaml}</pre>
            </div>
            <div
              style={{
                fontSize: 24,
                fontFamily: "monospace",
                marginLeft: 12,
                textAlign: "center",
                marginTop: "30%",
              }}
            >
              Las APIs REST utilizan formatos de intercambio de datos comunes
              como JSON (JavaScript Object Notation), XML (Extensible Markup
              Language) y YAML ( ) para la transferencia de datos entre
              aplicaciones. Esto permite que diferentes sistemas y lenguajes de
              programación puedan interactuar entre sí de forma sencilla y
              consistente.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
