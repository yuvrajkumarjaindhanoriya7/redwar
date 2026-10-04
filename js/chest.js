export class Chest{constructor(){this.slots=Array(30).fill(null)}open(inv){for(let i=0;i<30;i++){if(!this.slots[i]&&inv.slots[i]){this.slots[i]=inv.slots[i];inv.slots[i]=null}}}}
