import * as PIXI from 'pixi.js'
import { Loader } from './Loader'
import { ScenesManager } from './ScenesManager'

class Application {
    run(config) {
        this.config = config

        this.app = new PIXI.Application({ resizeTo: window })
        globalThis.__PIXI_APP__ = this.app

        document.body.appendChild(this.app.view)

        this.loader = new Loader(this.app.loader, this.config)
        this.loader.preload().then(() => this.start())

        this.scenes = new ScenesManager()
        this.app.stage.addChild(this.scenes.container)
    }

    res(key) {
        return this.loader.resources[key].texture
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key))
    }

    start() {
        this.scenes.start('Game')
    }
}

export const App = new Application()
