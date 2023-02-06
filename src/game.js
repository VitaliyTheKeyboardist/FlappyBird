class Game {
  constructor() {
    this._config = new Config()
    this._canvas = document.getElementById(this._config.canvas.id)
    this._ctx = this._canvas.getContext("2d")
    this._canvas.width = this._config.canvas.width
    this._canvas.height = this._config.canvas.height

    this.width = this._config.canvas.width
    this.height = this._config.canvas.height

    this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas, ctx: this._ctx})
    this._physicsEngine = new PhysicsEngine({ gravity: this._config.gravity})
    this._resourceLoader = new ResourceLoader()
    this._inputHandler = new MouseInputHandler({
        left: ({ x, y }) => {
            this._bird.flap() 
        }
    })
  }
  async prepare() {
    this._spriteSheet = this._resourceLoader.load({
      type: RESOURCE_TYPE.IMAGE,
      src: this._config.spriteSheet.src,
      width: this._config.spriteSheet.width,
      height: this._config.spriteSheet.height,
    })
  }

  reset() {
    this._score = 0
    this._bird = new Bird({
      x: this._config.bird.x,
      y: this._config.bird.y,
      width: this._config.bird.width,
      height: this._config.bird.height,
      frames: this._config.bird.frames,
      spriteSheet: this._spriteSheet,
      flapSpeed: this._config.bird.flapSpeed,
      physicsEngine: this._physicsEngine,
      drawEngine: this._drawEngine,
      game: this,
    })
  }

  update() {
    this._bird.update()
  }

  draw() {
    this._bird.draw()
  }

  _loop() {
    const now = Date.now()
    const delta = this._lastUpdate - now
    this.reset()
    this.update(delta)
    this._drawEngine.clear()
    this.draw()

    this._lastUpdate = now

    requestAnimationFrame(this.start.bind(this))
  }

  start() {
    this._inputHandler.subscribe()
    this._lastUpdate = Date.now()
    this._loop()
  }
  gameOver() {
    alert(`Game over: ${this._score}`)
  }
}
