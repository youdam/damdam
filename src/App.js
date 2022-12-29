import {useState} from 'react';
import './App.css';

function App() {
  const [ names, setName] = useState(["홍길동", "손유담"]);

return(
  <div>
    <input type="text"/>
    <button>upload</button>
    {names.map((name) => {
      return <p>{name}</p>;
    })}
  </div>
  )
 
}

export default App;
