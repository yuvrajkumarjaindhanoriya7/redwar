export class BossManager{
 constructor(){this.active=null}
 summon(name,x,y){if(this.active)return;this.active={name,x,y,w:70,h:70,hp:3500,max:3500,vx:1,phase:1}}
 update(player){let b=this.active;if(!b)return;b.x+=Math.sign(player.x-b.x)*.8;b.y+=Math.sin(Date.now()/500)*1;if(b.hp<1750)b.phase=2;if(Math.abs(b.x-player.x)<75&&Math.abs(b.y-player.y)<80)player.hp-=.18}
 draw(ctx,cam){let b=this.active;if(!b)return;ctx.fillStyle=b.phase===2?"#ff4bd8":"#9c5cff";ctx.beginPath();ctx.arc(b.x-cam.x,b.y-cam.y,35,0,Math.PI*2);ctx.fill();ctx.fillStyle="#fff";ctx.fillRect(b.x-cam.x-20,b.y-cam.y-55,40,6);ctx.fillStyle="#e33";ctx.fillRect(b.x-cam.x-20,b.y-cam.y-55,40*(b.hp/b.max),6)}
}
