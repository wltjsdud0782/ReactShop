import { Container, Navbar } from "react-bootstrap"
import './../css/joinForm.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDaumPostcodePopup from 'react-daum-postcode';

const JoinForm = () => {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        memberId: ''
        , memberPw: ''
        , memberName: ''
        , gender: 'male'
        , memberEmails: ['', 'naver.com']
        , memberTels: ['010', '', '']
        , memberAddr: ''
        , addrDetail: ''
        , postCode: ''
    });

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
                    <div className="row joinForm-box center-div">
                        <div className="col">

                            <div className="row bottom-line-div">
                                <div className="col">
                                    <h2>JOIN</h2>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col">
                                    <span>회원가입을 위한 정보를 입력해주세요.</span>
                                </div>
                            </div>

                            <div className="row mt-5 bottom-line-div">
                                <div className='col text-start'>
                                    * 필수입력사항
                                </div>
                            </div>

                            {/* 회원가입 */}
                            <table className="table align-middle joinForm-table">
                                <colgroup>
                                    <col width={30}></col>
                                    <col width={70}></col>
                                </colgroup>
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>아이디 *</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control essential" onChange={(e) => {
                                                        userInfo.memberId = e.target.value
                                                    }}></input>
                                                </div>
                                                <div className="col-3 d-grid">
                                                    <button type="button" className="btn btn-dark" onClick={() => {
                                                        if (userInfo.memberId === '') {
                                                            alert('아이디를 입력해주세요.')
                                                        }
                                                        else {
                                                            axios.get(`/member/idCheck/${userInfo.memberId}`)
                                                                .then((response) => {
                                                                    if (response.data === 0) {
                                                                        document.querySelector('.id-result').innerHTML = '<div style="color : green;">사용 가능한 ID입니다.</div>'

                                                                    }
                                                                    else {
                                                                        document.querySelector('.id-result').innerHTML = '<div style="color : red;">중복된 ID입니다.</div>'
                                                                    }
                                                                })
                                                                .catch((error) => {
                                                                    console.log(error)
                                                                })
                                                        }

                                                    }}>중복확인</button>
                                                </div>
                                            </div>
                                            <div className="row small-text">
                                                <div className="col">
                                                    <div className="id-result">중복확인 버튼을 눌러주세요.</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>비밀번호 *</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="password" className="form-control pass-input essential" maxLength={20} onChange={(e) => {
                                                        const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/
                                                        if (e.target.value.match(passwordRegEx) === null) {
                                                            document.querySelector('.pass-result').innerHTML = '<div style="color : red;">비밀번호 형식이 일치하지 않습니다.</div>'
                                                        }
                                                        else {
                                                            document.querySelector('.pass-result').innerHTML = '<div style="color : green;">비밀번호 형식이 일치합니다.</div>'
                                                        }
                                                    }}></input>
                                                </div>
                                                <div className="row small-text">
                                                    <div className="col">
                                                        비밀번호는 영문, 숫자를 혼합하여 8~20자로 입력해주세요.
                                                    </div>
                                                </div>
                                                <div className="row small-text">
                                                    <div className="col">
                                                        <div className="pass-result">비밀번호를 입력해주세요.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>비밀번호 확인 *</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="password" className="form-control essential" onChange={(e) => {
                                                        if (document.querySelector('.pass-input').value === e.target.value) {
                                                            document.querySelector('.pass-check-result').innerHTML = '<div style="color : green;">비밀번호가 일치합니다.</div>'
                                                            userInfo.memberPw = e.target.value
                                                        }
                                                        else {
                                                            document.querySelector('.pass-check-result').innerHTML = '<div style="color : red;">비밀번호가 일치하지 않습니다.</div>'
                                                        }
                                                    }}></input>
                                                </div>
                                            </div>
                                            <div className="row small-text">
                                                <div className="col">
                                                    <div className="pass-check-result">비밀번호를 다시 한 번 입력해주세요.</div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>이름 *</td>
                                        <td>
                                            <input type="text" className="form-control essential" onChange={(e) => {
                                                userInfo.memberName = e.target.value
                                            }}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>전화번호</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control text-center" defaultValue={"010"} readOnly></input>
                                                </div>
                                                <div className="col-1 center-div">
                                                    -
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control text-center" maxLength={4} onChange={(e) => {
                                                        if (isNaN(e.target.value)) {
                                                            alert('숫자만 입력해주세요.')
                                                            e.target.value = ''
                                                        }
                                                        else {
                                                            userInfo.memberTels[1] = e.target.value;
                                                        }
                                                    }}></input>
                                                </div>
                                                <div className="col-1 center-div">
                                                    -
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control text-center" maxLength={4} onChange={(e) => {
                                                        if (isNaN(e.target.value)) {
                                                            alert('숫자만 입력해주세요.')
                                                            e.target.value = ''
                                                        }
                                                        else {
                                                            userInfo.memberTels[2] = e.target.value;
                                                        }
                                                    }}></input>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>이메일 *</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control essential" onChange={(e) => {
                                                        userInfo.memberEmails[0] = e.target.value
                                                    }}></input>
                                                </div>
                                                <div className="col-1">
                                                    @
                                                </div>
                                                <div className="col">
                                                    <select className="form-select" onChange={(e) => {
                                                        userInfo.memberEmails[1] = e.target.value
                                                    }}>
                                                        <option>naver.com</option>
                                                        <option>nate.com</option>
                                                        <option>gmail.com</option>
                                                        <option>hanmail.net</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>주소</td>
                                        <td>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <input type="text" className="form-control" id="postCode" placeholder="우편번호" readOnly></input>
                                                </div>
                                                <div className="col-3 d-grid">
                                                    <button type="button" className="btn btn-dark" onClick={searchAddress}>검색</button>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <input type="text" className="form-control" id="addressCode" placeholder="주소" readOnly></input>
                                                </div>
                                            </div>
                                            <div className="row mt-3 mb-3">
                                                <div className="col">
                                                    <input type="text" className="form-control" id="detailAddress" placeholder="상세주소"></input>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>성별 *</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <input className="form-check-input" type="radio" name="gender" defaultValue="male" defaultChecked onClick={(e) => {
                                                        userInfo.gender = e.target.value
                                                    }}></input> 남성
                                                </div>
                                                <div className="col">
                                                    <input className="form-check-input" type="radio" name="gender" defaultValue="female" onClick={(e) => {
                                                        userInfo.gender = e.target.value
                                                    }}></input> 여성
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* 회어ㅜㄴ가입 */}

                            <div className="row mt-5">
                                <div className="col">
                                    <button type="button" className="btn btn-dark" onClick={() => {
                                        const essentialsCnt = document.querySelectorAll('.essential').length;
                                        // 이걸 뭐라고 쳐야하냐 value 값이 있는 갯수????
                                        const checkedCnt = document.querySelectorAll('.essential');
                                        if (window.confirm('입력된 정보로 회원가입 하시겠습니까?')) {
                                            console.log(essentialsCnt);
                                            console.log(checkedCnt);
                                            if (essentialsCnt === checkedCnt) {
                                                setUserInfo({ ...userInfo })
                                                axios.post('/member/insertMember', userInfo)
                                                    .then((response) => {
                                                        alert('회원가입이 완료되었습니다.')
                                                        navigate('/login')
                                                    })
                                                    .catch((error) => {
                                                        console.log(error)
                                                    })
                                            }
                                            else{
                                                alert('필수 입력 항목을 입력해주세요.')
                                            }

                                        }
                                        else {
                                            return;
                                        }
                                    }}>가입하기</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// 카카오 주소 검색 API 불러오기
function searchAddress() {
    // 해야함
    const Postcode = () => {
        const open = useDaumPostcodePopup('/joinForm');

        const handleComplete = (data) => {
            let fullAddress = data.address;
            let extraAddress = '';

            if (data.addressType === 'R') {
                if (data.bname !== '') {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== '') {
                    extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            }

            console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        };

        const handleClick = () => {
            open({ onComplete: handleComplete });
        };

        return (
            <button type='button' onClick={handleClick}>
                Open
            </button>
        );
    };
}

export default JoinForm