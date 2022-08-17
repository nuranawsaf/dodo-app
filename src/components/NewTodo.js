import React, {useState} from 'react'
import style from './newtodo.module.css';

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title : "", info: "",});

    const {title, info} = todo;

    const handleSubmit = (event) => { 
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: " ", info: " " });
    };

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        });
    };

  return <form className={style.form} onSubmit={handleSubmit} >
            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input 
                type="text" 
                name="title" 
                id="title" 
                value={title}
                onChange={handleChange}
                />
            </div>

            <div className={style["form-field"]}>
                <label htmlFor="info">Information: </label>
                <textarea 
                type="text" 
                name="info" 
                id="info" 
                value={info} 
                onChange={handleChange}
                />
            </div>

            <button>Add Todo</button>
</form>;
}

export default NewTodo
