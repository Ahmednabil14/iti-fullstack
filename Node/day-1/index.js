
const http = require('http')
const { url } = require('inspector')
const { json } = require('stream/consumers')
let users = [{"id": 1, "name": "ahmed"}, {"id": 2, "name": "same"}, {"id": 3, "name": "ali"}]
let usersSort = [...users]

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    if (req.url === '/users' && req.method === 'GET') {
        res.end(JSON.stringify(users))
    } else if (req.url === '/users/sort' && req.method === 'GET') {
        usersSort.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            if (a.name < b.name) {
                return -1
                }
        })
        res.end(JSON.stringify(usersSort))
    } else if (req.url === '/users' && req.method === 'POST') {
        req.on('data', (chunk) => {
            let user = JSON.parse(chunk)
            users.push(user)
            res.end(JSON.stringify(users))
        })
    } else if (req.url === '/users' && req.method === 'DELETE') {
        req.on('data', (chunk) => {
            let {id} = JSON.parse(chunk)
            users = users.filter((ele) => {
                return ele.id !== id
            })
            res.end(JSON.stringify(users))
        })
    } else if (req.url === '/users' && req.method === 'PUT') {
        req.on('data', (chunk) => {
            for (const element of users) {
                if (element.id === JSON.parse(chunk).id) {

                    for (const index in JSON.parse(chunk)) {
                        element[index] = JSON.parse(chunk)[index]
                    }
                }
            }
            res.end(JSON.stringify(users))
        })
    }
    else{
        res.end('Hello World\n')
    }
})

server.listen(3001, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log('Server running at http://localhost:3001/')
})