import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Tab from '../primitives/Tab';

const Navigation = ({ activeIndex }) => {
    return (
        <>
            <Navbar expand='lg'>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls='busco-a-mi-mascota-nav' />
                <Navbar.Collapse className='justify-content-center' id='busco-a-mi-mascota-nav'>
                    <Nav className='d-flex'>
                        <Nav.Link>
                            <Tab active={activeIndex === 0} href='/' as='/home'>
                                Inicio
                            </Tab>
                        </Nav.Link>
                        <Nav.Link>
                            <Tab active={activeIndex === 1} href='/'>
                                Mascotas perdidas
                            </Tab>
                        </Nav.Link>
                        <Nav.Link>
                            <Tab active={activeIndex === 2} href='/'>
                                Adopción
                            </Tab>
                        </Nav.Link>
                        <Nav.Link>
                            <Tab active={activeIndex === 3} href='/'>
                                Historias
                            </Tab>
                        </Nav.Link>
                        <Nav.Link>
                            <Tab active={activeIndex === 4} href='/'>
                                Iniciar sesión
                            </Tab>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

Navigation.propTypes = {
    activeIndex: PropTypes.number.isRequired
};

export default Navigation;
