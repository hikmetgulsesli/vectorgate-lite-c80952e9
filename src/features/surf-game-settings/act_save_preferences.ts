import { loadPreferences, savePreferences } from "../vectorgate-lite/vectorgate-lite.repo";
import { setScreen } from "../vectorgate-lite/vectorgate-lite.store";

export function actSavePreferences(): void {
  const prefs = loadPreferences();
  savePreferences(prefs);
  setScreen("gameplay");
}
