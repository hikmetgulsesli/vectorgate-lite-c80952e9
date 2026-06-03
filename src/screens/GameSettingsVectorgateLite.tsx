// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - VectorGate Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Gamepad2, Pause, Settings, Volume1, Volume2 } from "lucide-react";


export type GameSettingsVectorgateLiteActionId = "settings-1" | "pause-2" | "save-preferences-3" | "return-to-game-4";

export interface GameSettingsVectorgateLiteProps {
  actions?: Partial<Record<GameSettingsVectorgateLiteActionId, () => void>>;

}

export function GameSettingsVectorgateLite({ actions }: GameSettingsVectorgateLiteProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-hud-safe-area h-16 w-full z-50 fixed top-0 left-0 w-full bg-surface/60 dark:bg-surface/60 backdrop-blur-xl border-b border-primary/20 shadow-[0_0_15px_rgba(0,220,229,0.3)]">
      <div className="font-display-lg text-[24px] md:text-[32px] text-primary dark:text-surface-tint tracking-tighter uppercase">
                  VectorGate Lite
              </div>
      <div className="flex items-center gap-6">
      {/* Active Settings Icon */}
      <button className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-150 scale-95 active:scale-90 transition-transform" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary drop-shadow-[0_0_8px_rgba(0,220,229,0.8)]" aria-hidden={true} focusable="false" />
      </button>
      {/* Inactive Pause Icon */}
      <button className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-150 scale-95 active:scale-90 transition-transform" type="button" aria-label="Pause" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="pt-28 pb-24 px-container-padding max-w-7xl mx-auto min-h-screen flex flex-col gap-8 relative z-10">
      {/* Header */}
      <div className="mb-4">
      <h1 className="font-display-xl text-primary uppercase tracking-tighter neon-glow">SYSTEM CONFIGURATION</h1>
      <p className="font-body-lg text-on-surface-variant tracking-wide mt-2">Adjust HUD parameters and gameplay variables.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Settings Controls */}
      <div className="lg:col-span-7 flex flex-col gap-6">
      {/* Difficulty Settings */}
      <div className="glass-panel p-6 rounded-lg light-leak-top">
      <h2 className="font-headline-md text-on-surface mb-6 uppercase tracking-widest text-sm text-primary">Difficulty Protocol</h2>
      <div className="flex flex-col sm:flex-row gap-4">
      <label className="flex-1 cursor-pointer group">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="easy" />
      <div className="w-full text-center py-3 border border-surface-variant text-on-surface-variant rounded font-label-sm uppercase tracking-widest transition-colors duration-200 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 peer-checked:shadow-[inset_0_0_15px_rgba(0,220,229,0.1)] group-hover:border-primary/50">
                                      Standard
                                  </div>
      </label>
      <label className="flex-1 cursor-pointer group">
      <input defaultChecked={true} className="peer sr-only" name="difficulty" type="radio" defaultValue="normal" />
      <div className="w-full text-center py-3 border border-surface-variant text-on-surface-variant rounded font-label-sm uppercase tracking-widest transition-colors duration-200 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 peer-checked:shadow-[inset_0_0_15px_rgba(0,220,229,0.1)] group-hover:border-primary/50">
                                      Overdrive
                                  </div>
      </label>
      <label className="flex-1 cursor-pointer group">
      <input className="peer sr-only" name="difficulty" type="radio" defaultValue="hard" />
      <div className="w-full text-center py-3 border border-surface-variant text-on-surface-variant rounded font-label-sm uppercase tracking-widest transition-colors duration-200 peer-checked:border-secondary peer-checked:text-secondary peer-checked:bg-secondary/10 peer-checked:shadow-[inset_0_0_15px_rgba(255,171,243,0.1)] group-hover:border-secondary/50">
                                      Critical
                                  </div>
      </label>
      </div>
      </div>
      {/* Sliders */}
      <div className="glass-panel p-6 rounded-lg light-leak-top flex flex-col gap-8">
      {/* Signal Speed */}
      <div>
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-headline-md text-on-surface uppercase tracking-widest text-sm text-primary">Signal Speed</h2>
      <span className="font-label-sm text-primary neon-glow" id="speed-val">120 Hz</span>
      </div>
      <div className="relative w-full h-8 flex items-center">
      <input className="w-full z-10 relative" max="240" min="60" type="range" defaultValue="120" />
      {/* Decorative background ticks */}
      <div className="absolute w-full flex justify-between px-1 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
      <div className="w-px h-3 bg-white"></div>
      <div className="w-px h-2 bg-white"></div>
      <div className="w-px h-3 bg-white"></div>
      <div className="w-px h-2 bg-white"></div>
      <div className="w-px h-3 bg-white"></div>
      </div>
      </div>
      </div>
      {/* Volume */}
      <div>
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-headline-md text-on-surface uppercase tracking-widest text-sm text-primary">Telemetry Audio</h2>
      <span className="font-label-sm text-primary neon-glow" id="vol-val">85%</span>
      </div>
      <div className="flex items-center gap-4">
      <Volume1 className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <div className="relative w-full h-8 flex items-center flex-1">
      <input className="w-full z-10 relative" max="100" min="0" type="range" defaultValue="85" />
      </div>
      <Volume2 className="text-primary text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Info & Actions */}
      <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
      {/* How to Play */}
      <div className="glass-panel p-6 rounded-lg light-leak-top border-secondary/30 relative overflow-hidden group h-full">
      {/* Subtle scanline bg specific to this card */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
      <h2 className="font-headline-md text-secondary mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
      <Gamepad2 className="text-[18px]" aria-hidden={true} focusable="false" />
                              Operation Manual
                          </h2>
      <div className="flex flex-col gap-5 relative z-10">
      <div className="flex justify-between items-center border-b border-surface-variant pb-3">
      <span className="font-body-md text-on-surface-variant">Phase Shift</span>
      <div className="bg-surface-container-high border border-outline-variant px-4 py-1 rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase tracking-widest">
                                      Space
                                  </div>
      </div>
      <div className="flex justify-between items-center border-b border-surface-variant pb-3">
      <span className="font-body-md text-on-surface-variant">System Pause</span>
      <div className="bg-surface-container-high border border-outline-variant px-4 py-1 rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase tracking-widest">
                                      Esc
                                  </div>
      </div>
      <div className="flex justify-between items-center border-b border-surface-variant pb-3">
      <span className="font-body-md text-on-surface-variant">Directional Vector</span>
      <div className="flex gap-2">
      <div className="bg-surface-container-high border border-outline-variant w-8 h-8 flex items-center justify-center rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase">
                                          W
                                      </div>
      <div className="flex flex-col gap-1">
      <div className="flex gap-1">
      <div className="bg-surface-container-high border border-outline-variant w-8 h-8 flex items-center justify-center rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase">
                                                  A
                                              </div>
      <div className="bg-surface-container-high border border-outline-variant w-8 h-8 flex items-center justify-center rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase">
                                                  S
                                              </div>
      <div className="bg-surface-container-high border border-outline-variant w-8 h-8 flex items-center justify-center rounded shadow-[0_2px_0_theme('colors.surface-variant')] font-label-sm text-primary uppercase">
                                                  D
                                              </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6">
      <button className="flex-1 py-4 px-6 border border-primary text-primary font-label-sm uppercase tracking-widest transition-colors duration-200 hover:bg-primary hover:text-on-primary hover:shadow-[0_0_20px_rgba(0,220,229,0.6)] active:scale-95 text-center relative overflow-hidden group" type="button" data-action-id="save-preferences-3" onClick={actions?.["save-preferences-3"]}>
      <span className="relative z-10">Save Preferences</span>
      <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
      </button>
      <button className="flex-1 py-4 px-6 border border-surface-variant text-on-surface-variant font-label-sm uppercase tracking-widest transition-colors duration-200 hover:border-on-surface hover:text-on-surface active:scale-95 text-center" type="button" data-action-id="return-to-game-4" onClick={actions?.["return-to-game-4"]}>
                              Return to Game
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/* Decorative Corner HUD Elements */}
      <div className="fixed bottom-6 left-6 font-label-sm text-primary/40 uppercase tracking-widest text-[10px] pointer-events-none z-0">
              SYS_STATUS: OPTIMAL<br />
              V-GATE_LITE_v1.4.2
          </div>
      <div className="fixed top-24 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/20 pointer-events-none z-0"></div>
      <div className="fixed bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/20 pointer-events-none z-0"></div>
    </>
  );
}
