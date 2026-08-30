import { Router } from "express";
import { SpecialtyController } from "./sopecialty.controller";

const router = Router();
router.post("/create-specialty", SpecialtyController.createSpeacialty);
router.get("/get-all-specialties", SpecialtyController.getSpecialty);
router.delete("/delete-specialty/:id", SpecialtyController.deleteSpecialty);
router.put("/update-specialty/:id", SpecialtyController.updateSpecialty);

export const SpecialtyRoute = router;
