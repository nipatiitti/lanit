import express from 'express'

import handleGet from './get'
import handlePost from './post'

const router = express.Router({mergeParams: true})

router
  .get('/:id', (req, res) => handleGet(req, res))
  .post('/:id', (req, res) => handlePost(req, res))

export default router
