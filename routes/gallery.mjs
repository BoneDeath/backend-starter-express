import express from "express";
import Gallery from "../models/gallery.mjs";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let results = await Gallery.find({}).limit(10).exec();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const bodyData = req.body;
    const savedData = await new Gallery(bodyData).save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: "Gagal menyimpan data: " + error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dataId = req.params.id;
    const updateData = req.body;

    const updatedData = await Gallery.findByIdAndUpdate(dataId, updateData, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Gagal mengupdate data: " + error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const dataId = req.params.id;
    const deletedData = await Gallery.findByIdAndDelete(dataId);
    if (!deletedData) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.status(200).json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus data: " + error.message });
  }
});

export default router;
