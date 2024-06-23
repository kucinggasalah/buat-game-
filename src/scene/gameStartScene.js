import Phaser from "phaser";
export default class gameStartScene extends Phaser.Scene {
    constructor(){
        super('start-scene')
    }

    preload(){
        this.load.image('background1','images/background3.png')
        this.load.image('start','images/start.png')
        this.load.image('star','images/star.png')
        this.load.image('plat','images/platformats1.png')
        this.load.image('bawah','images/sky.png')
    }

    create(){
        this.add.image(400,300,'background1')
        this.startButton = this.add.image(400,360,'start') .setInteractive() .setScale(0.5)
        this.startButton.once('pointerup', ()=> {
            this.scene.start('collecting-coin-scene')
        },this)
        this.add.text(94,100,'COLLECTING COIN', {
            fontSize: '69px',
            fill: 'white', 
            fontStyle:'bold',
            backgroundColor: 'orange'
        }) 
        this.add.text(230,160,'THE GAME', {
            fontSize: '70px',
             fill: 'white', 
             fontStyle:'bold',
             backgroundColor: 'orange'
        })

        this.add.image(58,170,'star')
        this.add.image(753,170,'star')

        this.add.image(400,850,'bawah')

    }
}