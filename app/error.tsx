"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error("err", error);
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex min-h-[380px] items-center justify-center p-4">
      <Card className="w-full max-w-xl border-dashed border-red-200 bg-red-50/30 text-center shadow-none">
        <CardContent className="flex flex-col items-center p-8 space-y-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-14 w-14 rounded-full bg-red-100 animate-pulse" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-red-100 shadow-sm">
              <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Something went wrong</h3>
            <p className="text-sm text-muted-foreground">
              {error?.message ||
                "Check your internet connection and try again."}
            </p>
          </div>

          <Button onClick={handleRetry} disabled={isPending} className="mt-2">
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isPending ? "animate-spin" : ""}`}
            />
            {isPending ? "Retrying..." : "Try Again"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
