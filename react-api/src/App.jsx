import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [actress, setActress] = useState([]);
  const fetchActress = () => {
    axios
      .get('https://lanciweb.github.io/demo/api/actresses/')
      .then((response) => {
        setActress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Errore nella chiamata API:', error);
      });
      
    };
    useEffect(() => {
      fetchActress();
    }, []);


  return (
    <>
     
    </>
  )
}

export default App
