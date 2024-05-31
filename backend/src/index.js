import express from "express";
import cors from "cors";
import yaml from "js-yaml";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/json", (req, res) => {
  try {
    let Kenia = {
      nombre: "juan",
      edad: 20,
      telefono: 6271437428,
    };
    res.json(Kenia);
  } catch (error) {
    res.send(error);
  }
});

app.get("/xml", (req, res) => {
  try {
    const xmlData = `
    <root>
        <item>
            <nombre>juan</nombre>
            <edad>20</edad>
            <telefono>6271437428</telefono>
        </item>
    </root>
`;
    res.set("Content-Type", "application/xml");
    res.send(xmlData);
  } catch (error) {
    res.send(error);
  }
});

app.get("/yaml", (req, res) => {
  try {
    const datos = {
      producto1: {
        nombre: "Producto 1",
        edad: 20,
        telefono: 6271437428,
      },
    };
    const datosYAML = yaml.dump(datos);

    // Configura la respuesta HTTP con el contenido YAML
    res.set("Content-Type", "text/yaml");
    res.send(datosYAML);
  } catch (error) {
    res.send(error);
  }
});

app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000"));
