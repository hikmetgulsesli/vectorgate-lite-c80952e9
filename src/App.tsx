import { useEffect, useMemo } from "react";
import {
  GameSettingsVectorgateLite,
  GameplayVectorgateLite,
} from "./screens";
import {
  getOrCreateRuntime,
  resetRuntime,
  useAppScreen,
  useGameRuntime,
  setScreen,
} from "./features/vectorgate-lite/vectorgate-lite.store";
import {
  loadPreferences,
  savePreferences,
  setHighScore,
} from "./features/vectorgate-lite/vectorgate-lite.repo";
import { actStartGame } from "./features/surf-gameplay/act_start_game";
import { actPauseGame } from "./features/surf-gameplay/act_pause_game";
import { actRestartGame } from "./features/surf-gameplay/act_restart_game";

function useGlobalApp() {
  const runtime = getOrCreateRuntime();
  const state = useGameRuntime();
  const screen = useAppScreen();

  useEffect(() => {
    runtime.start();
    return () => {
      runtime.stop();
    };
  }, [runtime]);

  useEffect(() => {
    if (state.gameOver) {
      const hs = loadPreferences(); // not used, just to keep repo active
      setHighScore(state.score);
    }
  }, [state.gameOver, state.score]);

  return { runtime, state, screen };
}

export default function App() {
  const { state, screen } = useGlobalApp();

  const gameplayActions = useMemo(
    () => ({
      "settings-1": () => setScreen("settings"),
      "pause-esc-2": () => actPauseGame(),
    }),
    []
  );

  const settingsActions = useMemo(
    () => ({
      "settings-1": () => setScreen("settings"),
      "pause-2": () => actPauseGame(),
      "save-preferences-3": () => {
        savePreferences(loadPreferences());
        setScreen("gameplay");
      },
      "return-to-game-4": () => setScreen("gameplay"),
    }),
    []
  );

  return (
    <div
      data-setfarm-root="vectorgate-lite"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      {screen === "gameplay" && (
        <GameplayVectorgateLite
          actions={gameplayActions}
          runtime={{
            player: state.player,
            obstacles: state.obstacles,
            shards: state.shards,
            score: state.score,
            energy: state.energy,
            lives: state.lives,
            paused: state.paused,
          }}
        />
      )}
      {screen === "settings" && (
        <GameSettingsVectorgateLite actions={settingsActions} />
      )}
    </div>
  );
}

// Expose interactive runtime state for supervisor/runtime checks
declare global {
  interface Window {
    app: {
      state: ReturnType<typeof useGameRuntime>;
      actions: {
        moveLeft: () => void;
        moveRight: () => void;
        pause: () => void;
        resume: () => void;
        reset: () => void;
        setScreen: (s: "gameplay" | "settings" | "menu") => void;
        startGame: () => void;
        pauseGame: () => void;
        restartGame: () => void;
      };
    };
  }
}

const runtime = getOrCreateRuntime();
window.app = {
  get state() {
    return runtime.state;
  },
  actions: {
    moveLeft: () => runtime.movePlayer(-1),
    moveRight: () => runtime.movePlayer(1),
    pause: () => runtime.setPaused(true),
    resume: () => runtime.setPaused(false),
    reset: () => {
      resetRuntime().start();
    },
    setScreen,
    startGame: actStartGame,
    pauseGame: actPauseGame,
    restartGame: actRestartGame,
  },
};
