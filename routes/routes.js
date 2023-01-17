import express from 'express'   
import * as controller from  '../controllers/controller.js'

const route = express.Router()

route.get('/', controller.home)

route.post('/add-word/:id', controller.add_word)

route.post('/add-term/:id', controller.add_term)

route.post('/add-topic/:id', controller.add_topic)

route.get('/get-topic/:id', controller.get_topic)

route.get('/get-topics', controller.get_topics)

route.post('/add-category', controller.add_category)

route.get('/get-category/:id', controller.get_category)

route.get('/get-categories', controller.get_categories)






export default route