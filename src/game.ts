import {assert, isSet, log} from "./auxiliary"

interface Context {
  $canvas: HTMLCanvasElement
}

const context: Context = {
  $canvas: null as any
}

// Initialization.
window.onload = () => {
  const $canvas = document.getElementById("game")

  assert(isSet($canvas), "canvas element should exist in the DOM")
  assert($canvas instanceof HTMLCanvasElement, "canvas element should be an instance of HTMLCanvasElement")
  context.$canvas = $canvas as HTMLCanvasElement
  log("game initialized")
}
