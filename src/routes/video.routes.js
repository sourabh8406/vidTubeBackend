import { Router } from "express";
import {
  deleteVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  publishVideo,
  togglePublicStatus,
} from "../controllers/video.controller.js";

import { verifyJWT } from "../middlewares/verifyJWT.js";
import { upload } from "../middlewares/multer.js";

const router = Router();
router.use(verifyJWT);

router
  .route("/")
  .get(getAllVideos)
  .post(
    upload.fields([
      { name: "video", maxCount: 1 },
      { name: "thumbnail", maxCount: 1 },
    ]),
    publishVideo,
  );

router
  .route("/:videoId")
  .get(getVideoById)
  .patch(upload.single("thumbnail"), updateVideo)
  .delete(deleteVideo);

router.route("/:videoId/toggle-public").patch(togglePublicStatus);

export default router;
