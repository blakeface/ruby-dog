(function () {
  const game = new Phaser.Game(645, 645, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

  function preload() {
    game.load.tilemap('map', 'assets/maps/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/maps/roguelikeSheet_transparent.png');
    game.load.image('tiles_extra', 'assets/maps/roguelikeIndoor_transparent.png');
    game.load.spritesheet('right', 'assets/sprites/right_facing.png', 37, 45, 18);
    game.load.spritesheet('left', 'assets/sprites/left_facing.png');
    game.load.spritesheet('back', 'assets/sprites/back_facing.png');
    game.load.spritesheet('front', 'assets/sprites/front_facing.png');
  }

  function create() {
    game.stage.backgroundColor = '#ffffff';

    var map = game.add.tilemap('map');
    map.addTilesetImage('roguelike', 'tiles');
    map.addTilesetImage('roguelikeIndoor', 'tiles_extra');

    var floors = map.createLayer('floors');
    var house = map.createLayer('house');
    var details = map.createLayer('details');
    var offset = map.createLayer('offset');
    floors.scale.set(1.55);
    house.scale.set(1.55);
    details.scale.set(1.55);
    offset.scale.set(1.55);
    floors.resizeWorld();

    var right = game.add.sprite(300, 200, 'right');
    var walk = right.animations.add('walk');
    right.animations.play('walk', 30, true);


    // map.setCollision(16, true, this.house);
    // map.setCollision(16, true, this.details);
  }

  function update() {
    // this.physics.arcade.collide(this.ruby, this.layer);
  }
})();
