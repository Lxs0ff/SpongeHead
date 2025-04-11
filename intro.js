class Intro extends Phaser.Scene {
    constructor(){
        super({key : 'intro_scene'})
    }

    init(data){
        this.camera.main.SetBackgroundColor('#ffffff');
    }
    
    preload(){
    console.log('Patate');
    this.load.audio('audio', 'assets/sounds/coin.wav');
    this.load.image('logo', 'assets/textures/logo.png');
    }
    
    create(data){
    this.sound.play('audio');
    let bg = this.add.image(0, 0, 'logo');
    bg.setOrigin(0,0);
    }
    
    update(time, delta){
    if(time > 3000){
        this.scene.switch('main_menu_scene');
    }
        
    }
    
}

export default Intro