import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
 const [myData, setMyData] = useState([])
 useEffect(() => {

 
axios
.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => setMyData(res.data));
  
}, []);

  return (
    <>
      <h1>AXIOS MED REACT</h1>
      <h4>En projekt i react hooks med axios</h4>

      <div className="Grid">
      {myData.map((post) => {
        const {id,title,body} = post ;
        return <div className="axios" key ={id}>
       <h2>{title.slice(0, 9).toUpperCase()}</h2>
       <p>{body.slice(0, 100)}</p>
        </div>
      
      }
    )}
    </div>
        
    </>
  );
}

export default App;
