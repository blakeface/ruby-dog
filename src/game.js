(function () {
  const game = new Phaser.Game(645, 645, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

  function preload() {
    game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/roguelikeSheet_transparent.png');
    game.load.image('tiles_extra', 'assets/roguelikeIndoor_transparent.png');
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
  }

  function update() {
    // this.physics.arcade.collide(this.ruby, this.layer);
  }
})();
