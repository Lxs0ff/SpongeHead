// import name of scene from './folder.js'
import Intro from '/intro.js'
import MainMenu from '/main_menu.js'

// const key = new name of scene();
const intro_scene = new Intro();
const main_menu_scene = new MainMenu();

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true
        }
    },
};

var game = new Phaser.Game(config);

//game.scene.add('key', key);
game.scene.add('intro_scene', intro_scene);
game.scene.add('main_menu_scene', main_menu_scene);

game.scene.start('intro_scene');
