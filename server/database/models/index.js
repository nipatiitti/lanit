import mongoose from 'mongoose'

import { tournamentItemSchema } from './tournamentItem'


const tournamentItemModel = mongoose.model('tournamentItem', tournamentItemSchema);

export { tournamentItemModel }
