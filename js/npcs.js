export class NPCManager{
 constructor(){this.list=[]}
 spawn(world,x,y,type="Guide"){this.list.push({x:x*24,y:y*24,w:18,h:34,type,hp:100,dir:1,shop:type==="Merchant",talk:0})}
 update(world,player){for(const n of this.list){let d=player.x-n.x;if(Math.abs(d)<250)n.x+=Math.sign(d)*.25;n.y+=4;while(world.solid(Math.floor(n.x/24),Math.floor(n.y/24)))n.y-=1}}
 draw(ctx,cam){for(const n of this.list){ctx.fillStyle=n.type==="Merchant"?"#e8b34d":"#67c9ff";ctx.fillRect(n.x-cam.x,n.y-cam.y,18,34);ctx.fillStyle="#f2c6a0";ctx.fillRect(n.x-cam.x+2,n.y-cam.y-9,14,12);}}
}
