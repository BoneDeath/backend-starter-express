import conn from '../server/conn.mjs';

const mediaSchema = new conn.Schema({
  src: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['image', 'video', 'document'], // Contoh enum untuk tipe media
    required: true,
  },
  id_gallery: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Gallery', // Asumsikan ada model Gallery
    required: true,
  },
});

const Media = conn.model('Media', mediaSchema);

export default Media;