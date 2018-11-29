import React, { Component } from 'react';
import AddTask from './AddTask';
import {getTasks, deleteTask, completeTask} from '../ducks/reducer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class DisplayTask extends Component {
    constructor(){
        super();
        this.state = {
            loader: false
        }
    }
    componentDidMount(){
        this.getAll() 
    }

    getAll = () => {
        this.props.getTasks()
    }

    deleteStuff = (id) => {
        this.props.deleteTask(id)
        this.getAll()
    }

    completeIt = (id) => {
        this.props.completeTask(id)
        this.getAll()
    }

    changeLoading = () => {
        this.setState((prevState) => {
            return {loader: !prevState.loader}
        })
    }

    render() {
        const border = {
            // background: 'rgb(42, 111, 146)',
            background: 'white',
            width: 500,
            display: 'grid',
            gridTemplateColumns: '100px 286px 100px 20px',
            margin: '0 auto',
            marginTop: 10,
            padding: '15px 40px'
        };

        const buttonStyle = {
            background: 'none',
            border: 'none',
            padding: 0
        }

        const buttonStyle2 = {
            background: 'none',
            border: 'none',
            color: 'rgba(0, 0, 0, 0.199)',
            padding: 0
        }
        return (
        <div>
            <AddTask getTask={this.props.getTasks}/>
            {console.log(this.state.loader)}
            {
                this.props.tasks
                ?
                this.props.tasks.map(task => {
                return <div style={{textAlign: 'left', margin: 30, color: 'black'}}>
                    <div style={border}>
                        {task.completed ?
                        <Link to={`/task/${task.id}`} style={{textDecoration: 'none', marginRight: 50}}>
                            <del style={{color: 'black', fontWeight:'bold'}}>{task.title}</del>
                        </Link>
                        :
                        <Link to={`/task/${task.id}`} style={{textDecoration: 'none', marginRight: 50}}>
                            <b style={{color: 'black', textDecoration: 'none'}}>{task.title}</b>
                        </Link>
                        }
                        <p>{task.description}</p>
                        <button style={task.completed ? buttonStyle2 : buttonStyle} onClick={() => this.completeIt(task.id)}>Complete</button>
                        <button style={buttonStyle} onClick={() => this.deleteStuff(task.id)}>X</button>
                    </div>
            </div>
        })
        :
        <div>
            Loading...
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

export default connect(mapStateToProps, {getTasks, deleteTask, completeTask})(DisplayTask);