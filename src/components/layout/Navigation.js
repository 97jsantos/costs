import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import ScrollTop from '../scrolltop/ScrollTop'

import styles from './Navigation.module.css'

import logo from '../../img/costs_logo.png'

function Navigation() {
    return (
        <Navbar className={styles.navbar} collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"><img src={logo} alt="costs logo"/></Navbar.Brand>
            <Navbar.Toggle className={styles.navbar_toggler} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
            <Nav>
                <NavLink onClick={ScrollTop} className="menubtn" to="/">Home</NavLink>
                <NavLink onClick={ScrollTop} className="menubtn" to="/projects">Projetos</NavLink>
                <NavLink onClick={ScrollTop} className="menubtn" to="/company">Empresa</NavLink>
                <NavLink onClick={ScrollTop} className="menubtn" to="/contact">Contato</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation