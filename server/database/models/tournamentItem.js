import mongoose from 'mongoose';

// Add Schema
export const tournamentItemSchema = mongoose.Schema({
  game:  String,
  time: String,
  info:   String,
  matches: [{ team1: String, team2: String, time: String, winner: String, _id: String }],
  players: [{ name: String }],
  createdAt: Number
});
