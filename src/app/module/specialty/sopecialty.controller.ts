/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";

const createSpeacialty = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const specialty = await SpecialtyService.createSpecialty(payload);
  res.status(200).json({
    message: "Specialty created successfully",
    success: true,
    data: specialty,
  });
});

const getSpecialty = async (req: Request, res: Response) => {
  try {
    const specialty = await SpecialtyService.getSpecialty();
    res.status(200).json({
      message: "Specialty fetched successfully",
      success: true,
      data: specialty,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const specialty = await SpecialtyService.deleteSpecialty(id);
    res.status(200).json({
      message: "Specialty deleted successfully",
      success: true,
      data: specialty,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const payload = req.body;
    const specialty = await SpecialtyService.updateSpecialty(id, payload);
    res.status(200).json({
      message: "Specialty updated successfully",
      success: true,
      data: specialty,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const SpecialtyController = {
  createSpeacialty,
  getSpecialty,
  deleteSpecialty,
  updateSpecialty,
};
