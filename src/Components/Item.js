import React,{useState,useEffect} from 'react'









const Item=(props)=> {

 
const [temp,setTemp]=useState(null)
const [country,setCountry]=useState("india")
  const fetchdata=async()=>{
   
   // setCountry(props.country)
    alert(country)
    let url=`https://api.weatherapi.com/v1/current.json?key=7cd13524b1e548e9a50165506232803&q=${props.country}&aqi=no`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData)
    setTemp(parsedData.current.temp_c)
   
    
  }

  useEffect(() => {
    return () => {
      fetchdata();
    };
  }, []);
  
  return (
    <>
   
    <div className="col d-flex justify-content-center " style={{marginTop:"180px",height:"300px"}}>

    <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{temp}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <div className="card-footer text-body-secondary">
    <b>Last Updated:</b>
  </div>
</div>
</div>
    </>
  )
}

export default Item