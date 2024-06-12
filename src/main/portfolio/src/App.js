import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Login from './components/Login';
import Join from './components/Join';
import JoinForm from './components/JoinForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loginInfo, setLoginInfo] = useState(0);
  

  useEffect(() => {
    axios.get('/member/sessionMember')
      .then((response) => {
        setLoginInfo(response.data)
      })
  },[])

  return (
    <div className="App">
      <div className='container'>
        <div className='row text-center mt-4'>
          <div className='col'>
            <Header loginInfo={loginInfo}/>
          </div>
        </div>

        <div className='row mb-5'>
          <div className='col'>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/join' element={<Join />}></Route>
              <Route path='/joinForm' element={<JoinForm />}></Route>
            </Routes>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
