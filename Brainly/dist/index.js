import express from "express";
import userRouter from "./routes/user.js";
import contentRouter from "./routes/content.js";
import shareRouter from "./routes/share.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/brain", shareRouter);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map