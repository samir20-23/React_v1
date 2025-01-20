import React , {useState} from 'react';
import Button from './Button';

function App() {
 var [variable,setVariable] = useState('');
  // دالة يتم استدعاؤها عند النقر على الزر
 
  var click = ()=> {
    setVariable('samir aoulad amar');
  }

  return (
  <div>
    <h1>button clicked</h1>
    <Button onClick={click}/>{}
    <p>{variable}</p>{}
  </div>
  );
}

export default App;