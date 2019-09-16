const Task = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_task: function(req, res) {
        console.log(req.body);
        Task.create(req.body)
            .then(data => 
                res.json(data)
            )
            .catch(err => {
                res.json(err);
            })
    },

    remove_task : function(req, res) {
        Task.remove({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    get_task: function(req, res) {
        Task.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_task : function(req, res) {
        console.log(req.body);
        console.log(req.body["title"]);
        console.log(req.body.title);
        console.log(req.body.description);
        Task.findOneAndUpdate({"_id": req.params.id}, {$set: {
            title: req.body.title,
            description: req.body.description,
        }},{runValidators: true})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });  
    }
}