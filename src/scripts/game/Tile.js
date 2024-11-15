import * as PIXI from 'pixi.js'
import gsap from 'gsap'
import { App } from '../system/App'
import { PixiPlugin } from 'gsap/all'

gsap.registerPlugin(PixiPlugin)
PixiPlugin.registerPIXI(PIXI)

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
    moveTo(position, duration = 1, delay = 0, ease = 'power1.out') {
        return new Promise((resolve) => {
            gsap.to(this.sprite, {
                duration,
                delay,
                ease,
                pixi: {
                    x: position.x,
                    y: position.y,
                },
                onComplete: () => {
                    resolve()
                },
            })
        })
    }
    isNeighbour(tile) {
        return (
            Math.abs(this.field.row - tile.field.row) +
                Math.abs(this.field.col - tile.field.col) ===
            1
        )
    }
}
