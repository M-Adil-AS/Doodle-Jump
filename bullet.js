export class Bullet {
    constructor(player) {
        this.player = player
        this.sizeModifier = 0.1
        this.width = 160 * this.sizeModifier
        this.height = 512 * this.sizeModifier
        this.x = this.player.x + (this.player.width/2) - (this.width/2)
        this.y = this.player.y + (this.player.height/2) - (this.height/2)
        this.image = document.querySelector('#bullet')
        this.vy = -15
        this.markedForDeletion = false
        this.audio = new Audio('sound effects/bullet.mp3')
        this.audio.play()
    }

    update() {
        this.y += this.vy
        if(this.y < -this.height){
            this.markedForDeletion = true
        }
    }

    draw(context) {              
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}