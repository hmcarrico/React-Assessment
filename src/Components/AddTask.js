import React, { Component } from 'react';
import {addTask, getTasks} from '../ducks/reducer';
import {connect} from 'react-redux';

class AddTask extends Component {
    constructor(){
        super();
        this.state = {
            title: null,
        }
    }

    addTask = (title) => {
        if(this.state.title !== null){
            this.props.addTask(title)
            this.props.getTasks()
            this.setState({title:null})
        } else {
            alert('Please enter a task before submitting')
        }
    }

    handleInput = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    render() {
        const inputStyle = {
            border: 'none',
            'borderBottom': '3px solid black',
            background: 'transparent',
            width: 300,
            outline: 'none',
            fontSize: 20
        }

        const buttonStyle = {
            background: '#4d79ff',
            borderRadius: 'none',
            color: 'white',
            padding: '10px 20px',
            fontSize: 20,
            marginTop: 10
        }

        return (
        <div style={{marginLeft: 30}}>
            <h3 style={{'fontSize': 33, margin: 0, width: '100%'}}>To-Do:</h3> <br />
            <input value={this.state.title} style={inputStyle} name='title' onChange={(e) => this.handleInput(e)}/> <br />
            <button style={buttonStyle} onClick={() => this.addTask(this.state.title)}>Add Task</button>
            {console.log(this.state.title)}
        </div>
        )
    }
}

export default connect(null, {addTask, getTasks})(AddTask);
