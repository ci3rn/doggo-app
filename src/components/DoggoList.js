import React, { useContext } from 'react'
import DoggoListItem from '../components/DoggoListItem'
import DoggosContext from '../context/doggos-context'
import doggosSelector from '../selectors/doggos'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DoggoList = () => {
    const { doggos, filters } = useContext(DoggosContext)
    const filteredDoggos = doggosSelector(doggos, { text: filters.text, sortBy: filters.sortBy })
    return (
        <Container>
            <Row>
                {filteredDoggos.map((doggo, index) => (
                    <Col key={index} xs='auto'>
                        <DoggoListItem key={doggo.id} doggo={doggo} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export { DoggoList as default }