const router = require("express").Router();
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact,
} = require("./contactController");

router.get("/contacts", getAllContact);
router.get("/contacts/:id", getSingleContact);
router.post("/contacts", createContact);
router.put("/contacts/:id", updateContact);
router.delete("/contacts/:id", deleteContact);

module.exports = router;
