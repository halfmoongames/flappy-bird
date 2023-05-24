import {Maybe} from "libf"

export enum Sprite {
  Base = "base",
  Bird = "bird",
  BackgroundDay = "background-day"
}

export class CanvasHelper {
  private readonly spriteCache: Map<Sprite, HTMLImageElement> = new Map()

  constructor(private readonly context: CanvasRenderingContext2D) {
    //
  }

  fetchImage(url: string): Maybe<HTMLImageElement> {
    let $img = new Image()

    $img.src = url

    // TODO: Handle loading failure, return `Maybe.nothing`.

    return Maybe.just($img)
  }

  // TODO: This should be done async.
  fetchSprite(sprite: Sprite): HTMLImageElement {
    const cached = this.spriteCache.get(sprite)

    if (cached !== undefined)
      return cached

    let $img = this.fetchImage(`./sprites/${sprite}.png`)
      .expect("all sprites should exist")

    this.spriteCache.set(sprite, $img)

    return $img
  }

  drawBackground() {
    const backgroundImg = this.fetchSprite(Sprite.BackgroundDay)

    this.context.drawImage(backgroundImg, 500, 500)
  }
}
