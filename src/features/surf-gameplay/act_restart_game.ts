import { getOrCreateRuntime } from "../vectorgate-lite/vectorgate-lite.store";

export function actRestartGame(): void {
  const runtime = getOrCreateRuntime();
  runtime.reset();
  runtime.start();
}
