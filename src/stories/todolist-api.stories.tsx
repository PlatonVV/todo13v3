import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {toDoListAPI} from '../api/api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        toDoListAPI.getToDoList().then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'reactNative'
        toDoListAPI.postToDoList(title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const toDoId = 'e2f93f15-9515-42c8-bf1c-3be4543a652f'
            toDoListAPI.deleteToDoList(toDoId).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'Toolkit'
        const toDoId = '1114b77c-a945-48f4-b85b-07d0a47e4fa0'
            toDoListAPI.updateToDoList(toDoId, title).then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}