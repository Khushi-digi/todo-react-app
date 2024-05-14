import React, { useState } from 'react';


const Task = ({ task, onDelete, onDone}) => {
  const [isDone, setIsDone] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleDone = () => {
    setIsDone(true);
    onDone(task.id);
  };
  return (
    <div className={`bg-zinc-200 rounded-xl text-white w-48 h-36 flex flex-col items-center overflow-hidden justify-center border-2 border-black ${isDone ? 'opacity-40' : ''}`}>
      <p className='text-sm text-opacity-60 text-gray-700'>{task.createTime}</p>
      <h3 className='text-xl text-black '>{task.text}</h3>
      <div className='flex gap-2'>
        <button disabled={isDone} className='mt-3 rounded-lg text-black border-2 border-black px-2 bg-red-400' onClick={handleDelete}>Delete</button>
        <button onClick={handleDone} disabled={isDone}  className='mt-3 rounded-lg text-black border-2 border-black px-2 bg-teal-400'>Done</button>
      </div>
    </div>
  );
};

export default Task;
