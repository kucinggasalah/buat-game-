import Phaser from 'phaser'
export default class gameOverScene extends Phaser.Scene {
	constructor() {
		super('over-scene')
    }

    init(data){
        this.replayButton = undefined
        this.score = data.score
    }

    preload(){
        this.load.image('background', 'images/sky.png')
        this.load.image('gameover', 'images/gameover1.png')
        this.load.image('replay','images/replay.png')
        
    }

    create(){
        this.add.image(400, 300, 'background')
        this.add.image(400, 220, 'gameover')
        this.replayButton = this.add.image(400,360,'replay') .setInteractive() .setScale(0.5)
        this.replayButton.once('pointerup', ()=> {
            this.scene.start('collecting-coin-scene')
        },this)
        this.add.text(315,280,'SCORE:'+ this.score, {
            fontSize: '32px', fill: 'green', backgroundColor: 'black', fontStyle:'bold'
        })
    }

}