import './todo-list-item-status-component.css';
import { states } from '../todo-list-item/todo-list-item-component';
import { useEffect, useState } from 'react';

function TodoListItemStatus({itemStatus}) {
    let [itemState, setItemState] = useState(itemStatus);
    useEffect(() => {
        setItemState(itemStatus)
    }, [itemStatus]);

    if(itemState === states.NOTSTARTED) {
        return (
            <span className="c-pill c-pill--danger"><p>{itemState}</p></span>
        )
    }

    else if(itemState === states.INCOMPLETE) {
        return (
            <span className="c-pill c-pill--warning"><p>{itemState}</p></span>
        )
    }
    
    else if(itemState === states.COMPLETE) {
        return (
            <span className="c-pill c-pill--success"><p>{itemState}</p></span>
        )
    }

}

export default TodoListItemStatus;