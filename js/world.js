import {TILE,TILES} from "./data.js";
export class World{
 constructor(w=360,h=150){this.w=w;this.h=h;this.tiles=Array.from({length:h},()=>Array(w).fill("air"));this.spawn={x:Math.floor(w/2),y:45};this.generate()}
 generate(){
  let ground=48;
  for(let x=0;x<this.w;x++){ground+=Math.round((Math.random()-.5)*2);ground=Math.max(40,Math.min(58,ground));
   for(let y=ground;y<this.h;y++){let id=y===ground?"grass":y<ground+5?"dirt":"stone";if(y>this.h-15)id="hellstone";this.tiles[y][x]=id}
   if(Math.random()<.05&&ground>43){this.tiles[ground-1][x]="wood";this.tiles[ground-2][x]="wood"}
  }
  for(let i=0;i<700;i++){let x=3+Math.random()*(this.w-6),y=55+Math.random()*(this.h-35),rx=2+Math.random()*7,ry=1+Math.random()*4;
   for(let yy=Math.floor(y-ry);yy<=y+ry;yy++)for(let xx=Math.floor(x-rx);xx<=x+rx;xx++)if(xx>1&&xx<this.w-2&&yy>50&&yy<this.h-16&&((xx-x)/rx)**2+((yy-y)/ry)**2<1)this.tiles[yy][xx]="air";
  }
  for(let i=0;i<800;i++){let x=Math.floor(3+Math.random()*(this.w-6)),y=Math.floor(55+Math.random()*(this.h-25));if(this.tiles[y][x]==="stone"){let r=Math.random();this.tiles[y][x]=r<.4?"copper":r<.7?"iron":r<.9?"gold":"crystal"}}
  for(let x=8;x<this.w-8;x+=Math.floor(35+Math.random()*55))this.makeVillage(x,45);
  this.makeDungeon(this.w-55,35);
 }
 makeVillage(x,y){for(let xx=x;xx<x+12;xx++)for(let yy=y-1;yy<y+6;yy++)if(xx>=0&&xx<this.w&&yy>=0&&yy<this.h)this.tiles[yy][xx]="wood";for(let xx=x+1;xx<x+11;xx++)this.tiles[y-2][xx]="wood";this.tiles[y][x+5]="air"}
 makeDungeon(x,y){for(let xx=x;xx<x+25;xx++)for(let yy=y;yy<y+30;yy++){if(xx===x||xx===x+24||yy===y||yy===y+29)this.tiles[yy][xx]="brick";else this.tiles[yy][xx]="air"}}
 solid(tx,ty){if(tx<0||ty<0||tx>=this.w||ty>=this.h)return true;return TILES[this.tiles[ty][tx]]?.solid??false}
 get(tx,ty){return this.tiles[ty]?.[tx]??"air"}
 set(tx,ty,id){if(tx>=0&&ty>=0&&tx<this.w&&ty<this.h)this.tiles[ty][tx]=id}
}
