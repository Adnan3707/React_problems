import React from 'react';
function Todo({ items }){
    return (
        <div>
        <ul>
        {items.map((obj) =>
             <li key ={obj.id}> {obj.title} </li>
        )}
        </ul>
        </div>
    )
}
export default Todo