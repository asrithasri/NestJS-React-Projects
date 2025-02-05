import { response } from "express"
import {useEffect,useState} from 'react';


function App (){

  const [backendData ,setBackEndData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackEndData(data)
      }
    )
  },  [])
  return (
    <div>

    </div>
)
}

export default App