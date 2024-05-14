import React, { useState } from 'react';
import Task from './Task';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskName,
      createTime: getTime(),
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const getTime = () => {
    const currentDate = new Date();
    return `${currentDate.toLocaleTimeString()}`;
  };

  return (
    <div className=' bg-teal-50 h-screen'>
     <h1 className=' text-center text-3xl pt-5 font-extrabold'>My Todo App</h1>
      <div className='mx-auto flex justify-center items-center my-5'>
        <form
          className='bg-zinc-200 p-10 inline-block my-5 rounded-lg border-black border-2'
          onSubmit={(e) => {
            e.preventDefault();
            console.log( e.target)
            const inputValue = e.target.task.value;
            if (inputValue.trim() !== '') {
              addTask(inputValue);
              e.target.task.value = ''; // Reset input field
            }
            else {
              alert("Enter Task First")
            }
          }}
        >
          <input
            name='task'
            className='text-black text-lg px-2 rounded-lg border-black border-2'
            placeholder='Type Here...'
          />
          <button type='submit' className='bg-teal-300 text-lg px-4 rounded-lg border-black border-2 m-2'>
            Add
          </button>
        </form>
      </div>
      <hr className=' bg-zinc-600 m-3'/>
      <div className=' flex justify-center items-center flex-col'>

      <h1 className='text-center text-3xl my-5'> Your Tasks</h1>
      <button onClick={deleteAllTasks} className='bg-green-400 border-black border-2 text-black px-3 rounded-lg inline'>
        Clear
      </button>
      </div>
      <div className='flex gap-3 m-10 flex-wrap'>
      {tasks.length > 0 ? tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            // onDone={handleDone}
          />
        )) : <p className='text-lg text-zinc-500 text-center'>No Task Available currently</p>
        }
      </div>
    </div>
  );
};

export default Todo;
