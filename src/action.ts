export function addTodo(text: string) {
    return {
        type: 'ADD_TODO',
        payload: {
            timeStamp: Date.now(),
            text
        }
    }
}

export function removeTodo(id: string) {
    return function (dispatch: any) {
        dispatch ({
            type: 'REMOVE_TODO',
            payload: {
                timeStamp: Date.now(),
                id
            }
        })
    }
}