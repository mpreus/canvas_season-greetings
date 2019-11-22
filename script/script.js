document.addEventListener("DOMContentLoaded", init);
function init() {

	let canvas = document.getElementById("canvasElement");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.backgroundColor = "#fff";
        let c = canvas.getContext("2d");

    class Circle {
        /* circle pattern: arc(x, y, radius, start, end) */
        constructor(x, y, dx, dy, radius, a) { 
          	this.x = x;
          	this.y = y;
          	this.dx = dx;
          	this.dy = dy;
          	this.radius = radius;
          	this.color = `rgba(255, 255, 255, ${a})`
        } 
        /* drawing circles - snow particles */
        draw() {  
          	c.beginPath();
          	c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          	c.fillStyle = this.color;
          	c.fill();
        }
        /* changing direction when the particles reach screen border */
        update() { 	
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
              this.dx = -this.dx
            }
            if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
              this.dy = -this.dy
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    let circleArray = [];
    /* building particles */
    for (let i = 0; i < 200; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        /* setting the speed of movement */
        let dx = (Math.random() - 0.5) * 6;
        let dy = (Math.random() - 0.5) * 6;
        /* setting radius of the snow particles */
        let radius = (Math.random() * 4) + 1;
        let a = Math.random();
        /* new particles (of various diameter) to array */
        circleArray.push( new Circle(x, y, dx, dy, radius, a) );
    }

    function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = "#040c29"; /* color of night */
        c.fillRect(0, 0, window.innerWidth, window.innerHeight)

        /* greetings in two lines */
        c.font = "42px Arial";
        c.fillStyle = "rgba(255, 255, 255, 0.7)";
        c.fillText("Merry", 160, window.innerHeight - 620);
        c.font = "44px Arial";
        c.fillStyle = "rgba(150, 5, 5)";
        c.fillText("Christmas!", 160, window.innerHeight - 560);

        /* spruce tree */
        c.beginPath();
        c.moveTo(window.innerWidth / 2 - 150, window.innerHeight); /* width to the left side */
        c.lineTo(window.innerWidth / 2, window.innerHeight - 450); /* height of the mountain */
        c.lineTo(window.innerWidth / 2 + 150, window.innerHeight); /* width to the right side */
        c.fillStyle = "#022104"; /* color of the tree */
        c.fill();

        /* snowy pick */
        c.beginPath();
        c.moveTo(window.innerWidth / 2 - 96, window.innerHeight - 160);
        c.lineTo(window.innerWidth / 2 - 10, window.innerHeight - 120);
        c.lineTo(window.innerWidth / 2 + 7, window.innerHeight - 160);
        c.lineTo(window.innerWidth / 2 + 60, window.innerHeight - 120);
        c.lineTo(window.innerWidth / 2 + 83, window.innerHeight - 200);
        c.lineTo(window.innerWidth / 2, window.innerHeight - 450);
        c.fillStyle = "rgba(288, 288, 288, 0.5)"; /* color of the snow */
        c.fill();

        circleArray.forEach(function(circle) {
        	circle.update();
        })
    }

    animate();
}