import { getOrCreateRuntime, resetRuntime, setScreen } from "../vectorgate-lite/vectorgate-lite.store";

export function actStartGame() {
  resetRuntime().start();
  setScreen("gameplay");
}
