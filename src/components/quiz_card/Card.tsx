import { data } from "../../data/questions"
import React from "react"
import { useState,useEffect } from 'react';


export default function Card({datas,turn,setColor,color,changeColor,isNext,setIsNext,score,setScore}:{datas:typeof data,turn:number,setColor:React.Dispatch<React.SetStateAction<boolean>>,color: boolean,changeColor(e:React.MouseEvent<HTMLLIElement, MouseEvent>):void,isNext:boolean,setIsNext:React.Dispatch<React.SetStateAction<boolean>>
score:number,setScore:React.Dispatch<React.SetStateAction<number>>
}){
 const [selectedAnswer,setSelectedAnswer] = useState<string>()
 const [className,setClassName] = useState("")
//  data[turn].answers.sort(() => 0.5 - Math.random())

  return (
    <div>
        
      
        <div>
        <p style={{marginTop:"12px",fontSize:"1.5rem",marginBottom:"10px"}}>{data[turn].question}</p>
        <ul style={{listStyle:"none"}}>

          {datas[turn].answers.map((answer,index) =>(
            <li className={selectedAnswer === answer ? className : "classic"} style={{paddingLeft:"10px",cursor:"pointer"}} onClick={(e) =>{
             if(!isNext){
                changeColor(e)
                setSelectedAnswer(answer);
               //  console.log(selectedAnswer);
               // console.log(answer);
               console.log("clicked")
                setClassName(datas[turn].correct_answer === answer ? "classic correct" : "classic wrong");
                if(datas[turn].correct_answer === answer){
                  setScore(prev => prev + 1)
                }
                else{
                  console.log("here")   
                }
                setIsNext(true);
                
             }
            }}  key={index}>
              {answer}
            </li>
          ))}

        </ul>

        </div>
   
    </div>
  )
}
