import { GameRuntimeState } from "../game/game-runtime";

export function makeFixtureState(overrides?: Partial<GameRuntimeState>): GameRuntimeState {
  return {
    player: { lane: 1, position: 0 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    gameOver: false,
    speed: 2,
    tick: 0,
    ...overrides,
  };
}

export function makeFixtureStateWithObstacles(): GameRuntimeState {
  return makeFixtureState({
    obstacles: [
      { lane: 0, position: 20 },
      { lane: 2, position: 40 },
    ],
    shards: [
      { lane: 1, position: 30 },
    ],
    score: 150,
    energy: 80,
    lives: 2,
    tick: 60,
  });
}
