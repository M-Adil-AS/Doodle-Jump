export class Enemy {
    constructor(game) {
        this.game = game
        this.sizeModifier = 0.35
        this.width = 238 * this.sizeModifier
        this.height = 240 * this.sizeModifier
        this.x = Math.floor(Math.random() * ((this.game.width-this.width) - 0 + 1)) + 0
        this.y = Math.floor(Math.random() * ((-this.height) - (-this.game.height) + 1)) + (-this.game.height)
        this.image = document.querySelector('#virus')
        this.vx = this.game.object_vx
        this.audio = new Audio('sound effects/virus.mp3')
        this.audio.loop = true
        this.audio.play()
        this.markedForDeletion = false
    }

    update() {
        if(this.x < 0 || this.x > this.game.width-this.width) this.vx *= -1
        this.x += this.vx
        this.y += this.game.vy

        if(this.y >= this.game.height){
            this.audio.pause()
            this.markedForDeletion = true
        }

        let bullets = this.game.player.bullets
        bullets.forEach(bullet => {
            if(bullet.x < this.x + this.width && bullet.x + bullet.width > this.x && bullet.y < this.y + this.height && bullet.height + bullet.y > this.y){
                this.audio.pause()
                this.markedForDeletion = true
            }
        })
    }

    draw(context) {              
        context.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}