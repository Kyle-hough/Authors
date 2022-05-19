const { Author } = require("./../models/author.model")

//get all 
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

//create a new author
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

//get one author
module.exports.oneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

//update one author
module.exports.updateAuthor = (req, res) =>{
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedAuthor=>res.json(updatedAuthor))
        .catch(err=>res.status(400).json(err))
    }

//delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}