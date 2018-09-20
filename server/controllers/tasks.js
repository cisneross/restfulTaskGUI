var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    create: (req,res)=>{
        Task.create({
            title: req.body.title,
            description: req.body.description
        }, function(err, task){
            if(err){
                res.json(err);
            }else{
                res.json(task);
            }
        })
    },
    index: (req,res)=>{
        Task.find({}, function(err, tasks){
            console.log('got tasks', tasks);
            res.json(tasks);
        })
    },
    show: (req,res)=>{
        Task.findOne({_id: req.params.id}, function(err, task){
            console.log('got task', err);
            if(err){
                res.json(err);
            }else{
                res.json(task);
            }
        })
    },
    update: (req,res)=>{
        Task.findOne({_id: req.params.id}, function(err, task){
            task.title = req.body.title;
            task.description = req.body.description;
            task.save(function(err){
                if(err){
                    res.json(err);
                }else{
                    res.json(task);
                }
            })
        })
    },
    delete: (req,res)=>{
        Task.remove({_id:req.params.id}, function(err){
            if(err){
                console.log("how do you mess up deleting something?");
                res.json(err);
            }else{
                res.json({message: "Task Deleted"});
            }
        })
    }
}