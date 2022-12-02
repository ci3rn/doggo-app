import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DoggosContext from '../context/doggos-context'

const AddDoggoForm = () => {
    const { dispatch } = useContext(DoggosContext)
    const [doggoName, setDoggoName] = useState('')
    const [doggoAge, setDoggoAge] = useState('')
    const [doggoWeight, setDoggoWeight] = useState('')

    const addDoggo = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_DOGGO',
            id: uuidv4(),
            name: doggoName
        })
        setDoggoName('')
        setDoggoAge('')
        setDoggoWeight('')
    }

    return <form onSubmit={addDoggo}>
        Doggo name: <input value={doggoName} onChange={(e) => setDoggoName(e.target.value)} /><br />
        Doggo age: <input value={doggoAge} onChange={(e) => setDoggoAge(e.target.value)} /><br />
        Doggo weight: <input value={doggoWeight} onChange={(e) => setDoggoWeight(e.target.value)} /><br />
        <button>Add doggo</button>
    </form>
}

export { AddDoggoForm as default }