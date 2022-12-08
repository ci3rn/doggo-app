import React, { useContext } from "react"
import DoggosContext from '../context/doggos-context'

const Doggo = ({ doggo }) => {
    const { doggosDispatch } = useContext(DoggosContext)

    const removeDoggo = () => {
        doggosDispatch({ type: 'REMOVE_DOGGO', id: doggo.id })
    }

    return (
        <>
            <p>{doggo.name}</p>
            <button onClick={() => removeDoggo(doggo.id)}>x</button>
        </>
    )
}

export { Doggo as default }