import conn from "../server/conn.mjs";

const serialNumberSchema = new conn.Schema({
  sn: {
    type: String,
    required:true,
    unique:true
  },
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  wa: {
    type: String,
  },
  alamat: {
    type: String,
  },
});

const SerialNumber = conn.model("SerialNumber", serialNumberSchema);
export default SerialNumber;