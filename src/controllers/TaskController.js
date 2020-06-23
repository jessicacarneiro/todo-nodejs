const moongose = require('mongoose');

const Task = moongose.model('Task');

module.exports = {
    async index(req, res) {
        const tasks = await Task.find();
        return res.json(tasks)
    },

    async show(req, res) {
        const task = await Task.findById(req.params.id);
        return res.json(task);
    },

    async store(req, res) {
        const task = await Task.create(req.body);
        return res.json(task);
    },

    async update(req, res) {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, 
            {new: true});
        return res.json(task);
    },

    async destroy(req, res) {
        await Task.findByIdAndDelete(req.params.id);
        return res.send();
    }
};