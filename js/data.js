export const TILE=24;
export const TILES={
 air:{solid:false,color:"#0000"},grass:{solid:true,color:"#4f9f3f"},dirt:{solid:true,color:"#76502d"},
 stone:{solid:true,color:"#686b73"},sand:{solid:true,color:"#d8c17b"},snow:{solid:true,color:"#e8f4ff"},
 ice:{solid:true,color:"#8dc9e8"},wood:{solid:true,color:"#81502d"},leaves:{solid:false,color:"#39763b"},
 copper:{solid:true,color:"#a86b42"},iron:{solid:true,color:"#aeb6bf"},gold:{solid:true,color:"#e0b52f"},
 crystal:{solid:true,color:"#66d5e8"},brick:{solid:true,color:"#70494b"},hellstone:{solid:true,color:"#9e432c"},
 glass:{solid:true,color:"#a9dce8"},ladder:{solid:false,color:"#b8834d"},tnt:{solid:true,color:"#bd3d32"}
};
export const ITEMS={
 dirt:{name:"Dirt Block",tile:"dirt",icon:"🟫",max:999},stone:{name:"Stone Block",tile:"stone",icon:"⬜",max:999},
 sand:{name:"Sand",tile:"sand",icon:"🟨",max:999},wood:{name:"Wood",tile:"wood",icon:"🪵",max:999},
 glass:{name:"Glass",tile:"glass",icon:"🔹",max:999},ladder:{name:"Ladder",tile:"ladder",icon:"🪜",max:999},
 tnt:{name:"TNT",tile:"tnt",icon:"💣",max:99},copper:{name:"Copper Ore",tile:"copper",icon:"🟠",max:999},
 iron:{name:"Iron Ore",tile:"iron",icon:"⚙️",max:999},gold:{name:"Gold Ore",tile:"gold",icon:"🟡",max:999},
 crystal:{name:"Crystal",tile:"crystal",icon:"💎",max:999},sword:{name:"Forge Sword",icon:"⚔️",max:1,damage:18},
 bow:{name:"Hunter Bow",icon:"🏹",max:1,damage:12},pick:{name:"Steel Pickaxe",icon:"⛏️",max:1},
 axe:{name:"Steel Axe",icon:"🪓",max:1},helmet:{name:"Iron Helm",icon:"🪖",max:1,armor:4},
 chestplate:{name:"Iron Armor",icon:"🛡️",max:1,armor:8},boots:{name:"Iron Boots",icon:"🥾",max:1,armor:3},
 potion:{name:"Healing Potion",icon:"🧪",max:20,heal:35},mana:{name:"Mana Potion",icon:"🔵",max:20,mana:30},
 gel:{name:"Gel",icon:"🟢",max:999},coin:{name:"Coin",icon:"🪙",max:9999},woodenSword:{name:"Wood Sword",icon:"🗡️",max:1,damage:8}
};
export const RECIPES=[
 {out:"sword",n:1,needs:{iron:8,wood:3}}, {out:"pick",n:1,needs:{iron:10,wood:3}},
 {out:"axe",n:1,needs:{iron:8,wood:3}}, {out:"helmet",n:1,needs:{iron:12}},
 {out:"chestplate",n:1,needs:{iron:20}}, {out:"boots",n:1,needs:{iron:8}},
 {out:"glass",n:4,needs:{sand:2}}, {out:"ladder",n:4,needs:{wood:2}},
 {out:"tnt",n:1,needs:{sand:4,gel:2}}, {out:"potion",n:1,needs:{gel:2,crystal:1}}
];
