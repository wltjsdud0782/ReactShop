import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <>
            {
                props.loginInfo === ''
                    ?
                    <div className="row text-end">
                        <div className="col">
                            <button type="button" className="btn" onClick={() => {
                                navigate('/login')
                            }}>LOGIN</button>
                            <button type="button" className="btn" onClick={() => {
                                navigate('/join')
                            }}>JOIN</button>
                        </div>
                    </div>
                    : props.loginInfo.memberRoll === 'ADMIN'
                    ? 
                    <div className="row text-end">
                        <div className="col">
                            {props.loginInfo.memberId}님
                            <button type="button" className="btn">마이페이지</button>
                            <button type="button" className="btn">관리자페이지</button>
                            <button type="button" className="btn"  onClick={() => {
                                if (window.confirm('로그아웃 하시겠습니까?')) {
                                    axios.get('/member/logout')
                                    alert('로그아웃 되었습니다.')
                                    window.location.replace('/')
                                }
                            }}>LOGOUT</button>
                        </div>
                    </div>
                    :
                    <div className="row text-end">
                        <div className="col">
                            {props.loginInfo.memberId}님
                            <button type="button" className="btn">마이페이지</button>
                            <button type="button" className="btn" onClick={() => {
                                if (window.confirm('로그아웃 하시겠습니까?')) {
                                    axios.get('/member/logout')
                                    alert('로그아웃 되었습니다.')
                                    window.location.replace('/')
                                }
                            }}>LOGOUT</button>
                        </div>
                    </div>
            }


            <div className="row">
                <div className="col">
                    <h1 className="cursor-pointer" onClick={() => {
                        navigate('/')
                    }}>선년이의 리액트 책꽂이</h1>
                </div>
            </div>
        </>
    )
}

export default Header;