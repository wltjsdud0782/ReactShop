import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemList from './ItemList';


const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='row mt-4'>
                <div className='col'>
                    <Navbar bg="dark" data-bs-theme="dark">
                        <Container>
                            <Navbar.Brand>Category</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => { navigate('/') }}>All</Nav.Link>
                                <Nav.Link onClick={() => { navigate('/') }}>IT/인터넷</Nav.Link>
                                <Nav.Link onClick={() => { navigate('/') }}>소설/에세이</Nav.Link>
                                <Nav.Link onClick={() => { navigate('/') }}>문화/여행</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <ItemList />
        </>
    )
}

export default Main;