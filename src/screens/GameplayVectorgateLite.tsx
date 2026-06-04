// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - VectorGate Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Clock, Pause, Settings, Trophy } from "lucide-react";


export type GameplayVectorgateLiteActionId = "settings-1" | "pause-esc-2";

export interface GameplayVectorgateLiteProps {
  actions?: Partial<Record<GameplayVectorgateLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayVectorgateLite({ actions, runtime }: GameplayVectorgateLiteProps) {
  void runtime;
  return (
    <>
      {/* Playfield Canvas (Background) */}
      <div className="absolute inset-0 bg-grid z-0"></div>
      {/* Playfield Elements (Center) */}
      <div className="absolute top-1/2 inset-x-0 mx-auto transform -translate-y-1/2 z-10 pointer-events-none w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[600px] md:h-[600px] md:max-w-none">
      {/* Gate 1 (Outer - Magenta) */}
      <div className="gate-outer absolute top-1/2 inset-x-0 mx-auto transform -translate-y-1/2 border-[4px] border-secondary border-dashed rounded-full opacity-60 filter blur-[1px] w-[calc(100vw-48px)] max-w-[360px] aspect-square md:w-[500px] md:h-[500px] md:max-w-none" style={{boxShadow: "0 0 30px rgba(255, 171, 243, 0.3) inset, 0 0 30px rgba(255, 171, 243, 0.3)"}}></div>
      {/* Gate 2 (Inner - Lime) */}
      <div className="gate-inner absolute top-1/2 inset-x-0 mx-auto transform -translate-y-1/2 w-[300px] h-[300px] border-[6px] border-tertiary-container border-dotted rounded-full opacity-80" style={{boxShadow: "0 0 20px rgba(59, 255, 23, 0.4) inset, 0 0 20px rgba(59, 255, 23, 0.4)"}}></div>
      {/* Player Signal (Center - Cyan) */}
      <div className="signal-core absolute top-1/2 inset-x-0 mx-auto transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full z-20"></div>
      {/* Signal Trail/Motion */}
      <div className="absolute top-1/2 right-1/2 w-20 h-1 bg-gradient-to-l from-primary to-transparent transform -translate-y-1/2 opacity-50 filter blur-[2px]"></div>
      </div>
      {/* HUD: TopAppBar (Shared Component Base) */}
      <nav className="flex flex-wrap justify-between items-start px-hud-safe-area pt-hud-safe-area w-full z-50 absolute top-0 left-0 pointer-events-none">
      {/* Left HUD: Brand & Level */}
      <div className="flex flex-col gap-2 bg-surface/60 backdrop-blur-xl border border-primary/20 shadow-[0_0_15px_rgba(0,220,229,0.3)] rounded-lg p-4 pointer-events-auto scanline relative overflow-hidden">
      <div className="absolute inset-0 border border-t-0 border-l-0 border-r-0 border-b-primary opacity-50" style={{background: "linear-gradient(to top right, transparent, rgba(0, 220, 229, 0.1))"}}></div>
      <h1 className="font-display-lg text-primary tracking-tighter uppercase leading-none neon-glow-primary relative z-10">VectorGate Lite</h1>
      <div className="flex items-center gap-2 relative z-10">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Sector</span>
      <span className="font-headline-md text-headline-md text-tertiary-container neon-glow-tertiary">03</span>
      </div>
      </div>
      {/* Center HUD: Health Bar (Progress Bar Component) */}
      <div className="hidden md:flex flex-col items-center gap-2 mt-4 pointer-events-auto">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Shield Integrity</span>
      <div className="flex gap-1 w-full max-w-64 h-3 bg-surface-container-highest border border-outline-variant p-[2px]">
      {/* Segmented Health */}
      <div className="h-full w-1/5 bg-tertiary-container shadow-[0_0_10px_rgba(59,255,23,0.8)]"></div>
      <div className="h-full w-1/5 bg-tertiary-container shadow-[0_0_10px_rgba(59,255,23,0.8)]"></div>
      <div className="h-full w-1/5 bg-tertiary-container shadow-[0_0_10px_rgba(59,255,23,0.8)]"></div>
      <div className="h-full w-1/5 bg-tertiary-container shadow-[0_0_10px_rgba(59,255,23,0.8)]"></div>
      {/* Empty Segment */}
      <div className="h-full w-1/5 bg-surface-container border border-outline-variant/30"></div>
      </div>
      <span className="font-headline-md text-headline-md text-tertiary-container neon-glow-tertiary">80%</span>
      </div>
      {/* Right HUD: Score & Actions */}
      <div className="flex flex-col items-end gap-4 pointer-events-auto max-md:scale-75 max-md:origin-top-right">
      {/* Score Multiplier & Score */}
      <div className="flex flex-col items-end score-active">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary neon-glow-secondary">x4 Multiplier</span>
      <span className="font-display-xl text-display-xl text-primary neon-glow-primary tabular-nums tracking-wider">001250</span>
      </div>
      {/* Trailing Icons (Shared Component Logic) */}
      <div className="flex gap-4">
      <button className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-150 scale-95 active:scale-90 bg-surface/60 backdrop-blur-md rounded group relative overflow-hidden" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-primary text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-150 scale-95 active:scale-90 bg-surface/60 backdrop-blur-md rounded group relative overflow-hidden" title="Pause (Esc)" type="button" data-action-id="pause-esc-2" onClick={actions?.["pause-esc-2"]}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <Pause  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <div className="absolute -bottom-6 right-0 font-label-sm text-[10px] text-on-surface-variant uppercase whitespace-nowrap opacity-50">Esc</div>
      </button>
      </div>
      </div>
      </nav>
      {/* Bottom HUD: Session Info */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none z-50">
      {/* Left: Session Time */}
      <div className="flex items-center gap-2 bg-surface/40 backdrop-blur-md border border-primary/30 p-2 rounded pointer-events-auto scanline">
      <Clock className="text-primary text-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md text-primary neon-glow-primary text-lg tabular-nums">02:45.33</span>
      </div>
      {/* Right: High Score */}
      <div className="flex flex-col items-end pointer-events-auto">
      <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-1">Target Score</span>
      <div className="flex items-center gap-2 bg-surface/40 backdrop-blur-md border border-primary/30 p-2 rounded scanline">
      <Trophy className="text-secondary text-sm" aria-hidden={true} focusable="false" />
      <span className="font-headline-md text-headline-md text-on-surface opacity-80 text-lg tabular-nums">005000</span>
      </div>
      </div>
      </div>
    </>
  );
}
