import { qnaList } from './TestData.js';
import { useState , useEffect} from 'react';
import axios from 'axios';

function App() {

  var [qn,setQn] = useState(0);
  var [types,setType] = useState([""]);

  useEffect(()=>{
    axios({
      method:'POST',
      url:'',
      data : { types }
      ,
    }).then(response => alert(response.data.result))})
   

  function plus(){
    setQn(++qn);
     }

  const answerList = qnaList[qn].a.map((answers: any) => 
    <div className="flex text-center  m-auto my-1 h-16  w-11/12 rounded-xl  bg-amber-200/60 active:bg-red-300/80" key = {answers.id}><button key = {answers.id } onClick={(event)=>{
      let type = qn +":"+ answers.type 
      setType([...types,type]);
      plus();

  } }> {answers.answer} </button></div>);



  return <div className="flex justify-center w-full h-screen bg-black/20">
  <div className=" m-auto top-10 w-2/3 h-2/3 max-w-lg max-h-96 min-h-fit border-2 border-x-8 border-yellow-200/70 bg-white/50 rounded-xl">
    <div className="flex m-auto my-3 w-11/12 h-1/5 rounded-xl text-center items-center bg-rose-200">{ qnaList[qn].q }</div>
    { answerList }
  </div>
</div>
}

export default App;