import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">1</button>
          <button onClick={() => setColor("#af7ac5")} style={{backgroundColor: "#af7ac5"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">2</button>
          <button onClick={() => setColor("#5499c7")} style={{backgroundColor: "#5499c7"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">3</button>
          <button onClick={() => setColor("#48c9b0")} style={{backgroundColor: "#48c9b0"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">4</button>
          <button onClick={() => setColor("#f4d03f")} style={{backgroundColor: "#f4d03f"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">5</button>
          <button onClick={() => setColor("#283747")} style={{backgroundColor: "#283747"}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">6</button>
        </div>
      </div>
    </div>
  )
}

export default App
