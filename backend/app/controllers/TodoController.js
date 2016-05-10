import mongoose from 'mongoose'
import TodoSchema from '../schemas/todoSchema.js'

const ToDo = mongoose.model('todos', TodoSchema);

export default (app) => {
  app.get('/api/todo', (req, res) => {
    ToDo.find((error, todos) => {
      if (error) {
        res.status(500).send({success: false, error: error})
      } else {
        res.send({success: true, todos: todos})
      }
    })
  })
  app.post('/api/todo', (req, res) => {
    const newTodo = new ToDo(req.body)
    newTodo.save((error, todo) => {
      if (error) {
        res.status(500).send({success: false, error: error})
      } else {
        res.send({success: true, todo: todo})
      }
    })
  })
  app.put('/api/todo/:id', (req, res) => {
    ToDo.update({ '_id': req.params.id }, req.body, (error) => {
      if (error) {
        res.status(500).send({success: false, error: error})
      } else {
        res.send({success: true})
      }
    });
  })
  app.delete('/api/todo/:id', (req, res) => {
    ToDo.remove({"_id": req.params.id}, (error) => {
      if (error) {
        res.status(500).send({success: false, error: error})
      } else {
        res.send({success: true})
      }
    })
  })
}
