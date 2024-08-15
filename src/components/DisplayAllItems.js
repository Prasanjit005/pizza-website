import { useState, useEffect } from 'react';
import axios from 'axios';
import './display.css';
import { useNavigate } from "react-router-dom";

function DisplayAllItem() {
  const [pizza, setPizza] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    axios.get('http://localhost:5000/displayAllItems')
      .then(response => {
        setPizza(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the pizza data', error);
        setError('Failed to fetch pizza data. Please try again later.');
      });
  };

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/displayAllItems/${id}`)
    .then(response => {
      fetchPizza();

    })
    .catch(error =>{
      console.error('there was an error fetching the pizza data',error);

    })
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (pizza.length === 0) {
    return <div className="loading-message">Loading pizza data...</div>;
  }

  return (
    <div>
      <div className="row">
        {pizza.map(pizza => (
          <div className="col" key={pizza.id}>
            <div className="card-container">
              <div className="card">
                <div className="img-content">
                  <img src={pizza.image} height={300} alt={`Pizza with ${pizza.specialty}`} />
                </div>
                <div className="content">
                  <p className="heading">Pizza Details</p>
                  <p>
                    <li>Pizza Price: {pizza.price}</li>
                    <li>Pizza Specialty: {pizza.specialty}</li>
                    <li>Cheese Type: {pizza.cheeseType}</li>

                  </p>

                </div>

              </div>
              <button className="btn btn-danger me-2" onClick={() => handleDelete(pizza.id)}>Delete</button>
              <button className="btn btn-warning" onClick={() => navigate(`/updateItem/${pizza.id}`)}>UPDATE</button>


            </div>

          </div>
          
        ))}

      </div>

    </div>
  );
}

export default DisplayAllItem;
