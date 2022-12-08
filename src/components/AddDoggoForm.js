import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DoggosContext from '../context/doggos-context'

const AddDoggoForm = () => {
    const { doggosDispatch, setAddDoggoModal } = useContext(DoggosContext)
    const [imageUrl, setImageUrl] = useState("")
    const [name, setName] = useState("")
    const [breedGroup, setBreedGroup] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [lifeSpan, setLifeSpan] = useState("")
    const [temperament, setTemperament] = useState("")

    const onImageUrlChange = (e) => {
        const imageUrl = e.target.value;
        setImageUrl(imageUrl);
    };
    const onNameChange = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const onBreedGroupChange = (e) => {
        const breedGroup = e.target.value;
        setBreedGroup(breedGroup);
    };
    const onCountryCodeChange = (e) => {
        const countryCode = e.target.value;
        setCountryCode(countryCode);
    };
    const onHeightChange = (e) => {
        const height = e.target.value;
        setHeight(height);
    };
    const onWeightChange = (e) => {
        const weight = e.target.value;
        setWeight(weight);
    };
    const onLifeSpanChange = (e) => {
        const lifeSpan = e.target.value;
        setLifeSpan(lifeSpan);
    };
    const onTemperamentChange = (e) => {
        const temperament = e.target.value;
        setTemperament(temperament);
    };


    const handleOnSubmit = (e) => {
        e.preventDefault()
        const doggo = {
            id: uuidv4(),
            image_url: imageUrl,
            name,
            breed_group: breedGroup,
            country_code: countryCode,
            height: { metric: height },
            weight: { metric: weight },
            life_span: lifeSpan,
            temperament,
        }
        
        doggosDispatch({
            type: 'ADD_DOGGO',
            id: uuidv4(),
            doggo
        })

        handleOnClickCloseButton()
    }

    const handleOnClickCloseButton = () => {
        setAddDoggoModal(false)
        // filtersDispatch({ type: 'HIDE_MODAL' })
    };

    return <>
        <Modal.Header closeButton onClick={handleOnClickCloseButton}>
            <Modal.Title>Add doggo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formGroupImageUrl">
                    <Form.Label>Image url:</Form.Label>
                    <Form.Control type="imageUrl" onChange={onImageUrlChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" onChange={onNameChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupBreedGroup">
                    <Form.Label>Breed group:</Form.Label>
                    <Form.Control type="breedGroup" onChange={onBreedGroupChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCountryCode">
                    <Form.Label>Country code:</Form.Label>
                    <Form.Control type="countryCode" onChange={onCountryCodeChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHeight">
                    <Form.Label>Height:</Form.Label>
                    <Form.Control type="height" onChange={onHeightChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupWeight">
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control type="weight" onChange={onWeightChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupLifeSpan">
                    <Form.Label>Life span</Form.Label>
                    <Form.Control type="lifeSpan" onChange={onLifeSpanChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupTemperament">
                    <Form.Label>Temperament:</Form.Label>
                    <Form.Control type="temperament" onChange={onTemperamentChange} />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOnClickCloseButton}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
    </>

    // return <form onSubmit={addDoggo}>
    //     Doggo name: <input value={doggoName} onChange={(e) => setDoggoName(e.target.value)} /><br />
    //     Doggo age: <input value={doggoAge} onChange={(e) => setDoggoAge(e.target.value)} /><br />
    //     Doggo weight: <input value={doggoWeight} onChange={(e) => setDoggoWeight(e.target.value)} /><br />
    //     <button>Add doggo</button>
    // </form>
}

export { AddDoggoForm as default }