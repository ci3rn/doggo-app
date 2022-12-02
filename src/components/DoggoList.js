import React, { useContext } from 'react'
import Doggo from '../components/Doggo'
import DoggosContext from '../context/doggos-context'

const DoggoList = () => {
    const { doggos } = useContext(DoggosContext)

    return doggos.map((doggo) => {
        return <Doggo key={doggo.id} doggo={doggo} />
    })
}

export { DoggoList as default }