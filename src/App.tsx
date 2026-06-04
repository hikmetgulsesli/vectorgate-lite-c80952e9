import { useEffect } from "react";
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

  const gameplayActions = {
    "settings-1": () => setScreen("settings"),
    "pause-esc-2": () => {
      getOrCreateRuntime().setPaused(!getOrCreateRuntime().state.paused);
    },
  };

  const settingsActions = {
    "settings-1": () => setScreen("settings"),
    "pause-2": () => {
      getOrCreateRuntime().setPaused(!getOrCreateRuntime().state.paused);
    },
    "save-preferences-3": () => {
      savePreferences(loadPreferences());
      setScreen("gameplay");
    },
    "return-to-game-4": () => setScreen("gameplay"),
  };

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
  },
};
