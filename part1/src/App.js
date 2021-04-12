
import React from 'react'


const Title= ({course})=>{
 
  return<h1>{course}</h1>
}

const App =()=>{
  const course= 'Half stack aplication development'
  const part1 ='fundamentals of react'
  return(
    <div>
      <Title course={course}/ >
      <p>
      {part1}
    </p>
    </div>
  
  )
}
export default App;
