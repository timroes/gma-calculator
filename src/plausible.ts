interface PlausibleArgs {
  callback?: () => void;
  props?: Record<string, string>;
}

declare global {
  interface Window {
    plausible?: {
      q?: unknown[];
    };
  }
}

export function plausible(eventName: string, args: PlausibleArgs = {}): void {
  window.plausible = window.plausible || {};
  (window.plausible.q = window.plausible.q || []).push([eventName, args]);
}
