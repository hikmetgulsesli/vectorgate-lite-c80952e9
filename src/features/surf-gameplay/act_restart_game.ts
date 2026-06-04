import { resetRuntime, setScreen } from "../vectorgate-lite/vectorgate-lite.store";

export function actRestartGame() {
  resetRuntime().start();
  setScreen("gameplay");
}
