import Phaser from 'phaser'
export default class gameOverScene extends Phaser.Scene {
	constructor() {
		super('over-scene')
    }

    init(data){
        this.score = data.score
    }

    preload(){
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('gameover', 'images/gameover.png')
    }

    create(){
        this.add.image(200, 320, 'background')
        this.add.image(200, 200, 'gameover')
        this.add.text(100, 300, 'score: '+ this.score,{
            fontSize: '32px', fill: 'black'})
    }

}