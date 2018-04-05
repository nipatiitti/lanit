import { tournamentItemModel } from '../database/models'

function handlePost(req, res) {

  // Create instance of the data
  const data = new tournamentItemModel(Object.assign(req.body, {
    createdAt: Date.now(),
    matches: [],
    players: []
  }))

  // Save data
  data.save(err => {
    if(err) {
      res.status(500).send({ msg: 'Error saving data!: ' + err})
      return
    }
    res.json(req.body)
  })
}

export default handlePost
