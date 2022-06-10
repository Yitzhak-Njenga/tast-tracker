import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const App = () =>{
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointement',
        day:'June 30th 2:30pm',
        reminder:'true'
    },
    {
        id:2,
        text:'Meeting at School',
        day:'Aug 1st 8:00am',
        reminder:'true'
    },
    {
        id:3,
        text:'Food Shopping',
        day: 'Aug 5th 9:00pm',
        reminder:'false'
    }

])

  return(
    <div className='container'>
      <Header/> 
      <Tasks tasks={tasks}/>
    </div>
  )  
 }

export default App;
