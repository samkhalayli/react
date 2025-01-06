import './App.css'

function App() {

  const students = ["Sam","Arash","Aimee","Kennedy"];
  const n = Math.floor(Math.random() * 4);
  const myName = students[n];

  function myName2()
  {
    const students = ["Sam","Arash","Aimee","Kennedy"];    
    const n = Math.floor(Math.random() * 4);
    const myName = students[n];

    return myName;
  }

  return (
    <>      
      <h1>This is {myName}</h1>
      <h1>This is {myName2()}</h1>
    </>
  )
}

export default App
