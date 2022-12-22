import React from 'react';
import {useState, useEffect} from 'react';




function App() {
  const [Id, setId ] = useState("");
  const [Password, setPassword] = useState("");
  const [notAllow,setNotAllow] = useState(true);
  const [idState,setIdState] = useState(false);
  const [passwordState,setPasswordState] = useState(false);

  useEffect(()=>{
    if(idState && passwordState) setNotAllow(false);
    else setNotAllow(true);
  }, [idState,passwordState])

   
    return <div>
      <h2>로그인</h2>
      <div>
        <p> 아이디 : <input type="text" className = "id" placeholder="아이디를 입력하세요." value = {Id} onChange={(event)=>{ 
          setId(event.target.value); 
          if(Id.length>3 && Id.length<14) setIdState(true); else setIdState(false);}}>
          </input></p>
        <p> 비밀번호 : <input type = "password" className = "password" placeholder="비밀번호를 입력하세요. 8~16자" value = {Password} onChange={(event)=>{ 
          setPassword(event.target.value); 
          if(Password.length>3 && Password.length<17) setPasswordState(true); else setPasswordState(false);}}></input></p>
        <button className = "loginButton" disabled = {notAllow} onClick={(event)=>{
          
        }}>로그인</button>
      </div>
      아직 가입하지 않았나요? <a href = "/">회원가입</a>
      
    </div>
  }
  
  export default App;