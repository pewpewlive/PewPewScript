/**
 * @noSelfInFile
 */

/**
 *
 */
declare interface Mesh {
  vertexes: Array<[x: number, y: number, z: number] | [x: number, y: number]>
  segments: number[][]
  colors?: number[]
}

declare interface Sound {
  attack?: number
  decay?: number
  sustain?: number
  sustainPunch?: number
  amplification?: number
  tremoloDepth?: number
  tremoloFrequency?: number
  frequency?: number
  frequencyDeltaSweep?: number
  frequencyJump1Onset?: number
  frequencyJump2Onset?: number
  frequencyJump1Amount?: number
  frequencyJump2Amount?: number
  frequencySweep?: number
  vibratoFrequency?: number
  vibratoDepth?: number
  flangerOffset?: number
  flangerOffsetSweep?: number
  repeatFrequency?: number
  waveform?:
    | "sine"
    | "triangle"
    | "sawtooth"
    | "square"
    | "tangent"
    | "whistle"
    | "breaker"
    | "whitenoise"
    | "pinknoise"
    | "brownnoise"
}
