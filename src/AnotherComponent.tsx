import React, {useState, useEffect, ChangeEvent, createRef, RefObject, memo} from 'react';
import {AppProps} from './App';
import FancyButton from './FancyButton';
import {useStyle} from './styleHook'

function getRandomColor(): string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const AnotherComponent = (props: AppProps) => {

    const [count, setCount] = useState(0)
    const styles = useStyle(count)
    // this hook will automatically update since function component will upate from root
    // using hooks should follow the naming convention, use* will indicate this is a hook, so
    // we can imply that the useEffect in outside will trigger the updates happen inside.
    const [todo, setTodo] = useState(props.todo)
    const ref:RefObject<HTMLSpanElement> = createRef()

    // useEffect should be invoke in the top level of a component, should not put in some condition
    // this should be treat as the native lifecycles.
    useEffect(() => {
        // immediately after render, acts like componentDidUpdate or componentWillUpdate(_unsafe)
        setTodo(props.todo)
        try {
            ref.current ? ref.current.style.color = getRandomColor() : null
        } catch (e) {
            console.error(e)
        }
    })
    // acts like render
    return (
        <>
            <input placeholder='someInput' value={count || ''} style={{color: styles}} onChange={(e: ChangeEvent<HTMLInputElement>) => {setCount(Number(e.target.value))}}/>
            <FancyButton title={'click to add'} clickFunc={() => setCount(count + 1)} ref={ref}/>
            <span>{todo.text}</span>
            <span>{props.todo.text}</span>
        </>
    )
}
// React.memo returns inverse boolean value with shouldComponentUpdate
// return false means requires update, return true means no need for update
export default memo(AnotherComponent, function (prevProps, props):boolean { console.log('memo works one time', prevProps.todo.text !== props.todo.text); return prevProps.todo.text === props.todo.text });