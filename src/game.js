(function () {
  const game = new Phaser.Game(645, 645, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

  function preload() {
    game.load.tilemap('map', 'assets/maps/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/maps/roguelikeSheet_transparent.png');
    game.load.image('tiles_extra', 'assets/maps/roguelikeIndoor_transparent.png');
    game.load.spritesheet('right', 'assets/sprites/right.png');
    game.load.spritesheet('left', 'assets/sprites/left.png');
    game.load.spritesheet('back', 'assets/sprites/back.png');
    game.load.spritesheet('front', 'assets/sprites/front.png');
  }

  function create() {
    game.stage.backgroundColor = '#ffffff';

    const map = game.add.tilemap('map');
    map.addTilesetImage('roguelike', 'tiles');
    map.addTilesetImage('roguelikeIndoor', 'tiles_extra');

    const floors = map.createLayer('floors');
    const house = map.createLayer('house');
    const details = map.createLayer('details');
    const offset = map.createLayer('offset');
    floors.scale.set(1.55);
    house.scale.set(1.55);
    details.scale.set(1.55);
    offset.scale.set(1.55);
    floors.resizeWorld();

    const front = game.add.sprite(300, 450, 'front');

    front.animations.add('walk');
    front.animations.play('walk', 30, true);


    // map.setCollision(16, true, this.house);
    // map.setCollision(16, true, this.details);
  }

  function update() {
    // this.physics.arcade.collide(this.ruby, this.layer);
  }

  function render() {

  }
})();
