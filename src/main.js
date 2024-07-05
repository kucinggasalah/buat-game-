import Phaser from "phaser" 

import collectingCoinScene from "./scene/collectingCoinScene"
import gameOverScene from "./scene/gameOverScene"
import gameStartScene from "./scene/gameStartScene"
import gameWinScene from "./scene/gameWinScene"


const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false
		},
	},
	// scene: [gameStartScene, collectingCoinScene, gameOverScene, gameWinScene]
	scene: [gameWinScene]

}

export default new Phaser.Game(config)
