const tasks = [
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

]

const Tasks = () => {
  return (
    <>
    {/* getting text for each task */}
        {tasks.map((task) =>(<h3>{task.text}</h3>))}

    </>
  )
}

export default Tasks