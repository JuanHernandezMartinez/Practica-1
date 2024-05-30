import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [json, setJson] = useState()
  const [xml, setXml] = useState()
  const [yaml, setYaml] = useState()


  const obtenerJson = async () => {
    return await axios.get('http://localhost:4000/json')
  }
  const obtenerXml = async () => {
    return await axios.get('http://localhost:4000/xml')
  }
  const obtenerYaml = async () => {
    return await axios.get('http://localhost:4000/yaml')
  }

  useEffect(() => {
    const obtenerDatos = async () => {
      const respuestaJson = await obtenerJson();
      console.log(respuestaJson)
      setJson(JSON.stringify(respuestaJson.data))
      const respuestaXml = await obtenerXml();
      setXml(respuestaXml.data)
      const respuestaYaml = await obtenerYaml();
      console.log(respuestaYaml)
      setYaml(respuestaYaml.data)
    }

    obtenerDatos()
  }, [])

  return (
    <div>
      JSON enviad a travez e una API REST:
      <p>{json}</p>
      <p>{json?.nombre}</p>
      <p>{json?.nombre}</p>


      XML enviad a travez e una API REST:
      <p>{xml}</p>

      YAML enviad a travez e una API REST:
      <p>
        {yaml}
      </p>

    </div>
  )
}

export default App
