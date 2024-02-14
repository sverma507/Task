import React from 'react';
import  {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Loginp() {
    const navigate=useNavigate();
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
  
    const getmail=(e)=>{
      setemail(e.target.value);
    }
  
    const getpass=(e)=>{
      setpass(e.target.value);
    }
  
    const login=()=>{
    let em=localStorage.getItem("e");
    let ps=localStorage.getItem("p");
    
        if(em==email&&ps==pass){
            navigate('/Home');
        }
        else
        {
            window.alert("Enter Valid main and password");
            navigate('/');
        }
      
    }

    const signup=()=>{
        localStorage.setItem("e",email);
        localStorage.setItem("p",pass);
        console.log("signup called");
        // let em=localStorage.getItem("e");
        // let ps=localStorage.getItem("p");
        // console.log("em=>",em);
    }
    // const get=()=>{
    //   console.log("get called");
    //   console.log(localStorage.getItem("e"));
    //   console.log(localStorage.getItem("p"));
    // }
    return (
      <>
        <div className='outer'>
          <div className="inner">
          <label className="text">Email:</label><input type="text" value={email} onChange={getmail} ></input>
          </div>
          <div className="inner">
          <label className="text">Password:</label><input type="password" value={pass} onChange={getpass}></input>
          </div>
          <button className="btn"  onClick={signup}>SIGN UP</button>
          <button className="btn"  onClick={login}>LOGIN</button>
          {/* <button className="btn" onClick={get}>GET</button> */}
        </div>
      </>
    );
}

export default Loginp
