import { useState } from "react";
import InputButton from "../input-button/input-button-component";
import TodoListItem from "../todo-list-item/todo-list-item-component";
import './todo-list-component.css';

function TodoList() {
    let [listItems, setListItems] = useState([]);

    return (
        <div>
            <h3> To do list </h3>
            <InputButton buttonDisplayName="Add new todo action" callbackFunction={() => {addTodoListItem()}}/> 
            <InputButton buttonDisplayName="Download list" callbackFunction={() => {downloadTodoListItems()}}/> 
            <InputButton buttonDisplayName="Clear list" callbackFunction={() => {clearTodoListItems()}}/> 
            <ul> {listItems} </ul>
        </div>
    )

    function addTodoListItem() {
        setListItems([...listItems, <TodoListItem key={listItems.length+1} listItemName={listItems.length+1}/>])
    }

    function downloadTodoListItems() {
        console.log("tried downloading to do list, functionality not yet complete");
    }

    function clearTodoListItems() {
        setListItems([]);
    }
}

export default TodoList;
