import Phaser from 'phaser'
export default class collectingCoinScene extends Phaser.Scene {
	constructor() {
		super('collecting-coin-scene')
	}

	init(){
		this.platform= undefined
		this.player= undefined
		this.coin= undefined
		this.cursor= undefined 
		this.duri= undefined
		this.scoretext= undefined
		this.score= 0
	}

	preload() {
		this.load.image('ground','images/platform.png')
		this.load.image('ground1','images/platformats1.png')
		this.load.image('coin','images/coin.png')
		this.load.image('duri','images/duri.png')
		this.load.image('sky','images/sky.png')
		this.load.image('rumput','images/bush1.png')
		this.load.image('pohon','images/treePine.png')
		this.load.spritesheet('player','images/player.png',{frameWidth:36, frameHeight:46})
	}

	create() {
		//PLATFORM
		this.add.image(400,300,'sky')
		this.platform=this.physics.add.staticGroup()
		this.platform.create(400,450,'ground').setOffset(2,2)
		this.platform.create(617,450,'ground').setOffset(2,2)
		this.platform.create(834,450,'ground').setOffset(2,2)
		this.platform.create(100,320,'ground').setOffset(2,2)
		this.platform.create(317,320,'ground').setOffset(2,2)
		this.platform.create(750,200,'ground').setOffset(2,2)
		this.platform.create(533,200,'ground').setOffset(2,2)
		this.platform.create(175,200,'ground').setOffset(2,2)
		this.platform.create(400,90,'ground').setOffset(2,2)
		this.platform.create(400,1150,'ground1').setOffset(2,2).setScale(17).refreshBody();
		//PLAYER
		this.player = this.physics.add.sprite(750,540,'player')
		this.player.setCollideWorldBounds(true)
		this.physics.add.collider(this.player,this.platform)
		this.player.setVelocity(200,200)
		this.player.setVelocityX(200)
		this.player.setVelocityY(200)
		.setOffset(-1,-5)
		//COIN
		this.coin= this.physics.add.group()
		this.coin.create(600,450,'coin').setOffset(-3,-3)
		this.coin.create(700,350,'coin').setOffset(-3,-3)
		this.coin.create(50,200,'coin').setOffset(-3,-3)
		this.coin.create(700,100,'coin').setOffset(-3,-3)
		this.coin.create(150,100,'coin').setOffset(-3,-3)
		this.coin.create(400,0,'coin').setOffset(-3,-3)
		this.coin.create(300,200,'coin').setOffset(-3,-3)
		this.coin.create(400,300,'coin').setOffset(-3,-3)
		this.coin.create(500,100,'coin').setOffset(-3,-3)
		this.coin.create(350,450,'coin').setOffset(-3,-3)
		this.physics.add.collider(this.coin,this.platform)
		this.coin.children.iterate(function (child){
			//@ts-ignore
			child.setBounceY(0.5)
		});
		//TOMBOL KEYBOARD
		this.cursor= this.input.keyboard.createCursorKeys()
		//ANIMASI KEKIRI
		this.anims.create({
			key: `left`,
			frames: this.anims.generateFrameNumbers('player',{start:9, end:16}),
			frameRate:10,
			repeat:-1
		});
		//ANIMASI KEKANAN
		this.anims.create({
			key:`right`,
			frames: this.anims.generateFrameNumbers('player',{start:0,end:8}),
			frameRate:10,
			repeat:-1
		});
		//OVERLAPS COIN
		this.physics.add.overlap(
			this.player,
			this.coin,
			this.collectingCoin,
			null,
			this
		)
		//TEKS SKOR
		this.scoreText= this.add.text(16,16,'score:0',{
			fontSize:'32px',fill:'yellow'
		});
		//DURI TAJAM
		this.duri = this.physics.add.group()
		this.duri.create(630,100,'duri')
		this.duri.create(550,300,'duri')
		this.duri.create(150,200,'duri')
		this.duri.create(450,450,'duri')
		this.duri.create(220,100,'duri')
		this.physics.add.collider(this.duri,this.platform)
		//OVERLAPS DURI TAJAM
		this.physics.add.overlap(
			this.duri,
			this.player,
			this.gameOver,
			null,
			this
		)
		//POHONNNNN
		this.pohon=this.physics.add.group()
		this.pohon.create(226,200,'pohon')
		this.pohon.create(190,100,'pohon')
		this.pohon.create(300,450,'pohon')
		this.pohon.create(650,450,'pohon')
		this.pohon.create(666,250,'pohon')
		this.pohon.create(600,100,'pohon')
		this.pohon.create(380,0,'pohon')
		this.pohon.create(100,450,'pohon')
		this.pohon.create(120,450,'pohon')
		this.physics.add.collider(this.pohon,this.platform)

		//RUMPUTTT
		this.rumput=this.physics.add.group()
		this.rumput.create(250,200,'rumput')
		this.rumput.create(220,200,'rumput')
		this.rumput.create(450,400,'rumput')
		this.rumput.create(200,450,'rumput')
		this.rumput.create(250,450,'rumput')
		this.rumput.create(450,0,'rumput')
		this.rumput.create(350,0,'rumput')
		this.rumput.create(750,100,'rumput')
		this.rumput.create(550,100,'rumput')
		this.rumput.create(100,100,'rumput')
		this.rumput.create(90,450,'rumput')
		this.rumput.create(140,450,'rumput')
		this.physics.add.collider(this.rumput,this.platform)

		

	}

	update(time){
		//PLAYER MOVEMENT
		if (this.cursor.left.isDown){
			this.player.setVelocity(-200,200)
			this.player.anims.play('left',true)
		} 
		else if (this.cursor.right.isDown){
			this.player.setVelocity(200,200)
			this.player.anims.play('right',true)
		}
		else {
			this.player.setVelocity(0,0)
			this.player.anims.play('turn')
		}
		//MELOMPAT
		if (this.cursor.up.isDown){
			this.player.setVelocity(0,-200)
			this.player.anims.play('turn')
		}
		//(SCORE
		if (this.score >= 100){
			this.physics.pause()
			this.add.text(250,300,'KAMU MENANG',{
				fontSize: '48px',
				fill: 'yellow'
			})
		}
		this.scoreText.setText('Score : '+ this.score);
	}

	
	collectingCoin(player, coin){
		coin.destroy()
		this.score += 10;
		
	}

	gameOver(player,duri){
		this.physics.pause()
		this.scene.start(`over-scene`)
	}

	
}