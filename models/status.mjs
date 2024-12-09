import conn from '../server/conn.mjs';

const statusSchema = new conn.Schema({
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'], // Contoh enum untuk status
    default: 'pending',
  },
  keterangan: String,
});

const Status = conn.model('Status', statusSchema);

export default Status;