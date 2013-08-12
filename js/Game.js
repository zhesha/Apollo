define('Game',
    ['Platform', 'Player'],
    function (Platform, Player) {
        return function () {
            var
                LEFT_MOVE = 1,
                RIGHT_MOVE = 2;
            var
                ctx,
                interval,
                that = this,
                events = [],
                platforms = [],
                player;

            this.start = function () {
                interval = setInterval(loop, 20);

                var example = document.getElementById("field");
                example.width = 480;
                example.height = 640;
                ctx = example.getContext('2d');

                player = new Player();

                document.addEventListener('keypress', keyPress)
                document.addEventListener('keyup', keyUp)
            };

            var loop = function(){
                eventsProcessing();

                //world change
                generatePlatforms();
                platformsChange();

                player.move();

                //rendering
                clear();
                platformsRender();
                player.render(ctx);
            };
            var keyPress = function(e){
                switch (e.keyCode) {
                    case 37:
                        events[LEFT_MOVE] = true;
                        break;
                    case 39:
                        events[RIGHT_MOVE] = true;
                        break;
                    }
            };
            var keyUp = function(e){
                switch (e.keyCode) {
                    case 37:
                        events[LEFT_MOVE] = false;
                        break;
                    case 39:
                        events[RIGHT_MOVE] = false;
                        break;
                    }
            };
            var eventsProcessing = function(e){
                if(events[LEFT_MOVE])
                    player.left();
                if(events[RIGHT_MOVE])
                    player.right();
                //events = [];
            };

            var randomised = 0;
            var generatePlatforms = function(){
                if(randomised == 0){
                    platforms.push(new Platform(Math.floor(Math.random()*480)));
                    randomised = 50;
                }
                else{
                    randomised--;
                }
            };
            var platformsChange = function(){
                var i;
                for(i in platforms)
                    if(platforms[i].move(player) === false)
                        platforms.splice(i, 1);
            };
            var platformsRender = function(){
                var i;
                for(i in platforms)
                    platforms[i].render(ctx);
            };
            var clear = function(){
                ctx.fillStyle="#000000";
                ctx.fillRect(0, 0, 480, 640);
                ctx.fillStyle="#FFFFFF";
                ctx.fillRect(2, 2, 476, 636);
            };
        };
    }
);
