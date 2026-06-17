// design-sync shim for `next/navigation` — inert router/hooks so DS
// components that call useRouter/usePathname render standalone (no app-router
// context outside the Next runtime).
const noop = () => {};

export function useRouter() {
  return {
    push: noop,
    replace: noop,
    prefetch: noop,
    back: noop,
    forward: noop,
    refresh: noop,
  };
}

export function usePathname(): string {
  return "/";
}

export function useSearchParams(): URLSearchParams {
  return new URLSearchParams();
}

export function useParams(): Record<string, string> {
  return {};
}

export function useSelectedLayoutSegment(): string | null {
  return null;
}

export function useSelectedLayoutSegments(): string[] {
  return [];
}

export function redirect(): never {
  throw new Error("redirect() called in design-sync preview (no-op)");
}

export function notFound(): never {
  throw new Error("notFound() called in design-sync preview (no-op)");
}
