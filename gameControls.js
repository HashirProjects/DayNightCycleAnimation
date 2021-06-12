let day = {

    sun: document.getElementById('sun'),
    x:0,

    moveSun: function () {
        this.x = this.x + 1;
        y= parseInt((1/625)*this.x*this.x - (8/5)*this.x + 400);
        sun.style.left = this.x + "px";
        sun.style.top = y + "px";
    
        if (parseInt(sun.style.left) > 975) {
            sun.style.left=0;
            sun.style.top=400;
            this.x=0;
        }
    },

    endlessLoop: function () {
        setInterval(() => {
            this.moveSun();
        }, 16);
    }

}

day.endlessLoop();

