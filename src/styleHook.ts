import {useState, useEffect} from 'react'

export function useStyle (indicator: number): string {
    const [styles, setStyles] = useState('')
    const setStyleOutput = () => {
        if (indicator % 2 === 0) {
            setStyles('black')
        } else {
            setStyles('red')
        }
    }
    useEffect(() => {
        setStyleOutput()
    })
    return styles
}
