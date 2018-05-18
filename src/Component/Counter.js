import React, { Component } from 'react';
import CounterAction from '../store/CounterAction'
import { connect } from "react-redux";
class Counter extends Component {

    render() {
        console.log('store',this.props)
        return (
            <div>
                <button onClick={(e) => this.props.dcrmnt}>-</button><span>{this.props.counter}</span><button onClick={(e) => this.props.incrmnt}>+</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    console.log('map state to props',state)
    return {
        counter: state['count']
    }

}
function mapDispatchToProps(dispatch) {
    console.log('map dispatch to props',dispatch)
    return {
        incrmnt:   dispatch(CounterAction.increment()),
        decrmnt:  dispatch(CounterAction.decrement())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)