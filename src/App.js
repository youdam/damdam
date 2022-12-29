import {useState} from 'react';
import './App.css';

function App() {
  const [ names, setName] = useState(["홍길동", "손유담"]);

return(
  <div>
    <h2> ??  </h2>
    <h2> fffff </h2>
    <h3> 여기 추가됨ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ </h3>
    <input type="text"/>
    <button>upload</button>
    {names.map((name) => {
      return <p>{name}</p>;
    })}
  </div>
  )
 
}

export default App;
