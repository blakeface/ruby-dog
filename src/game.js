(function () {
  const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

  function preload() {
    game.load.tilemap('map', 'assets/map.json', Phaser.Tilemap.TILED_JSON);
  }

  function create() {

  }

  function update() {
    // this.physics.arcade.collide(this.ruby, this.layer);
  }
})();
