import conn from '../server/conn.mjs';

const gallerySchema = new conn.Schema({
  deskripsi: String,
  tanggalPembuatan: {
    type: Date,
    default: Date.now,
  },
});

const Gallery = conn.model('Gallery', gallerySchema);
export default Gallery;