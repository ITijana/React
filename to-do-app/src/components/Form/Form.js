import React, {useState, useEffect, useRef} from 'react';

const Form = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      });
    

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
        setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              placeholder='Update'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
            />
            <button onClick={handleSubmit}>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
            />
            <button onClick={handleSubmit}>
              Add todo
            </button>
          </>
        )}
      </form>
    );
}

export default Form;