import { getOrCreateRuntime, resetRuntime } from "../vectorgate-lite/vectorgate-lite.store";

export function actStartGame(): void {
  const runtime = getOrCreateRuntime();
  runtime.reset();
  runtime.start();
}
