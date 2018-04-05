import { tournamentItemModel } from './models'

export function getAll() {
  return tournamentItemModel.find({}).sort('-time').limit(100).exec()
}

export function getById(id) {
  return tournamentItemModel.find({ _id: id }).sort('-time').limit(1).exec()
}
