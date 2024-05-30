import express from 'express'
import cors from 'cors'
import yaml from 'js-yaml';

const app = express()

app.use(cors())
app.use(express.json())

app.get("/json", (req, res) => {
    let Kenia = {
        nombre: "kenia stepede",
        edad: 20,
        telefono: 6275207144
    }
    res.json(Kenia)
})

app.get("/xml", (req, res) => {
    const xmlData = `
    <root>
        <item>
            <nombre>Producto 1</nombre>
            <precio>10.00</precio>
        </item>
        <item>
            <nombre>Producto 2</nombre>
            <precio>20.00</precio>
        </item>
    </root>
`;
    res.set('Content-Type', 'application/xml');
    res.send(xmlData);

})

app.get("/yaml", (req, res) => {
    const datos = {
        producto1: {
            nombre: 'Producto 1',
            precio: 10.00
        },
        producto2: {
            nombre: 'Producto 2',
            precio: 20.00
        }
    };
    const datosYAML = yaml.dump(datos);

    // Configura la respuesta HTTP con el contenido YAML
    res.set('Content-Type', 'text/yaml');
    res.send(datosYAML);

})

app.listen(4000, () => console.log("Servidor corriendo en el puerto 4000"))