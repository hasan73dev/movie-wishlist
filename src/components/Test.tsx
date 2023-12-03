
type Props = {
    name:string,
    age:number,
}
 function Test({name,age}:{name:string,age:number}) {
  return (
    <div>
        {name} {age}
    </div>
  )
}
export default Test