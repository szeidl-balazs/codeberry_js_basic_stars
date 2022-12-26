function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    function star (positionX, positionY, size) {

        context.beginPath();
        
        context.moveTo(positionX,positionY); /*bal felső csúcs kiindulás*/
        context.lineTo(positionX + size, positionY); /*jobb felső csúcs*/
        context.lineTo(positionX + size * .15, positionY + size * .5); /*bal alsó csúcs*/
        
        context.lineTo(positionX + size * .5, positionY - size * .4); /*felső csúcs*/
        context.lineTo(positionX + size - size * .15, positionY + size * .5); /*jobb alsó csúcs*/
        context.lineTo(positionX,positionY); /*bal felső csúcs kiindulás*/

        
        

        context.fillStyle = 'rgb(233,159,184)';
        context.fill();
        context.strokeStyle = 'rgb(233,159,184)';
        context.stroke();

    }

    star(40, 50, 75);
    star(130, 120, 100);
    star(250, 220, 150);

}

window.addEventListener("load", pageLoaded);