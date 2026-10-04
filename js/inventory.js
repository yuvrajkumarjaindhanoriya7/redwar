import {ITEMS} from "./data.js";
export class Inventory{
 constructor(size=40){this.slots=Array.from({length:size},()=>null);this.selected=0}
 add(id,n=1){while(n>0){let s=this.slots.find(x=>x&&x.id===id&&x.n<ITEMS[id].max);if(!s){let i=this.slots.findIndex(x=>!x);if(i<0)return false;s={id,n:0};this.slots[i]=s}let a=Math.min(n,ITEMS[id].max-s.n);s.n+=a;n-=a}return true}
 count(id){return this.slots.reduce((a,x)=>a+(x?.id===id?x.n:0),0)}
 take(id,n){if(this.count(id)<n)return false;for(let s of this.slots){if(s?.id===id){let a=Math.min(n,s.n);s.n-=a;n-=a;if(!s.n)this.slots[this.slots.indexOf(s)]=null;if(!n)break}}return true}
 hasNeeds(needs){return Object.entries(needs).every(([id,n])=>this.count(id)>=n)}
 takeNeeds(needs){if(!this.hasNeeds(needs))return false;for(let [id,n] of Object.entries(needs))this.take(id,n);return true}
 seed(){for(const [id,n] of [["wood",30],["dirt",100],["stone",80],["pick",1],["axe",1],["woodenSword",1],["potion",5]])this.add(id,n)}
}
