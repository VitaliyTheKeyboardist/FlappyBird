class DrawEngine {
  drawImage({ spriteSheet, image, x, y, width, height }) {}
  clear() {}
}

class CanvasDrawEngine extends DrawEngine {
    constructor({ canvas, ctx }) {
        super()
        this._canvas = canvas
        this._ctx = ctx
    }
    drawImage({ spriteSheet, image, x, y, width, height }) {
        super.drawImage({ spriteSheet, image, x, y, width, height })
        this._canvas.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
    }

    clear() {
        super.clear()
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}
