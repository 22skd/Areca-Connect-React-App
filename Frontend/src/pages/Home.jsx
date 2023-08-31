import React from "react";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
   return(
    <div>
    <div className="Container" style={{marginTop:"70px"}}>
      <div className="row">

        <div className="col-6">
          <h1 style={{textAlign: "center",marginTop: "20",fontSize:"55"}}>
           ARECA CONNECT
          </h1>
        </div>
        <div className="col-6">
         
          <h1 style={{textAlign:"center", marginTop: "20", fontSize: "55" , color: "green"}}>
            FEED SUPPLY
          </h1>
        </div>

        <div className="col-2"></div>
      </div>
      <hr />
     
      <div className="row">
        <div className="col-6">
          <img src="images/dashboard.jpg"
            style={{width:"100%",height:"400px"}} alt=""/>
        </div>
        <div className="col-6" style={{marginTop:"50px"}}>
          <b>ArecaNut Products</b>
          <p>
            <label>Items</label>
            <select id="arecanut" className="form-control">
                <option disabled selected value="">--SELECT--</option>
                <option value="1">Beetle Nuts</option>
                <option value="2">Areca Husk</option>
                <option value="3">Tannin</option>
                <option value="4">Timber</option>
                <option value="5">Areca Dry Leaves</option>

            </select>

            <span id="errarecanutMsg" style={{color: "red"}}></span>
          </p>

          <b>Please Select Quantity</b>
          <p>
            <label>Weigh Scale</label>
            <select id="weightGroup" className="form-control">
              <option disabled selected value="">--SELECT--</option>
              <option value="1">Kilograms</option>
              <option value="2">Grams</option>
              <option value="3">Units</option>
              <option value="4">Qunitals</option>
            </select>
            <span id="errWeightGroup" style={{color:"red"}}></span>
          </p>

          <b>Value</b>
          <p>
            <input type="text" className="form-control" placeholder="0"/ >
            <span id="errAgeGroup" style={{color:"red"}}></span>
           </p>


          <button
            className="btn btn-primary"
            style={{width:"100%" ,marginTop: "10px"}}>
            SUBMIT
          </button>
          <span id="successMsg" style={{color:"green"}}></span>
          <hr />
        </div>
      </div>

      <hr />
    </div>
    
      <div classNameName="row">
      <button type="button"  classNameName="btn btn-success btn-lg btn-block"><a href="https://lookerstudio.google.com/embed/reporting/ce19d9b2-b130-49eb-a2a3-147e3de76fb2/page/tEnnC">Dashboard</a></button>
      </div>
      






    </div>


   );

};

export default Home;