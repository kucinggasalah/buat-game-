import Phaser from "phaser";
export default class gameWinScene extends Phaser.Scene {
    constructor(){
        super('win-scene')
    }
    init(data){
        this.score = data.score
    }

    preload(){
        this.load.image('background','images/background3.png')
        this.load.image('bawah','images/sky.png')
        this.load.image('replay','images/replay.png')
    }

    create(){
        this.add.image(400,400,'background')
        this.add.image(400,750,'bawah')
        this.replayButton = this.add.image(400,360,'replay') .setInteractive() .setScale(0.5)
        this.replayButton.once('pointerup', ()=> {
            this.scene.start('start-scene')
        },this)
        this.add.text(348  ,350,'menustart', {
            fontSize: '19px',
            fill: 'white', 
            fontStyle:'bold',
            backgroundColor: 'orange'
        }) 
        this.add.text(180,100,'ANDA MENANG', {
            fontSize: '65px',
            fill: 'white', 
            fontStyle:'bold',
            
        }) 
        this.add.text(315,200,'SCORE:'+ this.score, {
            fontSize: '32px', fill: 'white', fontStyle:'bold'
        })
    }
}