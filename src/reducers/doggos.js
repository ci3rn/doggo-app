// state - array of doggos
// type of action

const doggosReducer = (state, action) => {
    switch(action.type) {
      case 'POPULATE_DOGGOS':
        return action.doggos
      case 'ADD_DOGGO':
        return [
          ...state,
          { id : action.id, name: action.name }
        ]
      case 'REMOVE_DOGGO':
        return state.filter((doggo) => doggo.id !== action.id)
      default:
        return state
    }
  }

  export { doggosReducer as default } 