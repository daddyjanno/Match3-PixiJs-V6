import { Tools } from '../system/Tools'
import { Game } from './Game'

export const Config = {
    loader: Tools.massiveRequire(
        require['context']('./../../sprites', true, /\.(mp3|png|jpe?g)$/)
    ),
    startScene: Game,
    scenes: {
        Game: Game,
    },
    board: {
        rows: 8,
        cols: 8,
    },
    tilesColors: ['blue', 'green', 'orange', 'pink', 'red', 'yellow'],
}
