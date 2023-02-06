class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = gravity
    }
    update(entity, delta) {
        if (entity.falling) {
            entity.speed += this._gravity
            entity.y += entity.speed * delta
        }
    }
}