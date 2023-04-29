import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'f99f2a4e-ec6a-4556-b10d-38019e7780d8'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.1/'
});

type GetToDoListType = {
    id: string
    title: string
    addedDate: Date
    order: number
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T
}
export const toDoListAPI = {
    getToDoList() {
        return instance.get<GetToDoListType[]>(`todo-lists/`);
    },
    postToDoList(title: string) {
        return instance.post<ResponseType<{ item: GetToDoListType }>>(`todo-lists/`, {title});
    },
    deleteToDoList(toDoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${toDoId}`);
    },
    updateToDoList(toDoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${toDoId}`, {title});
    }
};

