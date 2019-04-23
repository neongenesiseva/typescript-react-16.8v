import React, {useState, ChangeEvent} from 'react'
import {useStyle} from './styleHook'

// this component use the same useStyle hook with styleHook.ts, but they can retain a seperate state
const HookTest = () => {
    const [inputing, setInputing] = useState(0)
    const style = useStyle(inputing)
    return (
        <input style={{color: style}} placeholder='anotherInput' value={inputing || ''} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputing(Number(e.target.value))} />
    )
}

export default HookTest;