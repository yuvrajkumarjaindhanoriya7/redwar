import {TILE} from "./data.js";
export class Player{
 constructor(){this.x=180*24;this.y=35*24;this.w=16;this.h=34;this.vx=0;this.vy=0;this.hp=100;this.maxHp=100;this.mana=60;this.maxMana=60;this.grounded=false;this.damage=8;this.armor=0;this.speed=3.4;this.jump=8.5}
 rect(){return {x:this.x,y:this.y,w:this.w,h:this.h}}
 update(world,keys){
  let ax=(keys.a?-1:0)+(keys.d?1:0);this.vx+=ax*.55;this.vx*=.78;this.vx=Math.max(-this.speed,Math.min(this.speed,this.vx));
  if((keys.w||keys[" "])&&this.grounded){this.vy=-this.jump;this.grounded=false}
  this.vy=Math.min(this.vy+.35,10);this.move(world,this.vx,0);this.move(world,0,this.vy)
 }
 move(world,dx,dy){let nx=this.x+dx,ny=this.y+dy;let x0=Math.floor(nx/24),x1=Math.floor((nx+this.w-1)/24),y0=Math.floor(this.y/24),y1=Math.floor((this.y+this.h-1)/24);
  if(dx&&[y0,y1].some(y=>world.solid(dx>0?x1:x0,y))){this.vx=0;return}this.x=nx;
  y0=Math.floor(ny/24);y1=Math.floor((ny+this.h-1)/24);x0=Math.floor(this.x/24);x1=Math.floor((this.x+this.w-1)/24);
  if(dy&&[x0,x1].some(x=>world.solid(x,dy>0?y1:y0))){if(dy>0)this.grounded=true;this.vy=0;return}this.grounded=false;this.y=ny
 }
}
