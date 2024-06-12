import { Container, Navbar } from 'react-bootstrap';
import './../css/join.css'
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='row mt-4'>
                <div className='col'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand>JOIN</Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col center-div">
                    <div className="row join-box center-div">
                        <div className="col">

                            <div className="row bottom-line-div">
                                <div className="col">
                                    <h2>JOIN</h2>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <span>환영합니다! 선년이의 리액트 책꽂이 서비스 이용약관에 동의 해주세요!</span>
                                </div>
                            </div>

                            <div className="row mt-5 bottom-line-div">
                                <div className='col text-start'>
                                    <input type='checkbox' id='chk-all' onClick={checkAll}></input> 모두 동의합니다.
                                </div>
                            </div>

                            <div className="row mt-5 check-width">
                                <div className='col text-start'>
                                    <input type='checkbox' className='essential'></input> [필수] 만 14세 이상입니다.
                                </div>
                            </div>
                            <div className="row mt-3 check-width">
                                <div className='col text-start'>
                                    <input type='checkbox' className='essential'></input> [필수] 서비스 이용약관 동의
                                </div>
                            </div>
                            <div className="row mt-3 check-width">
                                <div className='col text-start'>
                                    <input type='checkbox' className='essential'></input> [필수] 개인정보 수집 및 이용 동의
                                </div>
                            </div>
                            <div className="row mt-3 check-width">
                                <div className='col text-start'>
                                    <input type='checkbox'></input> [선택] 마케팅 정보 수신에 대한 동의
                                </div>
                            </div>
                            <div className="row mt-5 check-width small-text">
                                <div className='col text-start'>
                                    만 14세 이상 회원 가입 가능합니다.
                                </div>
                            </div>


                            <div className="row mt-5">
                                <div className="col">
                                    <button type="button" className="btn btn-dark" onClick={() => {
                                        const essentialsCnt = document.querySelectorAll('.essential').length;
                                        const checkedCnt = document.querySelectorAll('.essential:checked').length;

                                        if (essentialsCnt == checkedCnt) {
                                            navigate('/joinForm')
                                        }
                                        else {
                                            alert('필수 항목을 체크해주세요.')
                                        }

                                    }}>계속 진행하기</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join;

function checkAll() {
    const chkAll = document.querySelector('#chk-all');
    const isChks = document.querySelectorAll("[type='checkbox']");

    if (chkAll.checked) {
        for (const isChk of isChks) {
            isChk.checked = true;
        }
    }
    else {
        for (const isChk of isChks) {
            isChk.checked = false;
        }
    }
}