export class EnemyManager{
 constructor(){this.list=[];this.timer=0}
 spawn(x,y,type="Slime"){let data={Slime:[28,12,"#55c95a"],CaveBat:[22,16,"#9c70cf"],Skeleton:[55,18,"#ddd"],Demon:[100,28,"#d64b45"]}[type]||[30,10,"#f44"];this.list.push({x,y,w:20,h:20,hp:data[0],max:data[0],damage:data[1],color:data[2],type,vy:0})}
 update(world,player){this.timer++;if(this.timer%180===0&&this.list.length<18)this.spawn(player.x+(Math.random()-.5)*700,player.y-150,Math.random()<.7?"Slime":"CaveBat");
  for(const e of this.list){e.x+=Math.sign(player.x-e.x)*.45;e.vy=Math.min(e.vy+.3,7);e.y+=e.vy;if(world.solid(Math.floor(e.x/24),Math.floor(e.y/24))){e.vy=-4}if(Math.abs(e.x-player.x)<20&&Math.abs(e.y-player.y)<30)player.hp-=.04}}
 draw(ctx,cam){for(const e of this.list){ctx.fillStyle=e.color;ctx.fillRect(e.x-cam.x,e.y-cam.y,e.w,e.h);ctx.fillStyle="#111";ctx.fillRect(e.x-cam.x+5,e.y-cam.y+5,3,3);ctx.fillRect(e.x-cam.x+13,e.y-cam.y+5,3,3)}}
}
