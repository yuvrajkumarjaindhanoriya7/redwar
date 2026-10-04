export function setupControls(game){
 const keys=game.keys;addEventListener("keydown",e=>{keys[e.key.toLowerCase()]=true;if(e.key==="Escape")game.togglePause();if(e.key.toLowerCase()==="e")game.toggleInventory();if(e.key.toLowerCase()==="c")game.toggleCrafting()});
 addEventListener("keyup",e=>keys[e.key.toLowerCase()]=false);
 game.canvas.addEventListener("mousedown",e=>game.action(e));
 addEventListener("wheel",e=>{game.inventory.selected=(game.inventory.selected+(e.deltaY>0?1:-1)+10)%10;game.ui()},{passive:true});
}
