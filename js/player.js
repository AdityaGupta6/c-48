class Player {
    constructor(){
        this.score=0;
        this.name=null
        this.index=0;
        this.age=null
    }
getPlayerCount(){
    var pcr=database.ref("playerCount");
    pcr.on('value',(data)=>{
        playerCount=data.val();
    })
}   

updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).update({
        name:this.name,
        score:this.score,
        age:this.age
    })
}
static getPlayerInfo(){
    var pir=database.ref("players");
    pir.on('value',(data)=>{
        allPlayers=data.val();
    })

}



}