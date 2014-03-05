simpleSpriteSheet
=================

Spritesheet work at Javascript. This is simple.

How to use  
------
### Create a instance  
`` var sss = new SimpleSpriteSheet; ``  

### Initialize  
    sss.init({  
        speed 		: 160,
        divWidth 	: 120,
        divHeight 	: 370,
        xValue 		: 10,
        yValue 		: 3,
    });
    
    sss.addItem("@dom_id" , "@imgPath");
    
    sss.play();
    // sss.stop();

Demo: http://gallery.renowan.com/archive/simple-sprite-sheet/sample/index.html
