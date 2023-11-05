import { useState } from 'react';
import './app.css';
function App() {
 const [bgColor, setbgColor] = useState( 'olive')

  return (
    <>
      <div style={{backgroundColor:bgColor}} className='screen-h screen-w  flex flex-col justify-center items-end md:flex-row'>
       
     
        <div className=" bg-gray-500 sm:rounded-md m-4 flex flex-col justify-between    md:flex-row rounded-xl    ">
            <button onClick={()=> setbgColor('green')} className="bg-green-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4 ">Green</button>
            <button onClick={()=> setbgColor('red')}className="bg-red-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4">Red</button>
            <button onClick={()=> setbgColor('blue')}className="bg-blue-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4">Blue</button>
            <button onClick={()=> setbgColor('orange')} className="bg-orange-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4">Orange</button>
            <button onClick={()=> setbgColor('yellow')}className="bg-yellow-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4">Yellow</button>
            <button onClick={()=> setbgColor('purple')} className="bg-purple-800 my-2 p-1 rounded-full h-10 w-16  md:mx-4">Purple</button>
            <button style={{backgroundColor:'olive'}}onClick={()=> setbgColor('olive')} className=" bg-olive my-2 p-1 rounded-full h-10 w-16  md:mx-4">Default</button>
        </div>
          
          
        
      </div>
    </>
  )
}

export default App
