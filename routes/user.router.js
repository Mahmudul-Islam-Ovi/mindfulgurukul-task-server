const {
  getAllUsers,
  postUsers,
  deleteUsers,
  updateUsers,
  getSingleUsers,
  loginUsers,
  searchUsers,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUsers);
router.get("/search/:phone", searchUsers);
router.post("/", postUsers);
router.delete("/:id", deleteUsers);
router.put("/:id", updateUsers);
router.post("/login", loginUsers);

module.exports = router;
