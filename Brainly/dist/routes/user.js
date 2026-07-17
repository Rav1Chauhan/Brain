import { Router } from "express";
const userRouter = Router();
import { UserModel } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config.js";
// import { userAuth } from "../middleware/user.js";
userRouter.post("/signup", async function (req, res) {
    const { username, password } = req.body;
    async function hashPassword(password) {
        const saltRound = 10;
        const hash = await bcrypt.hash(password, saltRound);
        return hash;
    }
    const hashed = await hashPassword(password);
    try {
        await UserModel.create({
            username: username,
            password: hashed,
        });
        return res.status(201).json({
            message: "User created successfully",
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message,
        });
    }
});
userRouter.post("/signin", async function (req, res) {
    const { username, password } = req.body;
    console.log("Username received:", username);
    const user = await UserModel.findOne({ username: username });
    if (!user) {
        return res.status(400).json({
            message: "User not found",
        });
    }
    else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ userId: user._id }, config.jwt_secret_user, {
                expiresIn: "1h",
            });
            return res.status(200).json({
                message: "signin succesfull",
                token: token,
            });
        }
        else {
            return res.status(400).json({
                message: "Invalid Password",
            });
        }
    }
});
export default userRouter;
//# sourceMappingURL=user.js.map