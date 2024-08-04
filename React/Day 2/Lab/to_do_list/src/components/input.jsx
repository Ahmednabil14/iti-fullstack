import React, { useState, useRef } from "react"

export default function Input({list, setList}) {
    const inputRef = useRef()

    const addTask = () => {
        if (inputRef.current.value !== '') {
            setList([...list, inputRef.current.value])
            inputRef.current.value = ''
        }
    }

    return (
        <div class="input-group input-group-lg">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" ref={inputRef}/>
            <span class="input-group-text" id="inputGroup-sizing-lg">
                <button className="btn btn-secondary" onClick={addTask}>ADD</button>
            </span>
        </div>
    )
}