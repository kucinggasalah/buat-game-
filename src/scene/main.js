import Phaser, { Scene } from 'phaser'

import collectingCoinScene from './collectingCoinScene'
import gameOverScene from './gameOverScene'


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
	Scene: [collectingCoinScene, gameOverScene],

}

export default new Phaser.Game(config)
