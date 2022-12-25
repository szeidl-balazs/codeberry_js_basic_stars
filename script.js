function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    function star (positionX, positionY, size) {

        context.beginPath();
        context.moveTo(positionX,positionY);
        context.lineTo(positionX + size * .5,positionY - size * .4);
        context.lineTo(positionX,positionY);

        context.fillStyle = 'rgb(233,159,184)';
        context.fill();
        context.strokeStyle = 'rgb(233,159,184)';
        context.stroke();

    }

    
    star(250, 220, 150);

}

window.addEventListener("load", pageLoaded);