var game = new Phaser.Game(600, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('fondo', 'assets/sky.png');
    game.load.image('plataforma', 'assets/platform.png');
    game.load.image('diamante', 'assets/diamante.png');
    game.load.spritesheet('personaje', 'assets/dude.png', 32, 48);
}
var plataforma;
var suelo;
var personaje;
var diamantes;
var bandeja;

function create() {
    game.add.sprite(0, 0, 'fondo');
    
    plataforma = game.add.sprite(0, 100, 'plataforma');
    plataforma.width = 800;
    
    suelo = game.add.sprite(0, game.world.height - 5, 'plataforma');
    suelo.width = 800;
    suelo.height = 5;
    
    bandeja = game.add.sprite(50, game.world.height - 100, 'plataforma');
    bandeja.width = 150;
    
    personaje = game.add.sprite(32, 0, 'personaje');
   }

function update() {
}