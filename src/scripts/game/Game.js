import * as PIXI from 'pixi.js'
import { App } from '../system/App'
import { Scene } from '../system/Scene'
import { Board } from './Board'

export class Game extends Scene {
    constructor() {
        super()
        this.container = new PIXI.Container()
        this.createBackground()

        this.board = new Board()
        this.container.addChild(this.board.container)
    }
    createBackground() {
        this.bg = App.sprite('bg')
        this.bg.width = window.innerWidth
        this.bg.height = window.innerHeight
        this.container.addChild(this.bg)
    }
}
