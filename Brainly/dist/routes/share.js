import { Router } from "express";
import { userAuth } from "../middleware/userAuth.js";
import { ContentModel, LinkModel, UserModel } from "../db.js";
import crypto, { hash } from "crypto";
const shareRouter = Router();
shareRouter.post("/share", userAuth, async (req, res) => {
    const { share } = req.body;
    if (share === true) {
        const existingLink = await LinkModel.findOne({
            userId: req.user.userId,
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash,
            });
            return;
        }
        const hash = crypto.randomBytes(16).toString("hex");
        await LinkModel.create({
            userId: req.user.userId,
            hash,
        });
    }
    if (share === false) {
        await LinkModel.deleteOne({
            userId: req.user.userId,
        });
    }
    res.json({
        message: "Share link updated",
        hash: hash,
    });
});
shareRouter.get("/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await LinkModel.findOne({
        hash,
    });
    if (!link) {
        res.status(411).json({
            message: "sorry incorrect input",
        });
        return;
    }
    const content = await ContentModel.find({
        userId: link.userId,
    });
    const user = await UserModel.findById(link.userId);
    res.json({
        username: user?.username,
        content: content,
    });
});
export default shareRouter;
//# sourceMappingURL=share.js.map