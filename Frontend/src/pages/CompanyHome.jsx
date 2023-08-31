import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"

import Axios from "axios";
function CompanyHome(){
 
    const url="http://localhost:5000/CompOrder"
    const[data,setData]=useState(
      {
          name:"",
          item:"",
          Quantity:"",
          PhoneNUmber:"",
          price:""
  
      }
    )
  
    const [message, setMessage] = useState(""); // To store registration status message
  
    function Submit(e) {
      e.preventDefault();
      Axios.post(url, {
        name: data.name,
        item: data.item,
        Quantity: data.Quantity,
        PhoneNumber:data.PhoneNumber,
        price:data.price
      })
        .then((res) => {
          setMessage(" data is stored sucessfully!"); // Set success message
          setData({ name:"", item:"", Quantity:"",PhoneNumber:"",price:"" }); // Clear form inputs
        })
        .catch((error) => {
          setMessage("Error registering user."); // Set error message
          console.error(error);
        });
    }
    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
    }


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
                Industry Needs
              </h1>
            </div>
    
            <div className="col-2"></div>
          </div>
          <hr />
         
          <div className="row">
            <div className="col-6">
              <img src="images/company.jpg"
                style={{width:"100%",height:"400px"}} alt=""/>
            </div>
            <div className="col-6" style={{marginTop:"50px"}}>
            <form onSubmit={(e)=>Submit(e)}>
              <b>Company Name</b>
              <input  onChange={(e)=>handle(e)} id="name" value={data.name} type="text" 
            placeholder='company name'
            autoComplete='off'
            name='name'
            className='form-control rounded-1'
            // onChange={(e)=>setEmail(e.target.value)}
               />
              <p>
                <label>Items</label>
                <select onChange={(e) => handle(e)} id="item" value={data.item} className="form-control">
        <option disabled value="">--SELECT--</option>
       <option value="Beetle Nuts">Beetle Nuts</option>
       <option value="Areca Husk">Areca Husk</option>
        <option value="Tannin">Tannin</option>
         <option value="Timber">Timber</option>
          <option value="Areca Dry Leaves">Areca Dry Leaves</option>
</select>
               
    
                <span id="errarecanutMsg" style={{color: "red"}}></span>
              </p>
    
              <b>Please Select Quantity</b>
              <p>
                <label>Weigh Scale</label>
              
                <input  onChange={(e)=>handle(e)} id="Quantity" value={data.Quantity} 
                type="text" 
            placeholder='Enter quantity in kg'
            autoComplete='off'
            name='Quantity'
            className='form-control rounded-1'
            
               />
               <br></br>
                <b>Phone Number</b>
               <input  onChange={(e)=>handle(e)} id="PhoneNumber" value={data.PhoneNumber}
                type="number" 
            placeholder='enter the contact number'
            autoComplete='off'
            name='PhoneNumber'
            className='form-control rounded-1'
           
               />
                <span id="errWeightGroup" style={{color:"red"}}></span>
              </p>
    
              <b>price</b>
              <p>
                <input  onChange={(e)=>handle(e)} id="price" value={data.price} type="number" className="form-control" placeholder="price" name="price"/ >
                <span id="errAgeGroup" style={{color:"red"}}></span>
               </p>
    
    
              <button
                className="btn btn-primary"
                style={{width:"100%" ,marginTop: "10px"}}>
                SUBMIT
              </button>
              <span id="successMsg" style={{color:"green"}}></span>
            </form>
          
          {message && <p className="text-danger">{message}</p>}
            </div>
          </div>
          
          <hr />
        
        </div>
    
        <div className="row">
      <button type="button"  className="btn btn-success btn-block"><a href="https://lookerstudio.google.com/embed/reporting/ce19d9b2-b130-49eb-a2a3-147e3de76fb2/page/tEnnC">Dashboard</a></button>
      </div>
          
    
    
    
    
    
    
        </div>
    
 );


}

export default CompanyHome;