import { getOrCreateRuntime } from "../vectorgate-lite/vectorgate-lite.store";

export function actPauseGame(): void {
  const runtime = getOrCreateRuntime();
  runtime.setPaused(!runtime.state.paused);
}
