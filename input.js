export class InputHandler {
    constructor(game) {
        this.keys = []
        this.bulletKeyCount = 0
        this.game = game

        window.addEventListener('keydown',(e)=>{
            if((e.key=='ArrowLeft' || e.key=='ArrowRight') && !this.keys.includes(e.key)){
                this.keys.push(e.key)
            }
            if(e.key=='Enter'){
                this.game.gameStart = true
            }
        })

        window.addEventListener('keyup',(e)=>{
            if((e.key=='ArrowLeft' || e.key=='ArrowRight') && this.keys.includes(e.key)){
                this.keys.splice(this.keys.indexOf(e.key),1)
            }
            if(e.key=='ArrowUp' && this.game.player.bullets.length < 3){
                this.bulletKeyCount++
            }
        })
    }
}