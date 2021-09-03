import React from 'react';
import styles from "./Subscribers.module.css";

import { connect } from 'react-redux';
import { addSubscirber } from './redux';

const Subscribers = ({count, addSubscirber}) => {
  return(
    
      <div className={styles.items}>
        <h2>구독자 수: {count}</h2>
        <button onClick={()=> addSubscirber()}>구독하기 !</button>
      </div>

  )
}

const mapStateToProps = (state) => {
  return {
    count: state.subscribers.count
  }
}
// function Style
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscirber: () => dispatch(addSubscirber())
//   }
// }

// object Style
const mapDispatchToProps = {
  addSubscirber
}

export default connect(mapStateToProps, mapDispatchToProps)( Subscribers )