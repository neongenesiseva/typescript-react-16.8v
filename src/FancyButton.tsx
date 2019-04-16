import React, { Ref } from 'react'

const FancyButton = React.forwardRef((props: {title?: string, clickFunc: any}, ref: Ref<HTMLSpanElement>) => {
    return (
        <span ref={ref}>
            <span>A Fancy Button {props.title}</span>
            <input type='button' value='Click Me!' onClick={props.clickFunc} />
        </span>
    )
})

export default React.memo(FancyButton, (prev, next) => { console.log('check fancy button rendering', prev.clickFunc.toString() === next.clickFunc.toString()); return prev.title === next.title || prev.clickFunc.toString() === next.clickFunc.toString()})