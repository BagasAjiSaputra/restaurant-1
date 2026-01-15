"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/services/session";
import { UseSessionRedirectProps } from "@/types/session";
import { useQuery } from "@tanstack/react-query";

// SESSION CHECK
export const useSessionRedirect = ({
  redirectTo,
}: UseSessionRedirectProps) => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { session } = await getSession();
        if (session) {
          router.replace(redirectTo);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setChecking(false);
      }
    };

    checkSession();
  }, [router, redirectTo]);

  return { checking };
};

import { getSessionService } from "@/services/session";

export const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: getSessionService,
    retry: false, // auth gak perlu retry
    staleTime: 1000 * 60, // 1 menit
  });
};