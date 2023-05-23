export function assert(condition: boolean, reasoning: string): void {
  if (!condition)
    throw new Error(`assertion failed: ${reasoning}`)
}

export function isSet(value: unknown): boolean {
  return value !== null && value !== undefined
}

export function log(message: string): void {
  console.log(`event: ${message}`)
}
