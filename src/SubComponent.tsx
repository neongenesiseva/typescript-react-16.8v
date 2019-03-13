import React from 'react';
import {AppProps} from './App';

class SubComponent extends React.Component<AppProps> {

    componentDidMount () {
        // window.fetch('someThing.json', {
        //     method: 'GET',
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // })
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     if (!data.ok) {
        //         console.log('here')
        //         throw new Error('Wrong Response')
        //     }
        //     console.log('data', data)
        // })
        // .catch((e) => {
        //     console.log('e', e.message)
        // })
        const request = new XMLHttpRequest()
        request.open('GET', 'someThing.json')
        request.send()
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
              console.log('response', request.response)
            }
        }
        request.onload = function (e) {
            console.log('e', e)
        }
    }

    render () {
        return (
            <>
                <button onClick={() => this.props.removeTodo('test')}>delete</button>
                Learn React {this.props.todo.text}
            </>
        )
    }
}

export default SubComponent