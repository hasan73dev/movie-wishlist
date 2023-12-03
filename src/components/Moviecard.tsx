import { useState,useEffect } from 'react';
import  styled  from 'styled-components';

type MovieData  = {
    name:string;
    poster:string;
    runtime:string;
}
type Props = {
    data:MovieData | undefined;
   
}
const Card = styled.div
`
    width:270px;
    height:370px;
    border:2px solid white;
    margin-top:20px;
    margin-left:15px;
    position:relative;

   

`
let num = 0;

type DatasProps = {
    name:string,
    poster:string,
    runtime:string

}
const datasArray:DatasProps[] = [{
    name:"seven",
    poster:"efdf",
    runtime:"234min"
},{
    name:"oppenhemier",
    poster:"efdf",
    runtime:"234min"
},
{
    name:"go",
    poster:"efdf",
    runtime:"234min"
}]
export default function Moviecard({data}:Props) {

   
    const [justData, setJustData] = useState<DatasProps[]>([JSON.parse(localStorage.getItem("all")!)])


    const save = (data:MovieData | undefined) => { 
     
        setJustData(prev => [...prev,{name:data?.name!,poster:data?.poster!,runtime:data?.runtime!}])
        console.log("tiklandi");
        localStorage.setItem("all",JSON.stringify(justData))
        console.log(data)

      for(let i = 0; i < 10; /*localStorage.length;*/ i++){
                
         if(JSON.parse(localStorage.getItem(`data-${i}`)!).name === data?.name){
              return
           }
           
      }
     
       localStorage.setItem(`data-${num}`,JSON.stringify(data));
       num ++; 
        
    }


  return (
    <Card>
        <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={`${data?.poster}`} alt="" />
        <div style={{position:"absolute",bottom:"0px",fontSize:"1.6rem",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"black",height:"50px"}}>{data?.name}</div>
        <button onClick={() => save(data)} style={{fontSize:"1.2rem"}}>Add To WishList</button>

    </Card>
  ) 
}