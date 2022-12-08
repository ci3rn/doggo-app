import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import {
    setTextFilter,
    sortByAge,
    sortByName,
    sortByWeight,
} from "../actions/filters"
import { useContext } from 'react'
import DoggosContext from '../context/doggos-context'

const SearchBox = () => {
    const { filters, filtersDispatch } = useContext(DoggosContext)
    const { setAddDoggoModal } = useContext(DoggosContext)

    const handleOnSelect = (sortBy) => {
        if (sortBy === "name") {
            filtersDispatch(sortByName())
        } else if (sortBy === "age") {
            filtersDispatch(sortByAge())
        } else if (sortBy === "weight") {
            filtersDispatch(sortByWeight())
        }
    }

    const handleOnClick = () => {
        setAddDoggoModal(true)
        // filtersDispatch({ type: 'SHOW_MODAL' })
    }

    const handleOnChange = (e) => {
        filtersDispatch(setTextFilter(e.target.value))
    }

    return (
        <Container>
            <InputGroup className="mb-3" defaultValue="" onChange={handleOnChange}>
                <Button variant="success" onClick={handleOnClick}>
                    Add
                </Button>
                <FormControl
                    placeholder="Search for doggos..."
                    aria-label="Text input with dropdown button"
                />
                <Dropdown onSelect={handleOnSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {filters.sortBy}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="name">name</Dropdown.Item>
                        <Dropdown.Item eventKey="weight">weight</Dropdown.Item>
                        <Dropdown.Item eventKey="age">age</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </InputGroup>
        </Container>
    )   
}

export { SearchBox as default }