import conn from '../server/conn.mjs';

const pembayaranSchema = new conn.Schema({
  jumlah: {
    type: Number,
    required: true,
  },
  bayar: {
    type: Number,
    default: 0,
  },
  keterangan: String,
  tanggal: {
    type: Date,
    default: Date.now,
  },
  servis: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Servis', // Asumsikan ada model Servis
  },
  gallery: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Gallery', // Asumsikan ada model Gallery
  },
});

const Pembayaran = conn.model('Pembayaran', pembayaranSchema);

export default Pembayaran;