
import React from "react";
import { connect } from "react-redux";
import selectDoggos from '../selectors/doggos';

const DoggoList = (props) => {
    const doggos = props.doggos;
  
    return doggos.map((doggo) => {
        return <p key={doggo.id}>{doggo.name}</p>
    })
  };
  
  const mapStateToProps = (state) => ({ doggos: selectDoggos(state.doggos, state.filters) });
  
  const ConnectedDoggoList = connect(mapStateToProps)(DoggoList);
  
  export default ConnectedDoggoList;