import { tournamentItemModel } from '../../database/models'

function handlePost(req, res) {
  const { team1, team2, time } = req.body

  tournamentItemModel.findById(req.params.id, (err, game) => {

    if(err) {
      res.status(500).send({ msg: 'Error saving data!: ' + err})
      return
    }

    game.matches = game.matches.concat([{team1, team2, time}])
    game.save((err, newGame) => {

      if(err) {
        res.status(500).send({ msg: 'Error saving data!: ' + err})
        return
      }

      res.json(newGame)
    })
  })

}

export default handlePost
