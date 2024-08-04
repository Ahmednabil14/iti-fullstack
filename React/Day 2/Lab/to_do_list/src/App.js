import logo from './logo.svg';
import './App.css';
import Title from "./components/title"
import Input from "./components/input"
import Tasks from "./components/list"
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <Title title="ToDoList" />
      <Input list={list} setList={setList}/>
      <Tasks list={list} setList={setList} />
    </div>
  );
}

export default App;
