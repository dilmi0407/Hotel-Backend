import express from "express";
import {register} from "../Controllers/UserControllers.js";
import {getAllUser, getUser, updateUser, deleteUser, filterUserByName, loginUser} from "../Controllers/UserControllers.js";

const router = express.Router();

router . post ("/reg", register);
router . get ("/get", getAllUser);
router . get ("/get:id", getUser);
router . put ("/update:id", updateUser);
router . delete ("/delete:id", deleteUser);
router . get ("/filter", filterUserByName);
router . post ("/login", loginUser);



export default router;