import { auth } from "../../../lib/auth";

interface Patient {
  name: string;
  email: string;
  password: string;
}

const registerPatient = async (payload: Patient) => {
  const { name, email, password } = payload;

  const result = await auth.api.signUpEmail({
    returnHeaders: true,
    body: {
      name,
      email,
      password,
    },
  });

  if (!result.response.user) throw new Error("Something went wrong");

  return result;
};

const loginPatient = async (email: string, password: string) => {
  const result = await auth.api.signInEmail({
    returnHeaders: true,
    body: {
      email,
      password,
    },
  });

  if (!result.response.user) throw new Error("Something went wrong");

  return result;
};

export const AuthService = {
  registerPatient,
  loginPatient,
};
