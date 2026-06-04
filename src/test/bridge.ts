import { GameRuntime, GameRuntimeState } from "../game/game-runtime";

export interface TestBridge {
  runtime: GameRuntime;
  getState: () => GameRuntimeState;
  tick: (count?: number) => void;
  moveLeft: () => void;
  moveRight: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

export function createTestBridge(): TestBridge {
  const runtime = new GameRuntime();
  return {
    runtime,
    getState: () => runtime.state,
    tick: (count = 1) => {
      for (let i = 0; i < count; i++) {
        // @ts-expect-error private access for test bridge
        runtime.tick();
      }
    },
    moveLeft: () => runtime.movePlayer(-1),
    moveRight: () => runtime.movePlayer(1),
    pause: () => runtime.setPaused(true),
    resume: () => runtime.setPaused(false),
    reset: () => runtime.reset(),
  };
}
