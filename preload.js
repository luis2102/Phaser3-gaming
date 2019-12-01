var PlataformasScroller = PlataformasScroller || {};
PlataformasScroller.Preload = function(){};

PlataformasScroller.Preload.prototype = {
    preload: function () {
    this.load.image('titleScreen', 'assets/titleScreen.jpg'); 
    this.load.image('play','assets/play.png');
    this.load.image('creditos','assets/creditos.jpg');
    this.load.image('cursor','assets/cursor.png');
    this.load.image('title', 'assets/title.png');
    },
    
    create: function () {
        console.log('Escena Bootloader');
        this.game.state.start("GameTitle");
}
    
}