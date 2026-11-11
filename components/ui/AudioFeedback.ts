"use client";

// Audio disabled per user directive: all functions are pure no-ops.
export function setAudioEnabled(): boolean {
  return false;
}

export function toggleAudio(): boolean {
  return false;
}

export function isAudioEnabled(): boolean {
  return false;
}

export function playCyberClick() {
  // Pure no-op: audio completely disabled
}
