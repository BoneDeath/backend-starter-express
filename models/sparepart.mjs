import conn from "../server/conn.mjs";

const sparepartSchema = new conn.Schema({
  nama: {
    type: String,
    required: true,
  },
  info: String,
});

const Sparepart = conn.model("Sparepart", sparepartSchema);

export default Sparepart;
