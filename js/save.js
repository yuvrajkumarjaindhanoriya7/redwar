export function saveGame(game){localStorage.setItem("yjd-terraforge-save",JSON.stringify({mode:game.mode,world:game.world.tiles,player:game.player,inventory:game.inventory.slots}))}
export function loadGame(){try{return JSON.parse(localStorage.getItem("yjd-terraforge-save"))}catch{return null}}
