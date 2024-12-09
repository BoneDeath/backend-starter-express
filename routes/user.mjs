import express from "express";
import User from "../models/User.mjs";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let results = await User.find({}).limit(10).exec();
    res.status(200).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const bodyData = req.body;

    if (req.body.password) {
      bodyData.password = await bcrypt.hash(req.body.password, 10);
    }

    const savedData = await new User(bodyData).save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: "Gagal menyimpan data: " + error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const dataId = req.params.id;
    const updateData = req.body;

    if (req.body.password) {
      updateData.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedData = await User.findByIdAndUpdate(dataId, updateData, {
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
    const dataID = req.params.id;
    const deletedData = await User.findByIdAndDelete(dataID);
    if (!deletedData) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.status(200).json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Gagal menghapus data: " + error.message });
  }
});

export default router;
