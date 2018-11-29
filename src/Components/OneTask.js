import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTasks, deleteTask, completeTask, editATask} from '../ducks/reducer';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'

class OneTask extends Component {
    constructor(){
        super();
        this.state = {
            title: null,
            description: null
        }
    }

    componentDidMount(){
        this.setup()
    }

    setup = () => {
        this.props.getTasks()
        this.props.tasks.length > 0 
        ?
            this.setState({title: this.props.tasks[this.props.match.params.id].title, description: this.props.tasks[this.props.match.params.id].description})
        : 
            this.props.getTasks()
        
    }

    handleInput = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    deleteATask = (id) => {
        this.props.deleteTask(id)
        this.props.history.push('/')
    }

    completeIt = (id) => {
        this.props.completeTask(id)
        this.props.getTasks()
        this.props.history.push('/')
    }

    editIt = (title, description, id) => {
        this.props.editATask(title, description, id)
        this.props.getTasks()
        this.props.history.push('/')
    }

    render() {
        let task = this.props.tasks[this.props.match.params.id]

        const buttonStyle = {
            background: 'gray',
            borderRadius: 'none',
            color: 'white',
            padding: '2px 5px',
            fontSize: 15,
            marginTop: 10
        }

        const buttonStyle2 = {
            background: 'none',
            border: 'none',
            borderRadius: 'none',
            color: 'black',
            padding: '2px 5px',
            fontSize: 15,
            marginTop: 10,
            margin: '10px 20px'
        }

        const buttonStyle3 = {
            background: 'rgb(211, 71, 53)',
            border: 'none',
            borderRadius: 'none',
            color: 'black',
            padding: '2px 5px',
            fontSize: 15,
            margin: '10px 13px'
        }

        const buttonStyle4 = {
            background: '#4d79ff',
            border: 'none',
            borderRadius: 'none',
            color: 'black',
            padding: '2px 5px',
            fontSize: 15,
            marginTop: 10,
            margin: '10px 13px'
        }

        return (
        <div>
            {
                this.props.tasks.length > 0 && this.state.title !== null
                ?
                <div>
                    <Link to='/'><button style={buttonStyle2}>Back to Tasks</button></Link> <br />
                    Task: <input value={this.state.title} name='title' onChange={(e) => this.handleInput(e)}/> <button style={buttonStyle} onClick={() => this.completeIt(task.id)}>Complete</button><br />
                    Description: <input value={this.state.description} name='description' onChange={(e) => this.handleInput(e)}/> <br />
                <button style={buttonStyle4} onClick={() => this.editIt(this.state.title, this.state.description, task.id)}>Save</button>
                <button style={buttonStyle} onClick={() => this.setState({title: task.title, description: task.description})}>Cancel</button>
                <button style={buttonStyle3} onClick={() => this.deleteATask(task.id)}>Delete</button>
                </div>
                :
                <div>
                Loading...
                {this.setup()}
                </div>
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.taskList.tasks
    }
} 

export default withRouter(connect(mapStateToProps, {getTasks, deleteTask, completeTask, editATask} )(OneTask));