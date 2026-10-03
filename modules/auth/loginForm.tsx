"use client";

import { useActionState, useEffect } from "react";
import InputElement from "../../components/inputFields/inputElement";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { loginAction } from "./action/loginAction";
import PasswordElement from "@/components/inputFields/passwordElement";
import { useAuthStore } from "@/stores/useAuthStore";

export default function LoginForm({
  onAuthSuccess,
}: {
  onAuthSuccess?: () => void;
}) {
  const [state, formAction, isPending] = useActionState(loginAction, {
    success: false,
    message: "",
  });
  const { login } = useAuthStore();

  useEffect(() => {
    if (state.success) {
      toast.success("Login Successfull!");
      login(state.data.token);
      onAuthSuccess?.();
    }
  }, [state]);

  console.log("state", state);
  return (
    <form className="space-y-4" action={formAction}>
      <InputElement
        label="Username"
        name="username"
        placeholder="test@yopmail.com"
        type="text"
        err={state?.error?.username}
      />
      <PasswordElement
        label="Password"
        name="password"
        placeholder="*******"
        err={state?.error?.password}
      />
      <Button
        className="w-full mt-2 cursor-pointer"
        type="submit"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin" size={16} /> Submitting...
          </>
        ) : (
          "Login & Continue"
        )}
      </Button>
      <div className="mt-3 p-2 bg-muted/50 rounded-md text-xs text-muted-foreground text-center">
        <p>
          <strong>Demo Username:</strong> johnd
        </p>
        <p>
          <strong>Demo Password:</strong> m38rmF$
        </p>
      </div>
    </form>
  );
}
