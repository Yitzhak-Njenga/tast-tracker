import Task  from "./Task"
const Tasks = ({tasks,onDelete}) => {
    
  return (
    <>
    {/* getting text for each task with a specic id */}
        {tasks.map((task) =>(<Task  key={task.id} task={task}
        onDelete={onDelete}
        />))}
        
    </>
  )
}

export default Tasks