let dayNightCycle = {

    sun: document.getElementById('sun'),
    game: document.getElementById('gameWindow'),
    x:0,
    currentColor: "yellow",

    moveSun: function () {
        this.x = this.x + 1;
        y= parseInt((1/625)*this.x*this.x - (8/5)*this.x + 400);
        this.sun.style.left = this.x + "px";
        this.sun.style.top = y + "px";
    
        if (this.x > 975) {

            if (this.currentColor == "yellow") {
                this.currentColor = "gray";
                this.game.style.backgroundColor = "black";
            } else {
                this.currentColor = "yellow";
                this.game.style.backgroundColor = "lightblue";
            }

            this.sun.style.backgroundColor = this.currentColor;

            this.sun.style.left=0;
            this.sun.style.top=400;
            this.x=0;
        }
    },

    endlessLoop: function () {
        setInterval(() => {
            this.moveSun();
        }, 16);
    }
}

dayNightCycle.endlessLoop();

