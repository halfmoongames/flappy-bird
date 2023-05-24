import {assert, isSet, expect} from "libf/dist/util"
import {log} from "./auxiliary"
import {CanvasHelper} from "./canvasHelper"

interface Context {
  $canvas: HTMLCanvasElement,
  canvasHelper: CanvasHelper
}

const context: Context = {
  $canvas: null as any,
  canvasHelper: null as any
}

// Initialization.
window.onload = () => {
  const $canvas = document.getElementById("game")

  assert(isSet($canvas), "canvas element should exist in the DOM")
  assert($canvas instanceof HTMLCanvasElement, "canvas element should be an instance of HTMLCanvasElement")
  context.$canvas = $canvas as HTMLCanvasElement
  context.$canvas.width = 1000
  context.$canvas.height = 600

  const canvasContext2d = expect(context.$canvas.getContext("2d"), "2d context should exist in canvas")

  context.canvasHelper = new CanvasHelper(canvasContext2d)
  context.canvasHelper.drawBackground()
  log("game initialized")
}
