import conn from '../server/conn.mjs';

const tServisSchema = new conn.Schema({
  is_ganti_baru: {
    type: Boolean,
    default: false,
  },
  biaya: {
    type: Number,
    required: true,
  },
  keterangan: String,
  id_sparepart: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Sparepart', // Asumsikan ada model Sparepart
  },
  id_servis: {
    type: conn.Schema.Types.ObjectId,
    ref: 'Servis', // Asumsikan ada model Servis
  },
});

const TServis = conn.model('TServis', tServisSchema);

export default TServis;