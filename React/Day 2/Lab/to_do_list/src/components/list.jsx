import Task from "./task"

export default function Tasks({list, setList}) {
    return (
        <div className="container mt-5">
            {list.map((task, index) => (
                <Task key={index} task={task} list={list} setList={setList} />
            ))}
        </div>
    )
}