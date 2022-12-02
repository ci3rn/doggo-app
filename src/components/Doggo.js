import React, { useContext } from "react"
import DoggosContext from '../context/doggos-context'

const Doggo = ({ doggo }) => {
    const { dispatch } = useContext(DoggosContext)

    const removeDoggo = () => {
        dispatch({
            type: 'REMOVE_DOGGO',
            id: doggo.id
        })
    }

    return (
        <>
            <p>{doggo.name}</p>
            <button onClick={() => removeDoggo(doggo.id)}>x</button>
        </>
    )
}

export { Doggo as default }