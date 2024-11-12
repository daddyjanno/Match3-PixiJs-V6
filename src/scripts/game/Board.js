import * as PIXI from 'pixi.js'
import { App } from '../system/App'
import { Field } from './Field'

export class Board {
    constructor() {
        this.container = new PIXI.Container()
        this.fields = []
        this.rows = App.config.board.rows
        this.cols = App.config.board.cols
        this.create()
        this.adjustPosition()
    }
    create() {
        this.createFields()
    }
    createFields() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.createField(row, col)
            }
        }
    }
    createField(row, col) {
        const field = new Field(row, col)
        this.fields.push(field)
        this.container.addChild(field.sprite)
    }
    adjustPosition() {
        this.fieldSize = this.fields[0].sprite.width
        this.width = this.cols * this.fieldSize
        this.height = this.rows * this.fieldSize

        this.container.x =
            (window.innerWidth - this.width) / 2 + this.fieldSize / 2
        this.container.y =
            (window.innerHeight - this.height) / 2 + this.fieldSize / 2
    }
}
