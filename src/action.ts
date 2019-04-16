export function addTodo(text: string) {
    return {
        type: 'ADD_TODO',
        payload: {
            timeStamp: Date.now(),
            text
        }
    }
}

// type is more like a tuple to represent a set of data, will not create a new name instance
// interface is create a new name instance

// below two both works

// type DispatchParam = {
//     type: string,
//     payload?: any
// }

// type DispatchFunc = ({}: DispatchParam) => {}

interface DispatchFunc {
    ({}: {type: string, payload?: {}}): void
}

export function removeTodo(id: string) {
    return function (dispatch: DispatchFunc) {
        dispatch ({
            type: 'REMOVE_TODO',
            payload: {
                timeStamp: Date.now(),
                id
            }
        })
    }
}