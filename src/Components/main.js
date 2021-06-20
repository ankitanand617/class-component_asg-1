import React, { Component } from 'react'

export default class main extends Component {
    constructor() {
        super()
    
        this.state = {
             message:""
        }
    }

        change()
        {
            this.setState({
                message:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            })
        }
    
    


    render() {
        return (
            <div>
                <button id="click" onClick={()=>this.change()}>Click</button>
                <p id="para">{this.state.message}</p>
            </div>
        )
    }
}
