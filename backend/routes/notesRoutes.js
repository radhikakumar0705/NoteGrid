import express from "express"
import { getAllNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", (req, res) => {
    res.status(201).json({message: "Note created succesfully"});
});

router.put("/:id", (req, res) => {
    res.status(200).json({message: "Note updated succesfully!"});
})

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "Note deleted successfully"});
})

export default router;


