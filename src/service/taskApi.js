import axios from 'axios';

export const getTasks = () => {
    return axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
        console.log(res)
        return res.data
    })
}

export const deleteTask = (id) => {
    axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => {
        console.log(res)
        return res.data
    })
    return getTasks()
}

export const completeTask = (id) => {
    axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => {
        console.log(res)
        return res.data
    })
    return getTasks()
}

export const addTasks = (title) => {
    axios.post('https://practiceapi.devmountain.com/api/tasks', {title: title}).then(res => {
        console.log(res)
        return res.data
    })
    return getTasks()
}

export const editTask = (title, description, id) => {
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {title: title, description: description}).then(res => {
        console.log(res)
        return res.data
    })
    return getTasks()
}