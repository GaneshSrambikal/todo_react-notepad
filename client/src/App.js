import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddList from "./components/AddList";
import About from './components/pages/About'
import uuid from "uuid";
import Header from "./components/layout/Header";
import axios from "axios";
import {BrowserRouter as Router , Route} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => {
        this.setState({
          todos: res.data
        });
      });
  }
  //tick checked
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  //delete a list
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //add list
  addTodo = title => {
    if(title === ""){
      
    }else{
      axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4();
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
    }
  };

  render() {
    return (
     <Router>
     <div className="App">
       <div className="container">
       <Header />
       <Route exact path="/" render={props =>
        <React.Fragment>
        
        <AddList addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
        </React.Fragment>
      }/>
      <Route path="/about" component={About} /> 
       
       </div>
 
   </div>
     
     </Router>
    );
  }
}

export default App;
