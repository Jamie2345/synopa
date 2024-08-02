import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  noteTitle: {
    type: String,
    required: true
  },
  videoURL: {
    type: String,
    required: true
  },
  videoTitle: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.models.Note || mongoose.model('Note', noteSchema);
export default Note;	