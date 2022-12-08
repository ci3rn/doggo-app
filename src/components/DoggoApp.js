import { useEffect, useReducer, useState } from 'react'
import logo from '../doggo_logo.png'
import doggosDefaultState from '../doggos.json'
import DoggosContext from '../context/doggos-context'
import doggosReducer from '../reducers/doggos'
import filtersReducer from '../reducers/filters'
import DoggoList from './DoggoList'
import AddDoggoForm from './AddDoggoForm'
import ModalWindow from './ModalWindow';
import SearchBox from './SearchBox'
const USE_EFFECT_SINGLE_RUN = []

const DoggoApp = () => {
  const [doggos, doggosDispatch] = useReducer(doggosReducer, doggosDefaultState)
  const [filters, filtersDispatch] = useReducer(filtersReducer, { text: '', sortBy: 'name' })
  const [addDoggoModal, setAddDoggoModal] = useState(false)

  useEffect(() => {
    const doggos = JSON.parse(localStorage.getItem('doggos'))
    if (doggos) {
      doggosDispatch({ type: 'POPULATE_DOGGOS', doggos })
    }
  }, USE_EFFECT_SINGLE_RUN)

  useEffect(() => {
    localStorage.setItem('doggos', JSON.stringify(doggos))
  }, [doggos])

  return (
    <DoggosContext.Provider value={{ doggos, doggosDispatch, filters, filtersDispatch, setAddDoggoModal }}>
      { addDoggoModal && (<ModalWindow payload={(<AddDoggoForm />)} />) }
      <img src={logo} className="App-logo" alt="logo" />
      <SearchBox />
      <DoggoList />
    </DoggosContext.Provider>
  )
}

export { DoggoApp as default }