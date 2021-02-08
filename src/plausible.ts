interface PlausibleArgs {
  callback?: () => void;
  props?: Record<string, string>;
}

interface PlausibleFunction {
  (eventName: string, args: PlausibleArgs): void;
  q: unknown[];
}

declare global {
  interface Window {
    plausible: PlausibleFunction;
  }
}

window.plausible = window.plausible || ((eventName: string, args: PlausibleArgs = {}): void => {
  (window.plausible.q = window.plausible.q || []).push([eventName, args]);
});

export function plausible(eventName: string, args: PlausibleArgs = {}): void {
  window.plausible(eventName, args);
};
