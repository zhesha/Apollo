define('Platform',
    function () {
        return function (position) {
            var HEIGHT = 5, WIDTH = 50, SPEED = 2;
            var height, width, x, y, speed;

            this.move = function(player){
                y -= speed;
                if(x <= player.rightEdge() && x + width >= player.leftEdge()){
                    if(y >= player.getPosition() && y - 6 <= player.getPosition()) {
                        player.setPosition(y-speed);
                    }
                }
                return y - height > 0;
            };
            this.render = function(ctx){
                ctx.fillStyle="#44aa44";
                ctx.fillRect(x, y, width, height);
            };

            var constructor = function(){
                height = HEIGHT;
                width = WIDTH;
                speed = SPEED;
                x = position;
                y = 640;
            };
            constructor();
        };
    }
);