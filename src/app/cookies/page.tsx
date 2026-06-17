"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CookiesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/privacy#cookies");
  }, [router]);

  return (
    <main className="flex-grow bg-white flex items-center justify-center py-20 px-6">
      <p className="text-slate-500 text-sm font-semibold">
        Redirecting to{" "}
        <a href="/privacy#cookies" className="text-[#5563ED] underline">
          Privacy Policy — Cookies section
        </a>
        …
      </p>
    </main>
  );
}
