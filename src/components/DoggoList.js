import React, { useContext } from 'react'
import Doggo from '../components/Doggo'
import DoggosContext from '../context/doggos-context'
import doggosSelector from '../selectors/doggos'

const DoggoList = () => {
    const { doggos, filters } = useContext(DoggosContext)

    const filteredDoggos = doggosSelector(doggos, { text: filters.text, sortBy: filters.sortBy })

    return filteredDoggos.map((doggo) => {
        return <Doggo key={doggo.id} doggo={doggo} />
    })
}

export { DoggoList as default }