import { App } from '../system/App'

export class Tile {
    constructor(color) {
        this.color = color
        this.sprite = App.sprite(this.color)
        this.sprite.anchor.set(0.5)
    }

    setPosition(position) {
        this.sprite.x = position.x
        this.sprite.y = position.y
    }
}
