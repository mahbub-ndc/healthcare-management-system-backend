import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });

  return specialty;
};

const getSpecialty = async () => {
  const specialty = await prisma.specialty.findMany({});
  return specialty;
};

const deleteSpecialty = async (id: string) => {
  const specialty = await prisma.specialty.delete({
    where: {
      id,
    },
  });
  return specialty;
};

const updateSpecialty = async (id: string, payload: Specialty) => {
  const specialty = await prisma.specialty.update({
    where: {
      id,
    },
    data: payload,
  });
  return specialty;
};

export const SpecialtyService = {
  createSpecialty,
  getSpecialty,
  deleteSpecialty,
  updateSpecialty,
};
