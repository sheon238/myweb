import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login(){

  return(
    <div>
    <Input/>
    <Button primary onClick = { (e) => {alert(e.target.value)}}> 로그인 </Button>
    </div>
  )
}
function App() {
  return (
<div>
  <p> 안녕하세요 </p>
  <Button> 하이하이 </Button>
  <br></br>
  <Button> HIHI </Button>
  <Login/>
  </div>
  );
}

export default App;
