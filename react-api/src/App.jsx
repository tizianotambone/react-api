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
       <div className='row gy-3'>
        {/* ciclo actress tramite map */}
        {actress.map((actress) => (
          <div key={`actress-${actress.id}`} className='col-12 col-md-6 col-lg-4'>
            <div className='card rounded-3'>
              <div className='actress-img'>
                <img src={actress.image} alt={actress.name} className='img-fluid' />
              </div>
            </div>
          </div>
        ))}

      </div>
      

    </>
  )
}

export default App
