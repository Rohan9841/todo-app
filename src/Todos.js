import React from 'react';

const Todos = ({ todosProp, deleteTodoProp }) => {

    const todoList = todosProp.length > 0 ? (
        todosProp.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodoProp(todo.id) }}>{todo.content}</span> 
                </div>
            )
        })
    ) : (
            <p className="center">You have no todos left, yess!</p>
        )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )

}

export default Todos;