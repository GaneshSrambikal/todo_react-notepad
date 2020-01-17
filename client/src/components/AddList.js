import React, { Component } from 'react'

export default class AddList extends Component {
    constructor(){
        super()
        this.state ={
            title :""
        }
    }
    handleText = e =>{
     
        this.setState({
            title : e.target.value
        })
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title)
        
        this.setState({
            title :""
        })
    }
    
    render() {
        const title = this.state.title
        return (
            <div>
               <form onSubmit={this.handleSubmit} style={{display: "flex"}}>
               <input type="text" value={title} onChange={this.handleText} style={textBoxStyle}/>
               <input type="submit" value="Add" style={buttonStyle}/>
               </form>
            </div>
        )
    }
}
const textBoxStyle={
    flex : "9",
    padding : "7px 32px",
    
}
const buttonStyle ={
    flex : "2",
    border: "none",
    padding : "7px 32px",
    cursor: "pointer",
    background:"#660900",
    color:"#fff"

}