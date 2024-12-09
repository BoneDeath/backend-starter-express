import conn from '../server/conn.mjs';

const tChatSchema = new conn.Schema({
  text: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  user: {
    type: conn.Schema.Types.ObjectId,
    ref: 'User', // Asumsikan ada model User
  },
  chat: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Chat', // Referensi ke model Chat induk
  },
  gallery: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Gallery', // Asumsikan ada model Gallery
  },
});

const ChatMessage = conn.model('TChat', tChatSchema);

export default ChatMessage;