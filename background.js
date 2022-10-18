export class Background {
    constructor(game) {
        this.game = game
        this.width = this.game.width
        this.height = this.game.height
        this.image = document.querySelector('#bg')
        this.x = 0
        this.y = 0
    }

    update(){
        if(this.y > this.height){
            this.y = 0
            this.game.add_platforms(-this.height, -15)
            this.game.add_broken_platforms(-this.height, -15)
            this.game.change_difficulty()

            if(Math.random() < this.game.enemyChance/100){
                this.game.add_enemy()
            }
        } 
        else{
            this.y += this.game.vy
            this.game.score += Math.trunc(this.game.vy * 0.1)
        }
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
        context.drawImage(this.image, this.x, this.y - this.height, this.width, this.height)
    }
}