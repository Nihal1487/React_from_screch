import React from 'react'
import {sum,sub,malti,div} from "./Calcu"

function App() {
  return (
    <>
    <ul>
      <li>Sum of num is {sum(12,2)}</li>
      <li>Sub of num is {sub(12,2)}</li>
      <li>mulit of num is {malti(12,2)}</li>
      <li>div of num is {div(10,3)}</li>
    </ul>
    </>
  )
}



export default App