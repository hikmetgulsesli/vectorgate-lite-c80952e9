import { useSyncExternalStore } from "react";
import { GameRuntime, GameRuntimeState } from "../../game/game-runtime";

let globalRuntime: GameRuntime | null = null;

export function getOrCreateRuntime(): GameRuntime {
  if (!globalRuntime) {
    globalRuntime = new GameRuntime();
  }
  return globalRuntime;
}

export function resetRuntime(): GameRuntime {
  if (globalRuntime) {
    globalRuntime.stop();
  }
  globalRuntime = new GameRuntime();
  return globalRuntime;
}

export function useGameRuntime(): GameRuntimeState {
  const runtime = getOrCreateRuntime();
  return useSyncExternalStore(
    (callback) => runtime.subscribe(callback),
    () => runtime.state,
    () => runtime.state
  );
}

export type GameScreen = "gameplay" | "settings" | "menu";

interface AppUIState {
  screen: GameScreen;
}

let uiState: AppUIState = { screen: "gameplay" };
const uiListeners = new Set<() => void>();

function emitUI() {
  for (const cb of uiListeners) cb();
}

export function setScreen(screen: GameScreen) {
  uiState = { screen };
  emitUI();
}

export function getScreen(): GameScreen {
  return uiState.screen;
}

export function useAppScreen(): GameScreen {
  return useSyncExternalStore(
    (cb) => {
      uiListeners.add(cb);
      return () => uiListeners.delete(cb);
    },
    () => uiState.screen,
    () => uiState.screen
  );
}
