import Word from "../models/word.js"
import Category from "../models/category.js"
import Term from "../models/term.js"
import Topic from "../models/topic.js"

export const home = async (req, res) => {
  try {
    const words = await Words.find().sort({ word: -1 })
    res.json(words)
  } catch (error) {
    res.json(error)
  }
}

export const add_word = async (req, res) => {
  try {
    const word = await Word.insertMany(req.body)
    const topic = await Topic.findById(req.params.id)
    topic.words.push(word)
    topic.save()
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}

export const get_word = async (req, res) => {
  try {
    const word = await Word.findById(req.params.id)
    res.json(word)
  } catch (error) {
    res.json(error)
  }
}
export const get_words = async (req, res) => {
  try {
    const words = await Word.find()
    res.json(words)
  } catch (error) {
    res.json(error)
  }
}

export const add_term = async (req, res) => {
  try {
    const term = await Term.insertMany(req.body)
    const topic = await Topic.findById(req.params.id)
    topic.terms.push(term)
    topic.save()
    res.json(topic)
  } catch (error) {
    res.json(error)
  }
}

export const get_term = async (req, res) => {
  try {
    const term = await Term.findbyId()
    res.json(term)
  } catch (error) {
    res.json(error)
  }
}
export const get_terms = async (req, res) => {
  try {
    const terms = await Term.find()
    res.json(terms)
  } catch (error) {
    res.json(error)
  }
}

export const add_category = async (req, res) => {
  try {
    const category = await Category.insertMany(req.body)
    res.json(category)
  } catch (error) {
    res.json(error)
  }
}

export const get_category = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)
    res.json(category)
  } catch (error) {
    res.json(error)
  }
}
export const get_categories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.json(categories)
  } catch (error) {
    res.json(error)
  }
}

export const add_topic = async (req, res) => {
  try {
    const topic = await Topic.insertMany(req.body)
    const category = await Category.findById(req.params.id)
    category.topics.push(topic)
    category.save()
    res.json({ topics, category })
  } catch (error) {
    res.json(error)
  }
}

export const get_topic = async (req, res) => {
  try {
    const topics = await Topic.findById(req.params.id)
    res.json(topics)
  } catch (error) {
    res.json(error)
  }
}
export const get_topics = async (req, res) => {
  try {
    const topics = await Topic.find()
    res.json(topics)
  } catch (error) {
    res.json(error)
  }
}
