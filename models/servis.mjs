import conn from "../server/conn.mjs";

const servisSchema = new conn.Schema({
  keterangan: {
    type: String,
    default: "",
  },
  total: {
    type: Number,
    default: 0,
  },
  tanggal: {
    type: Date,
    default: Date.now,
  },
  id_sn: {
    type: conn.Schema.Types.ObjectId,
    required: true,
    ref: "SerialNumber", // Asumsikan ada model SerialNumber
  },
  id_gallery: {
    type: conn.Schema.Types.ObjectId,
    ref: "Gallery", // Asumsikan ada model Gallery
  },
});

const Servis = conn.model("Servis", servisSchema);

export default Servis;
