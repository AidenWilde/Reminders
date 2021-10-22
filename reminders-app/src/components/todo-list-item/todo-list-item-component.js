import { useEffect, useState } from "react";
import InputButton from "../input-button/input-button-component";
import TodoListItemStatus from "../todo-list-item-status/todo-list-item-status-component";
import './todo-list-item-component.css';

const states = {
    NOTSTARTED: "Not started",
    INCOMPLETE: "Incomplete",
    COMPLETE: "Complete"
};

function TodoListItem({listItemName}) {
    let [itemName, setItemName] = useState(listItemName);
    let [itemState, setItemState] = useState(states.NOTSTARTED);

    useEffect(() => {   
        setItemName(itemName);
        setItemState(itemState);
    }, [listItemName, itemState]);

    return (
        <div className="background-grey">
            <p> Todo {itemName}: </p>
            <TodoListItemStatus itemStatus={itemState}/> 
            <span><input type="text"></input></span>

            <InputButton buttonDisplayName="Not Started" callbackFunction={() => {setItemState(states.NOTSTARTED)}}/> 
            <InputButton buttonDisplayName="Incomplete" callbackFunction={() => {setItemState(states.INCOMPLETE)}}/> 
            <InputButton buttonDisplayName="Complete" callbackFunction={() => {setItemState(states.COMPLETE)}}/> 
        </div>
    )
}

export default TodoListItem;
export {states};