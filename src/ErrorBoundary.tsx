import React from 'react'

interface MyState {
    hasError: boolean,
    e?: Error
}

class ErrorBoundary extends React.Component<React.Props<any>, MyState> {
    constructor (props: {}) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError (e: Error) {
        return {
            hasError: true,
            e
        }
    }

    componentDidCatch (e: Error) {
        console.error(e)
    }

    render () {
        let conditionalRendering = this.state.hasError ? <h1>Error</h1> : this.props.children
        return (
            <>
                {conditionalRendering}
            </>
        )
    }
}

export default ErrorBoundary;