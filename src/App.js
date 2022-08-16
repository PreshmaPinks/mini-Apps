import './App.css';
import { Button } from 'antd';
import UseReducer from './components/UseReducerDemo';
import Header from './components/Header.js';

function App() {
  return (
    // <div className="App">
    //   <Button>hii</Button>
    //   <UseReducer/>
    // </div>
    <div className='main'>
      
      <div className='inner-main-container'>
        <Header/>
      </div>
    </div>
  );
}

export default App;
