import { noteModel } from "../../../db/models/note.model.js"


const addNote = async(req, res) => {
    const addedNote = await noteModel.insertMany({...req.body, createdBy: req.user._id})
    res.json({message: 'note added successfully', "note": addedNote})
}


const getNotes = async(req, res) => {
    console.log(req.user._id)
    const notes = await noteModel.find({createdBy: req.user._id}).select('-_id').populate("createdBy")// select is for choosing fields that return // to get user object
    res.json({notes})
}

export {addNote, getNotes}