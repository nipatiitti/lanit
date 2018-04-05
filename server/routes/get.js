import { getAll } from '../database/querys'

async function handleGet(req, res) {
  try {
    let data = await getAll()
    res.json(data)
  } catch(msg) {
    console.log(msg)
    res.status(500).send(msg)
  }
}

export default handleGet
