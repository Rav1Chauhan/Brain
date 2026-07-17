import { Router } from "express";
import { userAuth } from "../middleware/userAuth.js";
import { ContentModel } from "../db.js";
import type { Request } from "express";
const contentRouter = Router();

contentRouter.post("/", userAuth, async (req, res) => {
  const { title, link, type } = req.body;
  await ContentModel.create({
    title,
    link,
    type,
    userId: (req as any).user.userId,
    tags: [],
  });
  res.json({
    message: "Content added",
  });
});

contentRouter.get("/", userAuth, async (req, res) => {
  const userId = (req as any).user.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");
  res.json({
    content,
  });
});

contentRouter.delete("/", userAuth, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteOne({
    _id: contentId,
    userId: (req as any).user.userId,
  });
  return res.json({
    message: "Content deleted",
  });
});

contentRouter.get(
  "/:type",
  userAuth,
  async (req: Request<{ type: "twitter" | "youtube" }>, res) => {
    const { type } = req.params;

    const content = await ContentModel.find({
      userId: (req as any).user.userId,
      type,
    });

    res.json({ content });
  },
);
export default contentRouter;
