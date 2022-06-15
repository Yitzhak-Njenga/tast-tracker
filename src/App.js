import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () =>{
  const [showAddtask,setShowTask] = useState(false)
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
//add task

const addTask = (task) => {
  
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = {id,...task}
    setTasks([...tasks,newTask])
  
}

// delete task
      const deleteTask = (id)=>{
        // alert("delete" + id)
        setTasks(tasks.filter((task=> task.id !==id)))
      }

  //toggle reminder
  const toggleReminder = (id) => {
  // console.log(id)
    setTasks(
      tasks.map((task)=> 
      task.id === id ? {...task, reminder:
      !task.reminder} : task
      )
    )
  }
  return(
    <div className='container'>
      <Header onAdd ={setShowTask(!showAddtask )} />
      {/* show task using iternary instead of if statement  */}
      {showAddtask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ):(
        "No Tasks"
      )
    }
    </div>
  )  
 }

export default App;
