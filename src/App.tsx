import { useState,useRef } from 'react';
import './App.css';
import  styled  from 'styled-components';
import words from "./wordList.json"
import Mui from './components/Mui';
import { Typography } from '@mui/material';
import Test from './components/Test';
import Moviecard from './components/Moviecard';

const Header = styled.div
`
  font-size:3rem;

`
const Wrapper = styled.div
`
display:flex;
flex-direction: column;
align-items: center;


`
/* font-size:1.5rem;
  border:2px solid white;
  border-radius:5px; */
const Button = styled.button
`
 
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  justify-content: center;
  letter-spacing: .25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  @media   (max-width: 660px) {
    padding:2px 10px;
  }
  @media   (max-width: 406px) {
    padding:2px 5px;
  }


`
type MovieData = {
  name:string;
  poster:string;
  runtime:string;

}

function App() {

 // const [wordToGuess, setWordToGuess] = useState(() => {
  //  return words[Math.floor(Math.random() * words.length)]
 // })


 const [inputState, setInputState] = useState<string>("")
 const [data, setData] = useState<MovieData>()
 const [allData, setAllData] = useState<MovieData[]>([])
 const [isSearching, setIsSearching] = useState<boolean>(false)
 const [allDataTwo, setAllDataTwo] = useState<MovieData[]>([])
 const [counter, setCounter] = useState<number>(0);

 /*


      {allDataTwo.map(data =>(
        <div>
          {data.name}
        </div>
      ))}

 */
 const search = () =>{
  setIsSearching(true)
  if(inputState){
    fetch(`http://www.omdbapi.com/?t=${inputState}&apikey=816aa18e`)
    .then(res => res.json())
    .then(data => setData(
      {
        name:data.Title,
        poster:data.Poster,
        runtime:data.Runtime
      
      }))
      
  }
  
    else{
      alert("type a movie")
    }
 }
    const showAllWishlist = () =>{
      
      
      if(counter === 1){
        setCounter(0)
        setIsSearching(true)
        return
      }
      
      const arr:MovieData[] = [];

      setIsSearching(false)
       for(let i = 0; i < 9 ;/*localStorage.length;*/ i++){
        //console.log(JSON.parse(localStorage.getItem(`data-${i}`)!))
        arr.push(JSON.parse(localStorage.getItem(`data-${i}`)!))
      //        setAllData(prev => [...prev,JSON.parse(localStorage.getItem(`data-${i}`)!)])
      setAllData(arr)
      setCounter(1)
       }
      
    }
   // console.log(allData)
  return(
    <>
       
      
      <div className='app'>
      <Wrapper>
     <Header>My wishlist</Header> 
     <div style={{display:"flex",alignItems:"center",marginTop:"10px",gap:"5px"}}>
     <input className='movie-input' value={inputState} onChange={(e) =>{
      setInputState(e.target.value)
     }} style={{width:"350px",fontSize:"1.5rem",border:"0",borderRadius:"10px",paddingLeft:"10px"}} type="text" />
     <Button onClick={search}>search</Button>
     <Button onClick={showAllWishlist}>show all wishlist</Button>

     </div>
     
     
      </Wrapper>


      {
      data && isSearching ? 
     <Moviecard data = {data}/>
        :null
      }
    


     {!isSearching &&
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,300px)",justifyContent:"center"}}>
      {

        allData.map((data,index) =>(
          <div style={{margin:"20px"}} key={index}>
          <img  style={{height:"400px",width:"100%",objectFit:"cover"}} src= {`${data.poster}`} alt="" />
          </div>
        ))
      } 
      
 </div>
}

{allDataTwo.map(data =>(
        <div>
          {data.name}
          <img src={data.poster} alt="" />
        </div>
      ))}
     </div>

    </>
  )
 
  
}

export default App;
///grid-template-columns:repeat(auto-fill,300px)