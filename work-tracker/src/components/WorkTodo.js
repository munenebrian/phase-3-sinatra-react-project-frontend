import React from 'react'

const WorkTodo = ({todos, setTodos}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
        {todos.map((todo) => (
            (
                <li className='list-work'key={todo.id}>
                    <input
                     type="text"
                     value={todo.title}
                     className="list"
                     onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className='button-edit task-button'>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            )
        ))}
    </div>
  );
}

export default WorkTodo;
