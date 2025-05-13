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
            <h1 className='text-center mt-3'>ACTRESSES LIST</h1>
          </div>
        </div>
      </div>
       
      <div className='row gy-3'>
        {actress.map((actress) => (
          <div key={`actress-${actress.id}`} className='col-12 col-md-6 col-lg-3'>
            <div className='card rounded-3'>
              <div className='actress-img'>
                <img src={actress.image} alt={actress.name} className='img-fluid' />
              </div>
              <div className='actress-info p-3'>
                <h3 className='actress-name'>{actress.name}</h3>
                <p className='actress-birth'>{actress.birth_year}</p>
                <p className='actress-nationality'>{actress.nationality}</p>
                <p className='actress-awards'>{actress.awards}</p>
                <p className='actress-biography'>{actress.biography}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </>
  )
}

export default App
