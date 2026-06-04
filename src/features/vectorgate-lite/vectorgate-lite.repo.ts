import { GameRuntime, GameRuntimeState } from "../../game/game-runtime";

export interface Preferences {
  difficulty: "easy" | "normal" | "hard";
  sfxVolume: number;
  musicVolume: number;
}

const PREFS_KEY = "vectorgate-lite-preferences";

export function loadPreferences(): Preferences {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        difficulty: parsed.difficulty ?? "normal",
        sfxVolume: typeof parsed.sfxVolume === "number" ? parsed.sfxVolume : 0.7,
        musicVolume: typeof parsed.musicVolume === "number" ? parsed.musicVolume : 0.5,
      };
    }
  } catch {
    // ignore
  }
  return { difficulty: "normal", sfxVolume: 0.7, musicVolume: 0.5 };
}

export function savePreferences(prefs: Preferences): void {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function getHighScore(): number {
  try {
    const raw = localStorage.getItem("vectorgate-lite-highscore");
    if (raw) return Number(raw) || 0;
  } catch {
    // ignore
  }
  return 0;
}

export function setHighScore(score: number): void {
  try {
    localStorage.setItem("vectorgate-lite-highscore", String(score));
  } catch {
    // ignore
  }
}

export function exportRuntimeState(runtime: GameRuntime): GameRuntimeState {
  return runtime.state;
}
