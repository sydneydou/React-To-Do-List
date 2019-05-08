import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class ToDoHeader extends React.Component {
  render() {
    return <h1>So Much To Do</h1>
  }
}



class AddToDo extends React.Component {
  onKeyPress = (event) => {
    console.log(event);
  }

  render() {
    return (
      <form>
        <textarea placeholder="feed dog" onKeyPress={(event) => { console.log(event.key) }} />
        <div>Press enter to add</div>
      </form>
    );
  }
}

const ClearButton = ({ removeCompleted }) => {

  return <button onClick={removeCompleted}>Clear Completed</button>;

}

const ToDoCount = ({ length }) => {
  return <div>{length} {length > 1 ? 'items' : 'item'}</div>

}

const ToDoElement = ({ item }) => (
  <li>
    {item.title}
    <input type="checkbox" id={item.id} checked={item.complete} />
    <label htmlFor={item.id} />
    <button>
      <i className="fa fa-trash" />
    </button>
  </li>
);

class ToDoList extends React.Component {
  render() {
    const ToDo = this.props.list;
    return (
      <div className="todo-list">
        <ul>{ToDo.map((todo, i) =>
          <ToDoElement key={i} item={todo} />)
        }</ul>
      </div>
    )
  }
}



class ToDoApp extends React.Component {
  render() {
    let newTodo = [
      { id: 0, title: 'Learn React', complete: false },
      { id: 1, title: 'Learn to Juggle', complete: false },
      { id: 2, title: 'Cook pigs', complete: true },
      { id: 3, title: 'Eat pigs', complete: false },
      { id: 4, title: 'Eat food', complete: true },
    ];
    let deletecompleted = () => {
      console.log("this works");
    }

    return <div>
      <ToDoHeader />
      <AddToDo />
      <ToDoList list={newTodo} />
      <div className="todo-admin">
        <ToDoCount length={newTodo.length} />
        <ClearButton removeCompleted={deletecompleted} />
      </div>
    </div>
  }
}

// ToDoList.propTypes = {
//   list: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRrequired,
//       complete: PropTypes.bool.isRrequired
//     })
//   ),
// };

// ToDoCount.propTypes = {
//   length: PropTypes.arrayOf(
//     PropTypes.shape({
//       length: PropTypes.number.isRequired
//     })
//   ),
// };

// ClearButton.propTypes = {
//   removeCompleted: PropTypes.arrayOf(
//     PropTypes.shape({
//       removeCompleted: PropTypes.func.isRequired
//     })
//   ),
// };


export default ToDoApp;
