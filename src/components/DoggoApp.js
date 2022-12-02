import { useEffect, useReducer } from 'react'
import logo from '../doggo_logo.png'
import doggosDefaultState from '../doggos.json'
import DoggosContext from '../context/doggos-context'
import doggosReducer from '../reducers/doggos'
import DoggoList from './DoggoList'
import AddDoggoForm from './AddDoggoForm'
const USE_EFFECT_SINGLE_RUN = []

const DoggoApp = () => {
  const [doggos, dispatch] = useReducer(doggosReducer, doggosDefaultState)

  useEffect(() => {
    const doggos = JSON.parse(localStorage.getItem('doggos'))

    if (doggos) {
      dispatch({ type: 'POPULATE_DOGGOS', doggos })
    }
  }, USE_EFFECT_SINGLE_RUN)

  useEffect(() => {
    localStorage.setItem('doggos', JSON.stringify(doggos))
  }, [doggos])

  return (
    <DoggosContext.Provider value={{ doggos, dispatch }}>
      <img src={logo} className="App-logo" alt="logo" />
      <AddDoggoForm dispatch={dispatch} />
      <DoggoList />
    </DoggosContext.Provider>
  )
}

export { DoggoApp as default }