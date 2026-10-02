import { LoginSchema } from "../definitions/auth.definations";

interface LoginState {
  // data: IAuth | null;
  success: boolean;
  message: string;
}
export async function loginAction(prevState: LoginState, formData: FormData) {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const safeData = LoginSchema.safeParse(rawData);
  if (!safeData.success) {
    const fieldErrors = safeData?.error?.issues?.reduce<Record<string, string>>(
      (acc, curr) => {
        const key = curr.path[0] as string;

        if (key) {
          acc[key] = curr.message;
        }
        return acc;
      },
      {},
    );
    return {
      success: false,
      error: fieldErrors,
      message: "Validation Error!",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
      },
    );

    const data = await response.json();

    // Axios le 400/500 errors automatic catch ma falchha, tara fetch ma res.ok false hunchha
    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Invalid Credentials or request failed!",
      };
    }

    return {
      data: data, // FakeStore le { token: "..." } dinchha
      success: true,
      message: "Login Successful!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Network error or server unreachable!",
    };
  }
}
