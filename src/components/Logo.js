import React, { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from '../doggo_logo.png'
import DoggosContext from '../context/doggos-context'

const Logo = () => {
    const { doggos } = useContext(DoggosContext)
    return (
        <Container>
            <Row>
            <Col>
                <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col>
                <Badge bg="bg badge">{doggos.length}+</Badge>
            </Col>
            </Row>
        </Container>)
}

export { Logo as default}