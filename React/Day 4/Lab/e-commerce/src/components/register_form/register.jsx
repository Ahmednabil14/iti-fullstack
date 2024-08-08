import { useState } from "react"

export default function Register () {

    const [info, setInfo] = useState({
        name: "",
        email: "",
        userName:"",
        password: "",
        confirmPassword: ""
    })

    const emailPattern = /[a-zA-Z].\w*@\w+.\w+/

    const [submitted, setSubmitted] = useState(false)

    function handelSubmit(e) {
        e.preventDefault();
        setSubmitted(true)
    }

    function handelName(e) {
        setInfo({
            ...info,
            name: e.target.value
        })
    }

    function handelEmail(e) {
        setInfo({
            ...info,
            email: e.target.value
        })
    }

    function handelUserName(e) {
        setInfo({
            ...info,
            userName: e.target.value
        })
    }

    function handelPassword1(e) {
        setInfo({
            ...info,
            password: e.target.value
        })
    }

    function handelPassword2(e) {
        setInfo({
            ...info,
            confirmPassword: e.target.value
        })
    }



    return (
        <form onSubmit={handelSubmit}>
            <div class="mb-3">
                <label for="Name" class="form-label">Name</label>
                <input type="text" class="form-control" id="Name" value={info.name} onChange={handelName}/>
                {!(info.name) && submitted && <p className="text-danger">this field is required</p>}
            </div>
            <div class="mb-3">
                <label for="Email1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="Email1" value={info.email} onChange={handelEmail}/>
                {!(info.email) && submitted ? <p className="text-danger">this field is required</p> :
                !emailPattern.test(info.email) && <p className="text-danger">please enter a valid email</p> }
            </div>
            <div class="mb-3">
                <label for="User_Name" class="form-label">User Name</label>
                <input type="text" class="form-control" id="User_Name" value={info.userName} onChange={handelUserName}/>
                {!(info.userName) && submitted ? <p className="text-danger">this field is required</p> :
                info.userName.includes(" ") && <p className="text-danger">User Name must not contain spaces</p>}
            </div>
            <div class="mb-3">
                <label for="Password1" class="form-label">Password</label>
                <input type="password" class="form-control" id="Password1" value={info.password} onChange={handelPassword1}/>
                {!(info.password) && submitted && <p className="text-danger">this field is required</p>}
            </div>
            <div class="mb-3">
                <label for="Password2" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="Password2" value={info.confirmPassword} onChange={handelPassword2}/>
                {!(info.confirmPassword) && submitted ? <p className="text-danger">this field is required</p> :
                submitted && info.confirmPassword !== info.password && <p className="text-danger">password does not match</p> }
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    )
}