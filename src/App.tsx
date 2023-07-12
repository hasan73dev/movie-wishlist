import { useState,useEffect } from 'react';
import './App.css';
import Card from './components/quiz_card/Card';
import { data } from './data/questions';
function App() {
  const [turn,setTurn] = useState<number>(0)
  const [startButton,setStartButton] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [color,setColor] = useState(false)
  const [datas, setDatas] = useState<typeof data>(data)
  const [isNext,setIsNext] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0); 
  const [isOver,setIsOver] = useState<boolean>(false)
  const [turn2,setTurn2] = useState<number>(0);
 const shuffle = (arr:string[]):string[] =>{
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
  return arr

 }
  
  let p = ["hasan","emreah"]
   const start = () =>{
    setTimeout(() =>{  
      setStartButton(true)
      setIsLoading(false)
    },1000)
    setIsLoading(true)
    shuffle(datas[turn].answers)
  }
  useEffect(()=>{
    if(turn2 === datas.length){
      setIsOver(true)
    }
    console.log(turn2)
    
  },[turn2])
  const changeColor = (e:React.MouseEvent<HTMLLIElement, MouseEvent>) =>{
  /* if(!isNext){
      if(datas[turn].correct_answer === e.currentTarget.innerHTML){
        e.currentTarget.style.backgroundColor = "green"
        console.log(datas[turn])
        setIsNext(true)
        setScore(prev => prev + 1)
      }else{
        e.currentTarget.style.background = "red"
        setIsNext(true)
        console.log(datas[turn])
        
  }
    }
   */
  }
  return (
    <div className="App">
   { !isOver &&  <div id='app-title'>
      <div style={{width:"100%",height:"100%",position:"relative"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
      <h3>Welcome To Quiz App</h3>
      <span style={{fontSize:"1.4rem",position:"absolute",right:"10px"}}>Score : {score}</span>
      </div>
     
      {
      startButton ? 
      <div style={{position:"relative",zIndex:"9999"}}>
      <Card datas = {datas}
      turn = {turn} 
      setColor = {setColor}  
      color = {color} 
      changeColor = {changeColor} 
      isNext = {isNext} 
      setIsNext = {setIsNext} 
      score = {score} 
      setScore = {setScore}/> 
      </div>
      : null
      }
      {
        isLoading ? <p>yukleniyor</p> : null
      }
    {//{height:"100%",,display:"flex"position:"absolute",,alignItems:"center",top:"28px",justifyContent:"center"}
}
      <div style={{width:"100%"}}>
      {!startButton && <button onClick={start} style={{width:"100%",height:"30px"}}>Start</button>}
     
      {startButton && <button onClick={() =>{

        if(datas.length > turn + 1 && isNext === true){
         
         // datas[turn].answers.sort(() => 0.5 - Math.random())
         shuffle(datas[turn].answers)

          setTurn(prev => prev + 1)
          setIsNext(false)
        }
        if(isNext === true){
          setTurn2(prev => prev + 1)
          shuffle(datas[turn].answers)

        }

      }} style={{width:"100%",height:"30px"}}>Next</button>  }
     </div>
      </div>
      </div>}
      {
      isOver && <div style={{width:"100%",height:"400px",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute"}}>
      <p onClick={() =>{
        setIsOver(false)
        setStartButton(false)
        setTurn(0)
        setTurn2(0);
        setScore(0)
        setIsNext(false)
      }} style={{fontSize:"5rem",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center"}}>Game Over <span style={{fontSize:"30px"}}>click to play again</span></p>
      </div>
      
      }
    </div>
  );
}

export default App;