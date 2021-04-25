import './Todo.css';
import { useState } from 'react';
function Todo() {
    const demo_content = []

    const [title, setTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [todo, setTodo] = useState([...demo_content]);

    function addTodo() {
        if (!title || !subtitle) return;
        const data = { title, subtitle }
        let duplicate;
        todo.map((item) => {
            if (item.title === data.title && item.subtitle === item.subtitle) {
                duplicate = true
            }
            return item;
        })
        if (duplicate) {
            // TODO: Duplicate Alert Comming Soon!
            pushData(data);

        } else {
            pushData(data);
        }
    }

    function pushData(data) {
        todo.push(data);
        setTodo([...todo]);
        setTitle('');
        setSubtitle('');
    }

    return (
        <>
            <div className="tasks">
                <h1>To-Do List</h1>
                <div className='input'>

                    <input type='text' value={title} onChange={e => setTitle(e.target.value.trim())} className='todo-input' name="title" placeholder='Task' required/>
                    <input type='text' value={subtitle} onChange={e => setSubtitle(e.target.value.trim())} className='todo-description' name="subtitle" placeholder='Description' required/>
                    <div id="btn" onClick={addTodo}><span class="noselect">ADD</span><div id="circle"></div></div>

                </div>

                {
                    todo.map((item, i) =>
                    (
                        <div>
                            <input id={'label-' + (i + 1)} type='checkbox' />
                            <label for={'label-' + (i + 1)}>
                                <h2>{item.title}
                                    <span>{item.subtitle}</span>
                                </h2>
                            </label>
                        </div>
                    )
                    )
                }
            </div>

        </>

    );
}

export default Todo;
