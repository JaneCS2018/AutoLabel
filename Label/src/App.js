import './App.css';
import React from 'react';
import UploadedInput from './components/Upload'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <div className="container">
          <UploadedInput />
          <div>
            <button className="ui blue button">Show Table</button>
            <button className="ui teal button">Show Labels</button>
            <button className="ui violet button">Generate Product Labels</button>
            <button className="ui purple button">Generate Box Labels</button>
            <button className="ui primary basic button">Download Product Labels</button>
            <button className="ui secondary basic button">Download Box Labels</button>
          </div> 
        </div>
      </div>
    );

  }
 
}

export default App;
