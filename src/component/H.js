import React from 'react'
import { useNavigate } from 'react-router-dom';
function H() {
  const navigate=useNavigate();
  let a = [];
  let idxa = [];

  function rslt() {
    let name = document.getElementById("tf").value;
    console.log(name);
    a.push(name);
    console.log("a=>", a);
  }

  function showrslt() {
    let idx;
    if (a.length < 3) {
      window.alert("enter atleast 3 names");
    }
    else {

      for (let i = 0; i < 3; i++) {
        idx = Math.floor(Math.random() * a.length);
        idxa.push(idx);
      }

      document.getElementById("ist").innerHTML = a[idxa[0]];
      document.getElementById("2nd").innerHTML = a[idxa[1]];
      document.getElementById("3rd").innerHTML = a[idxa[2]];
    }
  }
    const lout=()=>{
      localStorage.clear();
      navigate('/');
    }


  
  return (
    <>
      <div class="outer">
        <label class="lname">Name</label><input type="text" id="tf" class="tfname" />
        <div class="btn">
          <button onClick={()=>{rslt()}} class="sub">Submit</button>
          <button onClick={()=>{showrslt()}} class="sub">showrslt</button>
        </div>

        <div class=" box">
          Ist Winner
          <div id="ist"></div>
        </div>
        <div class="box">
          2nd Winner
          <div id="2nd"></div>
        </div>
        <div class="box">
          3rd Winner
          <div id="3rd"></div>
        </div>
        <button className='sub' onClick={lout}>LOG OUT</button>
      </div>
    </>
  );
}

export default H
