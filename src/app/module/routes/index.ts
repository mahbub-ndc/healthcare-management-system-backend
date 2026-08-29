import { Router } from "express";
import { SpecialtyRoute } from "../specialty/specialty.route";
import { AuthRoute } from "../auth/auth.route";

const router = Router();
router.use("/auth", AuthRoute);
router.use("/specialties", SpecialtyRoute);

export const IndexRoute = router;
