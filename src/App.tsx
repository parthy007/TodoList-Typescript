import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import {ITask} from "./Interfaces"
import TodoTask from './Components/TodoTask';

const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{
      if(e.target.name === 'task'){
        setTask(e.target.value)
      }
      else{
        setDeadline(Number(e.target.value))
      }
  }

  const addTask = (): void =>{
    const newTask = {taskName: task, deadlineNumber: deadline};
    setTodoList([...todoList,newTask])
    setTask('')
    setDeadline(0)
  }

  const deleteTask = (taskNameToDel: string):void =>{
    setTodoList(todoList.filter((task)=>(task.taskName !== taskNameToDel)))
  }

  return (
    <div className="App">

      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder='Text...' onChange={handleChange} name='task' value={task}/>
          <input type="number" placeholder='Deadline ( In days)' onChange={handleChange} name='deadline' value={deadline}/>
        </div>
        <button
          onClick={addTask}
        >
          Add task
        </button>
      </div>

      <div className="todoList">
        {todoList.map((item: ITask, key: number)=>(
          <TodoTask key={key} task={item} deleteTask={deleteTask}/>
        ))}
      </div>
    </div>
  );
}

export default App;
