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

}