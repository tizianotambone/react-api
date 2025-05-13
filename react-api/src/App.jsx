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
      <div className="container">
        <div className='row gy-4'>
          <div className='col-12'>
          <h1>Actress List</h1>
          </div>
        </div>
      </div>
     
      

    </>
  )
}

export default App
