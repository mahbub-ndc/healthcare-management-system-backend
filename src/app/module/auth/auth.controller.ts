import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.registerPatient(payload);

  const cookies = result.headers.getSetCookie();

  for (const cookie of cookies) {
    res.append("Set-Cookie", cookie);
  }

  res.status(200).json({
    message: "Patient registered successfully",
    success: true,
    data: result,
  });
});

const loginPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginPatient(
    payload.email,
    payload.password,
  );

  const cookies = result.headers.getSetCookie();

  for (const cookie of cookies) {
    res.append("Set-Cookie", cookie);
  }

  res.status(200).json({
    message: "Patient logged in successfully",
    success: true,
    data: result.response,
  });
});

export const AuthController = {
  registerPatient,
  loginPatient,
};
