import express from "express"

const app = express()
let users = [{'id': 1, 'name': 'ahmed', 'age': 25},
    {'id': 2, 'name': 'ali', 'age': 40}
]

app.use(express.json())

app.get('/users', (req, res) => {
    res.json({message: 'success', users: users})
})

app.post('/users', (req, res) => {
    let user
    const userId = users[users.length -1].id + 1 
    user = {"id": userId, ...req.body}
    users.push(user)
    res.json({message: 'user added successfully', users: users})
})

app.get('')

app.listen(3001, (error) => {
    if (error) {
        console.error(error)
        } else
        console.log("Server is running on port 3001")
})