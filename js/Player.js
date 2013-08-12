define('Player',
    function () {
        return function () {
            var HEIGHT = 10, WIDTH = 10, SPEED = 4, MOVE_SPEED = 5;
            var height, width, x, y, speed, moveSpeed;

            this.move = function(){
                y += speed;
                return y + height > 640;
            };
            this.render = function(ctx){
                ctx.fillStyle="#FF0000";
                ctx.fillRect(x, y, width, height);
            };
            this.left = function(){
                x -= moveSpeed;
            };
            this.right = function(){
                x += moveSpeed;
            };
            this.rightEdge = function(){
                return x+width;
            };
            this.leftEdge = function(){
                return x;
            };
            this.getPosition = function(){
                return y+height;
            };
            this.setPosition = function(position){
                y = position-height-speed;
            };

            var constructor = function(){
                height = HEIGHT;
                width = WIDTH;
                speed = SPEED;
                moveSpeed = MOVE_SPEED;
                x = 235;
                y = 0;
            };
            constructor();
        };
    }
);
