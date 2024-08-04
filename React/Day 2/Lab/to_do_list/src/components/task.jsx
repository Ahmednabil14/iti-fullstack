import Input from "./input"
import { useRef } from "react"
export default function Task({task, list, setList}) {
    const deleteRef = useRef()

    const deleteRow = () => {
        setList(list.filter(item => item !== task))
    }

    return (
        <div className="task">
            <div className="bg-secondary mb-3 d-flex align-items-center justify-content-evenly" style={{height: '70px'}}>
                <p>{task}</p>
                <button className="btn btn-dark h-50" ref={deleteRef} onClick={deleteRow}>Delete</button>
            </div>
        </div>
    )
}