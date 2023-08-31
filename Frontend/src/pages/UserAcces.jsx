import { useState ,useEffect } from "react";

import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
function UserAccess(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      // Fetch data from the API endpoint
      Axios.get('http://localhost:5000/CompOrder') // Update the URL to match your server
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
    }, []);
    return(
        <div className="row">
        
            
             {orders.map((order) => (
        <div className="col-md-4" key={order._id}>
          <div className="card h-100 w-100" style={{ width: '18rem' }}>
          <img
              className="card-img-top"
              src=""
              style={{width:"345px", height:"180px"}}
              alt=" "
            />
           
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{order.name}</h5>
              <p className="card-text flex-grow-1">{order.item}</p>
              <p>{order.price}</p>
            </div>
          </div>
        </div>
      ))}
        
        <div className="col-md-4">
          <div className="card h-100 w-100" style={{width:"18rem"}}>
            <img
              className="card-img-top"
              src="img/Project/faceMask/faceMask_card.jpg"
              style={{width:"345px", height:"180px"}}
              alt=" "
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Prafal Agro</h5>
              <p className="card-text flex-grow-1">
             
              </p>
              <p></p>

              <a href="/dashboard" className="btn btn-primary mt-auto"
                >Download Report</a
              >
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 w-100" style={{width:"18rem"}}>
            <img
              className="card-img-top"
              src="img/Project/shoppingMart/shoppingMartCard.jpg"
              style={{width:"345px", height:"180px"}}
              alt=" "
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Shopping Mart Analysis</h5>
              <p className="card-text flex-grow-1">
                Analyse the type of visitors and display the analysis on
                the dashboard.
              </p>
              <p>(Tech : Flask, REST)</p>
              <a
                href="/dashboard"
                className="btn btn-primary mt-auto"
                >View Live</a
              >
              <a
                href="img/Project/shoppingMart/index_shoping.html"
                className="btn btn-primary mt-auto"
                >View UI</a
              >
            </div>
          </div>
        </div>
          </div>

    );
}

export default UserAccess;