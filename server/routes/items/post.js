import { tournamentItemModel } from '../../database/models'

function handlePost(req, res) {
  const { team1, team2, time, deleteOperation, _id } = req.body

  if (deleteOperation) {
    handleDelete(req, res)
    return
  }

  tournamentItemModel.findById(req.params.id, (err, game) => {

    if(err) {
      res.status(500).send({ msg: 'Error saving data!: ' + err})
      return
    }

    game.matches = game.matches.concat([{team1, team2, time, _id, winner: 'ongoing'}])
    game.save((err, newGame) => {

      if(err) {
        res.status(500).send({ msg: 'Error saving data!: ' + err})
        return
      }

      res.json(newGame)
    })
  })

}

function handleDelete(req, res) {
  const { item, itemId } = req.body

  tournamentItemModel.findById(req.params.id, (err, game) => {
    if(err) {
      res.status(500).send({ msg: 'Error saving data!: ' + err})
      return
    }

    if (item) {
      let matches = game.matches

      let toDelete = matches.findIndex(match => {
        return match._id == itemId
      })

      matches.splice(toDelete, 1)

      game.matches = matches
      game.save((err, newGame) => {

        if(err) {
          res.status(500).send({ msg: 'Error saving data!: ' + err})
          return
        }

        res.json(newGame)
      })
      return
    } else {
      game.remove()
      res.status(200).send({msg: 'Succes'})
      return
    }

    return

  })

}

export default handlePost
