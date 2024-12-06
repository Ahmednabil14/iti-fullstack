import { connect } from "mongoose"

const dbConnect = connect('mongodb://127.0.0.1:27017/blog')
.then(()=> {
    console.log('connected to database')
})
.catch((err)=> {
    console.log(err)
    })


export default dbConnect