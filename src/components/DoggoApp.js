import { useEffect, useReducer, useState } from 'react'
import doggosDefaultState from '../doggos.json'
import DoggosContext from '../context/doggos-context'
import doggosReducer from '../reducers/doggos'
import filtersReducer from '../reducers/filters'
import DoggoList from './DoggoList'
import AddDoggoForm from './AddDoggoForm'
import Logo from './Logo'
import ModalWindow from './ModalWindow';
import SearchBox from './SearchBox'

const DoggoApp = () => {
  const [doggos, doggosDispatch] = useReducer(doggosReducer, doggosDefaultState)
  const [filters, filtersDispatch] = useReducer(filtersReducer, { text: '', sortBy: 'name' })
  const [addDoggoModal, setAddDoggoModal] = useState(false)

  useEffect(() => {
    const doggos = JSON.parse(localStorage.getItem('doggos'))
    if (doggos) {
      doggosDispatch({ type: 'POPULATE_DOGGOS', doggos })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('doggos', JSON.stringify(doggos))
  }, [doggos])

  return (
    <DoggosContext.Provider value={{ doggos, doggosDispatch, filters, filtersDispatch, setAddDoggoModal }}>
      { addDoggoModal && (<ModalWindow payload={(<AddDoggoForm />)} />) }
      <Logo />
      <SearchBox />
      <DoggoList />
    </DoggosContext.Provider>
  )
}

export { DoggoApp as default }