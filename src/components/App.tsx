import * as React from 'react';

export interface Props {
  name: string;
}

function Test(props: Props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

class App extends React.Component {
  render() {
      <Test name="Hello World"/>
  }
}



export default App;
