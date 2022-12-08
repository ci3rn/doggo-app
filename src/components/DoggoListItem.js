import React, { useContext } from "react"
import DoggosContext from '../context/doggos-context'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Doggo = ({ doggo }) => {
    const { doggosDispatch } = useContext(DoggosContext)

    const removeDoggo = () => {
        doggosDispatch({ type: 'REMOVE_DOGGO', id: doggo.id })
    }

    return (
        <Card style={{ width: "18rem", margin: "5px" }}>
            <Card.Img variant="top" src={doggo.image.url} />
            <Card.Body>
                <Card.Title>{doggo.name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Breed group: {doggo.breed_group || "-"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Country: {doggo.country_code || "-"}
                    </ListGroup.Item>
                    <ListGroup.Item>Height: {doggo.height.metric} cm</ListGroup.Item>
                    <ListGroup.Item>Weight: {doggo.weight.metric} kg</ListGroup.Item>
                    <ListGroup.Item>Life span: {doggo.life_span}</ListGroup.Item>
                    <ListGroup.Item>Temperament: {doggo.temperament}</ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            name={doggo.name}
                            // onClick={handleShow}
                            variant="primary">Edit</Button>
                        <Button
                            name={doggo.name}
                            onClick={removeDoggo}
                            variant="danger"
                        >
                            Remove
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export { Doggo as default }