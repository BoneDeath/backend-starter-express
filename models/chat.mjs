import conn from '../server/conn.mjs';

const chatSchema = new conn.Schema({
  subject: {
    type: String,
    required: true,
  },
  id_sn: {
    type: conn.Schema.Types.ObjectId,
    ref: 'User', // Asumsikan 'id_sn' merujuk ke User
  },  
  timestamp: { type: Date, default: Date.now },
});

const Chat = conn.model('Chat', chatSchema);

export default Chat;