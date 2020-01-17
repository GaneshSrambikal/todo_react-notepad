import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  render() {
    
    const {id, title ,completed} = this.props.todo;
    const listStyle ={
      textDecoration:completed ? "line-through" :"none",
      background :"#fffa61",
      borderBottom :"1px #333 solid" ,
      fontFamily: "Cedarville Cursive', cursive",
      padding: "10px",
      
      
    }
    return (
      <div className="listStyle" style={listStyle}>
        <p>
          <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} />{' '}
          {title}
          <button style={buttonStyle} onClick={this.props.delTodo.bind(this , id)}><i className="fa fa-times" aria-hidden="true"></i></button>
        </p>
      </div>
    );
  }
}

const buttonStyle ={
      background:"#ff3333" ,
      border:"none",
      borderRadius:"50%",
      padding:"6px 10px",
      float:"right",
      marginRight:"10px",
      display:"inline-block",
      color:"#fff"
      
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo : PropTypes.func.isRequired
};
export default TodoItem;
