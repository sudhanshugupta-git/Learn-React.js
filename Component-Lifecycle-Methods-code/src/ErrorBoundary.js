import { Component } from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super();

        this.state={
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error, info){
        console.log("Error: ",error)
        console.log("Info: ",info)
    }

    render(){
        if(this.state.error){
            return (<h1>Something went wrong! Contact Admin</h1>)
        }
        return(
            <>
            {/* Now whatever we wrap inside error boundary that will become the children of this component */}
                {this.props.children}
            </>
        )
    }
}