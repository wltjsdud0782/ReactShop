import { Container, Navbar } from "react-bootstrap";
import './../css/login.css'
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({
        memberId: ''
        , memberPw: ''
    })

    const pwRef = useRef();

    const login = () => {
        setLoginInfo({ ...loginInfo })
        axios.post('/member/login', loginInfo)
            .then((response) => {
                if (response.data === 1) {
                    alert(`${loginInfo.memberId}님 환영합니다! :)`)
                    window.location.replace('/')
                }
                else {
                    alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div className='row mt-4'>
                <div className='col'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand>LOGIN</Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col center-div">
                    <div className="row login-box center-div">
                        <div className="col">

                            <div className="row">
                                <div className="col">
                                    <h2>LOGIN</h2>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="offset-1 col-3 text-end">
                                    ID
                                </div>
                                <div className="col-5">
                                    <input type="text" className="form-control" onChange={(e) => {
                                        loginInfo.memberId = e.target.value
                                    }}></input>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="offset-1 col-3 text-end">
                                    PASSWORD
                                </div>
                                <div className="col-5">
                                    <input type="password" className="form-control" ref={pwRef} onChange={(e) => {
                                        loginInfo.memberPw = e.target.value
                                    }} onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            login()
                                        }
                                    }}></input>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <button type="button" className="btn btn-dark" onClick={login}>LOGIN</button>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col">
                                    <button type="button" className="btn">아이디찾기</button>
                                    &nbsp; | &nbsp;
                                    <button type="button" className="btn">비밀번호 찾기</button>
                                    &nbsp; | &nbsp;
                                    <button type="button" className="btn" onClick={() => {
                                        alert('회원가입 페이지로 이동합니다.')
                                        navigate('/join')
                                    }}>회원가입</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;