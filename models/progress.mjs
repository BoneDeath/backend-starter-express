import conn from '../server/conn.mjs';

const progressSchema = new conn.Schema({
  text: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: conn.Schema.Types.ObjectId,
    ref: 'User', // Asumsikan ada model User
  },
  servis: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Servis', // Asumsikan ada model Servis
  },
  status: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Status', // Asumsikan ada model Status
  },
  gallery: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Gallery', // Asumsikan ada model Gallery
  },
});

const Progress = conn.model('Progress', progressSchema);

export default Progress;