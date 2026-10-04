import {TILE,TILES} from "./data.js";
export class Engine{
 constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext("2d");this.cam={x:0,y:0};this.resize();addEventListener("resize",()=>this.resize())}
 resize(){this.canvas.width=innerWidth;this.canvas.height=innerHeight}
 drawWorld(world,player,npcs,enemies,boss){let c=this.ctx;c.clearRect(0,0,this.canvas.width,this.canvas.height);this.cam.x=player.x-this.canvas.width/2;this.cam.y=player.y-this.canvas.height/2;c.fillStyle="#79c8f0";c.fillRect(0,0,c.canvas.width,c.canvas.height);
  let x0=Math.max(0,Math.floor(this.cam.x/24)-1),x1=Math.min(world.w,Math.ceil((this.cam.x+innerWidth)/24)+1),y0=Math.max(0,Math.floor(this.cam.y/24)-1),y1=Math.min(world.h,Math.ceil((this.cam.y+innerHeight)/24)+1);
  for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){let id=world.get(x,y);if(id==="air")continue;c.fillStyle=TILES[id].color;c.fillRect(x*24-this.cam.x,y*24-this.cam.y,24,24);if(["grass","stone","dirt"].includes(id)){c.strokeStyle="#0002";c.strokeRect(x*24-this.cam.x,y*24-this.cam.y,24,24)}}
  npcs.draw(c,this.cam);enemies.draw(c,this.cam);boss.draw(c,this.cam);
  c.fillStyle="#f0c39a";c.fillRect(player.x-this.cam.x,player.y-this.cam.y,player.w,player.h);c.fillStyle="#3b61d1";c.fillRect(player.x-this.cam.x,player.y-this.cam.y+12,player.w,22)
 }
}
