const express = require ('express')

const routes = express.Router()

routes
.get('/autor', AutorController.findAll)