export interface RuntimeEntity {
  lane: number;
  position: number;
}

export interface GameRuntimeState {
  player: RuntimeEntity;
  obstacles: RuntimeEntity[];
  shards: RuntimeEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  speed: number;
  tick: number;
}

export type GameRuntimeListener = (state: GameRuntimeState) => void;

const LANES = 3;
const START_LIVES = 3;
const START_ENERGY = 100;
const START_SPEED = 2;
const MAX_SPEED = 8;
const SPAWN_RATE_OBSTACLE = 0.03;
const SPAWN_RATE_SHARD = 0.02;

function randLane(): number {
  return Math.floor(Math.random() * LANES);
}

function createInitialState(): GameRuntimeState {
  return {
    player: { lane: 1, position: 0 },
    obstacles: [],
    shards: [],
    score: 0,
    energy: START_ENERGY,
    lives: START_LIVES,
    paused: false,
    gameOver: false,
    speed: START_SPEED,
    tick: 0,
  };
}

export class GameRuntime {
  state: GameRuntimeState = createInitialState();
  private listeners: Set<GameRuntimeListener> = new Set();
  private intervalId: ReturnType<typeof setInterval> | null = null;

  subscribe(listener: GameRuntimeListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  start() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000 / 30);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.stop();
    this.state = createInitialState();
    this.emit();
  }

  movePlayer(delta: number) {
    if (this.state.gameOver || this.state.paused) return;
    const next = this.state.player.lane + delta;
    if (next >= 0 && next < LANES) {
      this.state.player.lane = next;
      this.emit();
    }
  }

  setPaused(paused: boolean) {
    this.state.paused = paused;
    this.emit();
  }

  private tick() {
    const s = this.state;
    if (s.paused || s.gameOver) return;

    s.tick += 1;

    // Move entities downward (increase position)
    s.obstacles = s.obstacles
      .map((o) => ({ ...o, position: o.position + s.speed }))
      .filter((o) => o.position < 100);

    s.shards = s.shards
      .map((sh) => ({ ...sh, position: sh.position + s.speed }))
      .filter((sh) => sh.position < 100);

    // Spawn
    if (Math.random() < SPAWN_RATE_OBSTACLE) {
      s.obstacles.push({ lane: randLane(), position: -5 });
    }
    if (Math.random() < SPAWN_RATE_SHARD) {
      s.shards.push({ lane: randLane(), position: -5 });
    }

    // Collision detection
    const playerY = s.player.position;
    for (const o of s.obstacles) {
      if (o.lane === s.player.lane && Math.abs(o.position - playerY) < 6) {
        s.lives -= 1;
        s.energy = Math.max(0, s.energy - 20);
        // Remove collided obstacle
        s.obstacles = s.obstacles.filter((ob) => ob !== o);
        if (s.lives <= 0) {
          s.gameOver = true;
          this.emit();
          return;
        }
        break;
      }
    }

    for (const sh of s.shards) {
      if (sh.lane === s.player.lane && Math.abs(sh.position - playerY) < 6) {
        s.score += 10;
        s.energy = Math.min(START_ENERGY, s.energy + 10);
        s.shards = s.shards.filter((s2) => s2 !== sh);
        break;
      }
    }

    // Increment score over time
    s.score += 1;

    // Speed ramp
    if (s.tick % 300 === 0) {
      s.speed = Math.min(MAX_SPEED, s.speed + 0.5);
    }

    this.emit();
  }
}
