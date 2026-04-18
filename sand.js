//base syntax by sightnado
/*elements.warm = {
    color: "#7fff7f",
    tool: function(pixel) {
        pixel.temp = 20;
		pixelTempCheck(pixel)
    },
    category: "tools",
};*/
//warm is redundant due to room_temp
elements.ultraheat = {
    color: ["#ff0000", "#ffbf4f", "#ff0000", "#ffbf4f", "#ff0000", "#ffbf4f"],
    tool: function(pixel) {
        if(shiftDown) { pixel.temp += (350 * (1 + shiftDown)) } else { pixel.temp += 350 }
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.ultracool = {
    color: ["#0000ff", "#4fbfff", "#0000ff", "#4fbfff", "#0000ff", "#4fbfff"],
    tool: function(pixel) {
        if(shiftDown) { pixel.temp -= (350 * (1 + shiftDown)) } else { pixel.temp -= 350 }
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.na_ntemp = {
    color: ["#000000", "#ff00ff", "#000000", "#ff00ff"],
    tool: function(pixel) {
        pixel.temp = NaN;
		pixelTempCheck(pixel)
    },
    category: "tools",
};
elements.inftemp = {
    color: ["#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff", "#ff0000", "#ffffff"],
    tool: function(pixel) {
        pixel.temp = Infinity;
		pixelTempCheck(pixel)
    },
    category: "tools",
};





async function _weaponsjsprompt(message, defaultValue = "") {


    return new Promise(resolve => {


        promptInput(message, (result) => {


            resolve(result);


        }, "weapons.js is asking you...", defaultValue);


    })
}
elements.tsar_bomba = {
    color: "#524C41",
    behavior: [
        "XX|EX:150>plasma|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:150>plasma|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.little_boy = {
    color: "#F5F5DC",
    behavior: [
        "XX|EX:20>plasma|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:70>plasma,plasma,plasma,plasma,radiation,fallout|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 500,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.fat_man = {
    color: ["#ffff00","#333333"],
    behavior: [
        "XX|EX:28>plasma|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:98>plasma,plasma,plasma,plasma,radiation,fallout|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 1000,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.self_propelled_bomb = {
    color: "#71797E",
    tick: function(pixel) {
        if ((pixel.temp > 1000 || pixel.charge) && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
        if (pixel.burning) {
            if (!tryMove(pixel, pixel.x, pixel.y-1)) {
                // tryMove again to the top left or top right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y-1);
            }
            if (pixelTicks-pixel.burnStart > 50 && Math.random() < 0.1) {
                explodeAt(pixel.x, pixel.y, 10, "bomb");
            }
        }
        else {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                // tryMove again to the bottom left or bottom right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y+1);
            }
        }
        doDefaults(pixel);
    },
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "weapons"
},
elements.left_missile = {
    color: "#4c4e42",
    behavior: [
        "M2|EX:10|XX",
        "M1 AND EX:10|XX|EX:10",
        "M2|EX:10|XX",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.right_missile = {
    color: "#4c4e42",
    behavior: [
        "XX|EX:10|M2",
       "EX:10|XX|M1 AND EX:10",
        "XX|EX:10|M2",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.up_missile = {
    color: "#4c4e42",
    behavior: [
        "M2|M1 AND EX:10|M2",
       "EX:10|XX|EX:10",
        "XX|EX:10|XX",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.cluster_munition = {
    color: "#444444",
    behavior: [
        "XX|EX:10>smoke,smoke,smoke,smoke,bomb,bomb|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:10>smoke,smoke,smoke,smoke,bomb,cluster_munition|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
    elements.RL_cluster_munition = {
    color: "#444444",
    behavior: [
        "XX|XX|XX",
        "CRcluster%20|XX|CR:cluster%20",
        "M2|M1|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
    elements.cluster = {
    color: "#444444",
    behavior: [
        "XX|EX:10%10|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:10%10|M2",
    ],
    category: "ammunition",
    state: "solid",
    density: 1300,
    hidden: true,
},
    elements.machine_gun_left = {
    color: "#C0C0C0",
    behavior: [
        "XX|XX|XX",
        "CR:left_bullet|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
    elements.machine_gun_right = {
    color: "#C0C0C0",
    behavior: [
        "XX|XX|XX",
        "XX|XX|CR:right_bullet",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
elements.left_bullet = {
    color: "#4c4e42",
    behavior: [
        "M2|XX|XX",
        "M1 AND DB|XX|XX",
        "M2|XX|XX",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.right_bullet = {
    color: "#4c4e42",
    behavior: [
        "XX|XX|M2",
        "XX|XX|M1 AND DB",
        "XX|XX|M2",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.e_gun_left = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "CR:left_bullet|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 1,
    density: 1300,
},
    elements.e_gun_right = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "XX|XX|CR:right_bullet",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 1,
    density: 1300,
},
    elements.auto_rocket_launcher_left = {
    color: "#C0C0C0",
    behavior: [
        "XX|XX|XX",
        "CR:left_rocket|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
    elements.auto_rocket_launcher_right = {
    color: "#C0C0C0",
    behavior: [
        "XX|XX|XX",
        "XX|XX|CR:right_rocket",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
},
elements.left_rocket = {
    color: "#4c4e42",
    behavior: [
        "XX|XX|XX",
        "M1 AND EX:10|XX|XX",
        "XX|XX|XX",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.right_rocket = {
    color: "#4c4e42",
    behavior: [
        "XX|XX|XX",
        "XX|XX|M1 AND EX:10",
        "XX|XX|XX",
    ],
    state: "solid",
    category:"ammunition",
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.e_rocket_launcher_left = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "CR:left_rocket|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 1,
    density: 1300,
},
    elements.e_rocket_launcher_right = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "XX|XX|CR:right_rocket",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 1,
    density: 1300,
},
elements.gaster_blast_left = {
    color: "#c5e9f0",
    behavior: [
        "DL|DL|XX",
        "DL AND CR:gaster_blast_left%5|XX|XX",
        "DL|DL|XX",
    ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x-2, pixel.y)) {
                if (!isEmpty(pixel.x-2, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x-2][pixel.y];
                    if (newPixel.element === "gaster_blast_left") { break; }
                    if (elements[newPixel.element].state == "gas") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "energy",
    state: "gas",
    insulate: true,
},
elements.gaster_blast_right = {
    color: "#c5e9f0",
    behavior: [
        "XX|DL|DL",
        "XX|XX|DL AND CR:gaster_blast_right%5",
        "XX|DL|DL",
    ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x+2, pixel.y)) {
                if (!isEmpty(pixel.x+2, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x+2][pixel.y];
                    if (newPixel.element === "gaster_blast_right") { break; }
                    if (elements[newPixel.element].state == "gas") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "energy",
    state: "gas",
    insulate: true,
},
    elements.gaster_blaster_left = {
    color: "#ffffff",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "CR:gaster_blast_left|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 20,
},
    elements.gaster_blaster_right = {
    color: "#ffffff",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "XX|XX|CR:gaster_blast_right",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    conduct: 20,
},
elements.fast_bullet_left = {
    color: "#4c4e42",
    behavior: [
        "XX|DL|XX",
        "XX|XX|XX",
        "XX|DL|XX",
    ],
tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x-3, pixel.y)) {
                if (!isEmpty(pixel.x-3, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x-3][pixel.y];
                    if (newPixel.element === "fast_bullet_left") { break; }
                    if (elements[newPixel.element].state == "solid") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "ammunition",
    state: "solid",
    insulate: true,
},
elements.fast_bullet_right = {
    color: "#4c4e42",
    behavior: [
        "XX|DL|XX",
        "XX|XX|XX",
        "XX|DL|XX",
    ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x+3, pixel.y)) {
                if (!isEmpty(pixel.x+3, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x+3][pixel.y];
                    if (newPixel.element === "fast_bullet_right") { break; }
                    if (elements[newPixel.element].state == "solid") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "ammunition",
    state: "solid",
    insulate: true,
},
elements.flak_cannon = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|CR:flak|XX",
        "XX|XX|XX",
        "XX|XX|XX",
    ],
    category: "weapons",
    state: "solid",
    density: 1300,
    conduct: 1,
},
    elements.flak = {
    color: "#f0f0f0",
    tick: function(pixel) {
        if ((pixel.temp > 10 || pixel.charge) && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
        if (pixel.burning) {
            if (!tryMove(pixel, pixel.x, pixel.y-1)) {
                // tryMove again to the top left or top right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y-1);
            }
            if (pixelTicks-pixel.burnStart > 50 && Math.random() < 0.005) {
                explodeAt(pixel.x, pixel.y, 10, "flak_shrapnel");
            }
        }
        else {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                // tryMove again to the bottom left or bottom right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y+1);
            }
        }
        doDefaults(pixel);
    },
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "ammunition"
},
    elements.flak_shrapnel = {
    color: "#71797E",
       behavior: [
        "XX|XX|XX",
        "XX|EX:5 %10|XX",
        "M2|M1|M2",
    ],
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "ammunition"
},
elements.fighter_jet_left = {
    color: "#bcc6cc",
    behavior: [
        "M1%0.2|M2%0.005 AND EX:5>metal_scrap|M2%0.005 AND EX:5>metal_scrap",
        "M1 AND CR:fast_bullet_left|XX|CR:smoke AND EX:5>metal_scrap",
        "M1%0.2|M2%0.005 AND EX:5>metal_scrap|M2%0.005 AND EX:5>metal_scrap",
    ],
tick: function(pixel) {
    for (var i=0; i<2; i++) {
            if (!tryMove(pixel, pixel.x-1, pixel.y)) {
                if (!isEmpty(pixel.x-1, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x-1][pixel.y];
                    if (newPixel.element === "fast_bullet_left") { break; }
                    if (elements[newPixel.element].state == "solid") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "aircrafts",
    breakInto: "metal_scrap"
 },
elements.fighter_jet_right = {
    color: "#bcc6cc",
    behavior: [
        "M2%0.005 AND EX:5>metal_scrap|M2%0.005 AND EX:5>metal_scrap|M1%0.2",
        "CR:smoke AND EX:5>metal_scrap|XX|M1 AND CR:fast_bullet_right",
        "M2%0.005 AND EX:5>metal_scrap|M2%0.005 AND EX:5>metal_scrap|M1%0.2",
    ],
tick: function(pixel) {
    for (var i=0; i<2; i++) {
            if (!tryMove(pixel, pixel.x+1, pixel.y)) {
                if (!isEmpty(pixel.x+1, pixel.y,true)) {
                    var newPixel = pixelMap[pixel.x+1][pixel.y];
                    if (newPixel.element === "fast_bullet_right") { break; }
                    if (elements[newPixel.element].state == "solid") {
                        if (Math.random() > (elements[newPixel.element].hardness || 0)) {
                            if (elements[newPixel.element].breakInto) {
                                breakPixel(newPixel);
                            }
                            else {
                                deletePixel(newPixel.x, newPixel.y);
                            }}}}
                deletePixel(pixel.x,pixel.y);
                break;
            }}},
    category: "aircrafts",
    breakInto: "metal_scrap"
 },
elements.machine_for_throwing_bombs_at_you_left = {
    color: "#524c41",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "CR:bombs_for_throwing_at_you_left|XX|XX",
        "XXXX|XX",
    ],
    category: "weapons",
    conduct: 1
},
elements.bombs_for_throwing_at_you_left = {
    color: "#524c41",
    category: "ammunition",
    behavior: [
        "XX|EX:10>bomb|XX",
        "XX|XX|XX",
        "M1 AND EX:10>bomb|M1%10 AND EX:10>bomb|XX",
    ],
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
}
elements.machine_for_throwing_bombs_at_right = {
    color: "#524c41",
    behavior: behaviors.WALL,
    behaviorOn: [
        "XX|XX|XX",
        "XX|XX|CR:bombs_for_throwing_at_you_right",
        "XXXX|XX",
    ],
    category: "weapons",
    conduct: 1
},
elements.bombs_for_throwing_at_you_right = {
    color: "#524c41",
    category: "ammunition",
    behavior: [
        "XX|EX:10>bomb|XX",
        "XX|XX|XX",
        "XX|M1%10 AND EX:10>bomb|M1 AND EX:10>bomb",
    ],
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.energized_orb_left = {
    color: ["#e0e000","#f3f300"],
    category: "energy",
    behavior: [
        "XX|EX:50>electric|XX",
        "M1 AND EX:50>electric|XX|EX:50>electric",
        "XX|EX:50>electric|XX"
    ],
    state: "gas",
},
elements.energized_orb_right = {
    color: ["#e0e000","#f3f300"],
    category: "energy",
    behavior: [
        "XX|EX:50>electric|XX",
        "EX:50>electric|XX|M1 AND EX:50>electric",
        "XX|EX:50>electric|XX"
    ],
    state: "gas",
},
elements.fast_bomb = {
    color: "#524c41",
    category: "weapons",
    state: "solid",
    behavior: [
        "XX|EX:10>explosion|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:10>explosion|M2",
        ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                if (!isEmpty(pixel.x, pixel.y+1,true)) {
                    }
                }
            }
        },
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.liquid_bomb = {
    color: "#524c41",
    tick: function(pixel) {
                if (pixel.start === pixelTicks) {return}
                if (pixel.charge && elements[pixel.element].behaviorOn) {
                    pixelTick(pixel)
                }
                if (elements[pixel.element].viscosity && (!((Math.random()*100) < 100 / Math.pow(elements[pixel.element].viscosity, 0.25)))) {
                    var move1Spots = [
                        [pixel.x, pixel.y+1]
                    ]
                }
                else {
                    var move1Spots = [
                        [pixel.x+1, pixel.y+1],
                        [pixel.x, pixel.y+1],
                        [pixel.x-1, pixel.y+1],
                    ]
                }
                var moved = false;
                for (var i = 0; i < move1Spots.length; i++) {
                    var coords = move1Spots[Math.floor(Math.random()*move1Spots.length)];
                    if (tryMove(pixel, coords[0], coords[1])) { moved = true; break; }
                    else { move1Spots.splice(move1Spots.indexOf(coords), 1); }
                }
                if (!moved) {
                    if (elements[pixel.element].viscosity===undefined || !(!((Math.random()*100) < 100 / Math.pow(elements[pixel.element].viscosity, 0.25)))) {
                        if (Math.random() < 0.5) {
                            if (!tryMove(pixel, pixel.x+1, pixel.y)) {
                                tryMove(pixel, pixel.x-1, pixel.y);
                            }
                        } else {
                            if (!tryMove(pixel, pixel.x-1, pixel.y)) {
                                tryMove(pixel, pixel.x+1, pixel.y);
                            }
                        }
                    }
                }
                doDefaults(pixel);
            },
    category: "weapons",
    state: "liquid",
    behavior: [
        "XX|EX:10>explosion|XX",
        "XX|XX|XX",
        "XX|EX:10>explosion|XX",
        ],
    density: 1300,
    excludeRandom: true,
    ignore: "gas_bomb",
    cooldown: defaultCooldown
},
elements.gas_bomb = {
    color: "#524c41",
    tick: function(pixel) {
                if (pixel.start === pixelTicks) {return}
                if (pixel.charge && elements[pixel.element].behaviorOn) {
                    pixelTick(pixel)
                }
                var move1Spots = [
                    [pixel.x, pixel.y+1],
                    [pixel.x, pixel.y-1],
                    [pixel.x+1, pixel.y],
                    [pixel.x-1, pixel.y],
                ]
                var moved = false;
                for (var i = 0; i < move1Spots.length; i++) {
                    var coords = move1Spots[Math.floor(Math.random()*move1Spots.length)];
                    if (tryMove(pixel, coords[0], coords[1])) { moved = true; break; }
                    else { move1Spots.splice(move1Spots.indexOf(coords), 1);}
                }
                if (!moved) {
                    var move2Spots = [
                        [pixel.x+1, pixel.y+1],
                        [pixel.x-1, pixel.y+1],
                        [pixel.x+1, pixel.y-1],
                        [pixel.x-1, pixel.y-1],
                    ]
                    for (var i = 0; i < move2Spots.length; i++) {
                        var coords = move2Spots[Math.floor(Math.random()*move2Spots.length)];
                        if (tryMove(pixel, coords[0], coords[1])) { break; }
                        else { move2Spots.splice(move2Spots.indexOf(coords), 1); }
                    }
                }
                doDefaults(pixel);
            },
    category: "weapons",
    state: "gas",
    behavior: [
        "XX|EX:10>explosion|XX",
        "XX|XX|XX",
        "XX|EX:10>explosion|XX",
        ],
    density: 1300,
    excludeRandom: true,
    ignore: "liquid_bomb",
    cooldown: defaultCooldown
}
elements.tank_left = {
    color: "#bcc6cc",
    category: "vehicles",
    behavior: [
        "M2 AND CR:fast_bullet_left|XX|XX",
        "M1|XX|XX",
        "M1|M1|XX",
    ],
},
elements.tank_right = {
    color: "#bcc6cc",
    category: "vehicles",
    behavior: [
        "XX|XX|M2 AND CR:fast_bullet_right",
        "XX|XX|M1",
        "XX|M1|M1",
    ],
},
elements.realistic_missile_left = {
    color: "#524c41",
    category: "weapons",
    state: "solid",
    behavior: [
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|M2 AND EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|M1 AND EX:20>missile_shrapnel|XX|EX:20>missile_shrapnel|CR:smoke AND EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|M2 AND EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
    ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x-1, pixel.y)) {
                if (!isEmpty(pixel.x-1, pixel.y,true)) {
                    }
                }
            }
        },
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.realistic_missile_right = {
    color: "#524c41",
    category: "weapons",
    state: "solid",
    behavior: [
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|M2 AND EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|CR:smoke AND EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX|M1|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|M2 AND EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
    ],
    tick: function(pixel) {
        for (var i=0; i<3; i++) {
            if (!tryMove(pixel, pixel.x+1, pixel.y)) {
                if (!isEmpty(pixel.x+1, pixel.y,true)) {
                    }
                }
            }
        },
    density: 1300,
    excludeRandom: true,
    cooldown: defaultCooldown
},
    elements.missile_shrapnel = {
    color: "#71797E",
       behavior: [
        "XX|XX|XX",
        "XX|EX:5 %20|XX",
        "M2%20|M1%20|M2%20",
    ],
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "ammunition"
},
elements.vlms_left = {
    color: "#71797E",
    tick: function(pixel) {
        if ((pixel.temp > 1000 || pixel.charge) && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
        if (pixel.burning) {
            if (!tryMove(pixel, pixel.x, pixel.y-1)) {
                // tryMove again to the top left or top right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y-1);
            }
            if (pixelTicks-pixel.burnStart > 50 && Math.random() < 0.1) {
                explodeAt(pixel.x, 10, 4, "realistic_missile_left");
                deletePixel(pixel.x,pixel.y)
            }
        }
        else {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                // tryMove again to the bottom left or bottom right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y+1);
            }
        }
        doDefaults(pixel);
    },
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "weapons"
},
elements.vlms_right = {
    color: "#71797E",
    tick: function(pixel) {
        if ((pixel.temp > 1000 || pixel.charge) && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
        if (pixel.burning) {
            if (!tryMove(pixel, pixel.x, pixel.y-1)) {
                // tryMove again to the top left or top right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y-1);
            }
            if (pixelTicks-pixel.burnStart > 50 && Math.random() < 0.1) {
                explodeAt(pixel.x, 10, 4, "realistic_missile_right");
                deletePixel(pixel.x,pixel.y)
            }
        }
        else {
            if (!tryMove(pixel, pixel.x, pixel.y+1)) {
                // tryMove again to the bottom left or bottom right
                tryMove(pixel, pixel.x+(Math.random() < 0.5 ? -1 : 1), pixel.y+1);
            }
        }
        doDefaults(pixel);
    },
    burn: 90,
    burnTime: 100,
    density: 2000,
    conduct: 1,
    state: "solid",
    category: "weapons"
},
createAtXvar = 0;
createAtYvar = 0;
create1var = "";
elements.element_spawner = {
    color: "#71797E",
    onSelect: async function() {
        var answer1 = await _weaponsjsprompt("Please input the x value.",(createAtXvar||undefined));
        if (!answer1) {return}
        createAtXvar = parseInt(answer1);
        var answer2 = await _weaponsjsprompt("Please input the y value.",(createAtYvar||undefined));
        if (!answer2) {return}
        createAtYvar = parseInt(answer2);
        var answer3 = await _weaponsjsprompt("Please input what element should spawn.",(create1var||undefined));
        if (!answer3) {return}
        create1var = answer3;
    },
    tick: function(pixel) {
        if (pixel.charge){
            createPixel(create1var, createAtXvar, createAtYvar);
        }
        doDefaults(pixel);
    },
    density: 1,
    conduct: 1,
    state: "solid",
    category: "machines"
}
var target =[,];
var tgt = "head";
elements.tracking_missile = {
    color: "#323232",
    category: "weapons",
    behavior: [
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel",
        "XX|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|EX:20>missile_shrapnel|XX",
    ],
    onSelect: function() {
        var answer1 = prompt("Please input the target element.",(tgt||undefined));
        if (!answer1) {return}
        tgt = answer1;
    },
    tick: (pixel) => {
        for (var x = 1; x < width; x++) {
            for (var y = 1; y < height; y++) {
                if (!isEmpty(x,y)) {
                    if (pixelMap[x][y].element===tgt) {
                        target = [pixelMap[x][y].x, pixelMap[x][y].y];
                    }
                }
            }
        }
        if (pixel.x != target[0] || pixel.y != target[1]) {
            let {x, y} = pixel;
            const empty = checkForEmptyPixels(x, y);
            const [tX, tY] = target;
            let bestVal = Math.sqrt(Math.pow(tX - x, 2) + Math.pow(tY - y, 2));
            let best = null;
            for (const pixelPair of empty) {
                const [x_, y_] = [x + pixelPair[0], y + pixelPair[1]];
                const c = Math.sqrt(Math.pow(tX - x_, 2) + Math.pow(tY - y_, 2));
                if (c < bestVal) {
                    bestVal = c;
                    best = pixelPair;
                }
            }
            if (best) {
                tryMove(pixel, x + best[0]*2, y + best[1]*2, undefined, true);
            }
        } 
    }
},
elements.laser_bomb = {
    category: "weapons",
    color: "#524c41",
    tick: function(pixel) {
        var x = pixel.x;
        for (var y = pixel.y; y < height+1; y++) {
            if (outOfBounds(x, y)) {
                if (isEmpty(x, y-1)) { createPixel("smoke", x, y-1); }
                break;
            }
            if (isEmpty(x, y)) {

                createPixel("flash", x, y);
                pixelMap[x][y].color = "#ff0000";
                pixelMap[x][y].temp = 35000;
                pixelMap[x][y].delay = (y + pixel.y) / 8;
            }
        }
        for (var y = pixel.y; y < height-1; y--) {
            if (outOfBounds(x, y)) {
                if (isEmpty(x, y+1)) { createPixel("smoke", x, y+1); }
                break;
            }
            if (isEmpty(x, y)) {

                createPixel("flash", x, y);
                pixelMap[x][y].color = "#ff0000";
                pixelMap[x][y].temp = 35000;
                pixelMap[x][y].delay = (y + pixel.y) / 8;
            }
        }
        var y = pixel.y;
        for (var x = pixel.x; x < width+1; x++) {
            if (outOfBounds(x, y)) {
                if (isEmpty(x-1, y)) { createPixel("smoke", x-1, y); }
                break;
            }
            if (isEmpty(x, y)) {

                createPixel("flash", x, y);
                pixelMap[x][y].color = "#ff0000";
                pixelMap[x][y].temp = 35000;
                pixelMap[x][y].delay = (x + pixel.x) / 8;
            }
        }
        for (var x = pixel.x; x < width-1; x--) {
            if (outOfBounds(x, y)) {
                if (isEmpty(x+1, y)) { createPixel("smoke", x+1, y); }
                break;
            }
            if (isEmpty(x, y)) {

                createPixel("flash", x, y);
                pixelMap[x][y].color = "#ff0000";
                pixelMap[x][y].temp = 35000;
                pixelMap[x][y].delay = (x + pixel.x) / 8;
            }
        }
        deletePixel(pixel.x, pixel.y);
    },
},
elements.cluster_nuke = {
    color: "#323232",
    category: "weapons",
    behavior: behaviors.POWDER,
    tick: (pixel) => {
        for (var y = 1; y < 50; y++) {
            if (!isEmpty(pixel.x, pixel.y + y, false)) {
                explodeAt(pixel.x,pixel.y,50,["dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","nuke",])
            }
        }
    }
}
document.onkeydown = function(ki)/*keyboard_input*/ {
    //a
    if (ki.keyCode == 65) {
        KA = true;
        //vX ++;
    }
    //d
    if (ki.keyCode == 68) {
        KD = true;
        //vX ++;
    }
    //w
    if (ki.keyCode == 87) {
        KW = true;
        //vY ++;
    }
    //s
    if (ki.keyCode == 83) {
        KS = true;
        //vY ++;
    }
}
document.onkeyup = function(i2)/*keyboard_input*/ {
    //a
    if (i2.keyCode == 65) {
        KA = false;
        //vX --;
    }
    //d
    if (i2.keyCode == 68) {
        KD = false;
       //vX --;
    }
    //w
    if (i2.keyCode == 87) {
        KW = false;
        //vY = 0;
    }
    //s
    if (i2.keyCode == 83) {
        KS = false;
        //vY = 0;
    }
}
var KA = false;
var KD = false;
var KW = false;
var KS = false;
var vX = 1;
var vY = 1;
elements.heli_bomb = {
    behavior: [
        "XX|EX:10|XX",
        "EX:10|XX|EX:10",
        "XX|EX:10|XX",
    ],
    tick: function(pixel) {
    /*if (vX === 3) {
            vX --;
        }
    if (vY === 3) {
            vY --;
        }*/
    if (KA === true) {
            tryMove (pixel,pixel.x-vX,pixel.y)
        }
    if (KD === true) {
            tryMove (pixel,pixel.x+vX,pixel.y)
        }
    if (KW === true) {
            tryMove (pixel,pixel.x,pixel.y-vY)
        }
    if (KS === true) {
            tryMove (pixel,pixel.x,pixel.y+vY)
        }
    },
    category: "weapons",
    states:"solid",
    color: "#524c41",
},
elements.mini_nuke = {
    color: "#534636",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1 AND EX:20>plasma,plasma,plasma,plasma,radiation,rad_steam|M2",
    ],
    category: "weapons",
    state: "solid",
    density: 1500,
    excludeRandom: true,
    cooldown: defaultCooldown
},
elements.cluster_nuke = {
    color: "#323232",
    ignore: "cluster_nuke",
    category: "weapons",
    behavior: behaviors.POWDER,
    maxSize: 1,
    tick: (pixel) => {
        for (var y = 1; y < 50; y++) {
            if (!isEmpty(pixel.x, pixel.y + y, false)) {
                explodeAt(pixel.x,pixel.y,50,["dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","dirty_bomb","nuke",])
            }
        }
    }
}

// created by sqec
// coming soon: apartments, small houses

function building_1_segment(pixel) {
    if (pixel.foundation = true && pixel.height < pixel.limit) {
        if (isEmpty(pixel.x+1,pixel.y-pixel.height) &&
        isEmpty(pixel.x-1,pixel.y-pixel.height) &&
        isEmpty(pixel.x+2,pixel.y-pixel.height) &&
        isEmpty(pixel.x-2,pixel.y-pixel.height) &&
        isEmpty(pixel.x+2,pixel.y-1-pixel.height) &&
        isEmpty(pixel.x-2,pixel.y-1-pixel.height) &&
        isEmpty(pixel.x+1,pixel.y-1-pixel.height) &&
        isEmpty(pixel.x-1,pixel.y-1-pixel.height) &&
        isEmpty(pixel.x,pixel.y-1-pixel.height) &&
        isEmpty(pixel.x,pixel.y-pixel.height)) {
            createPixel("glass",pixel.x+1,pixel.y-pixel.height);
            createPixel("glass",pixel.x-1,pixel.y-pixel.height);
            createPixel("concrete",pixel.x+2,pixel.y-pixel.height);
            createPixel("concrete",pixel.x-2,pixel.y-pixel.height);
            createPixel("concrete",pixel.x+1,pixel.y-1-pixel.height);
            createPixel("concrete",pixel.x-1,pixel.y-1-pixel.height);
            createPixel("concrete",pixel.x+2,pixel.y-1-pixel.height);
            createPixel("concrete",pixel.x-2,pixel.y-1-pixel.height);
            createPixel("concrete",pixel.x,pixel.y-1-pixel.height);
            createPixel("concrete",pixel.x,pixel.y-pixel.height);
            pixel.height = pixel.height+2
        }
    }
}
function clearbase3x5(pixel) {
    if (pixel.clearbase = false && pixel.height < pixel.limit) {
        pixel.clearbase = true
        deletePixel(pixel.x-1,pixel.y)
        deletePixel(pixel.x+1,pixel.y)
        deletePixel(pixel.x-2,pixel.y)
        deletePixel(pixel.x+2,pixel.y)
        deletePixel(pixel.x,pixel.y-1)
        deletePixel(pixel.x-1,pixel.y-1)
        deletePixel(pixel.x+1,pixel.y-1)
        deletePixel(pixel.x-2,pixel.y-1)
        deletePixel(pixel.x+2,pixel.y-1)
        deletePixel(pixel.x,pixel.y-2)
        deletePixel(pixel.x-1,pixel.y-2)
        deletePixel(pixel.x+1,pixel.y-2)
        deletePixel(pixel.x-2,pixel.y-2)
        deletePixel(pixel.x+2,pixel.y-2)
    }
}
function filldirt2x5(pixel) {
    var dirtPixelElem = pixelMap[pixel.x][pixel.y+1];
    if (!isEmpty(pixel.x,pixel.y+1) && !outOfBounds(pixel.x,pixel.y+1)) {
            dirtPixelElem = pixelMap[pixel.x][pixel.y+1].element
        }
    if (isEmpty(pixel.x+1,pixel.y+1)) {
        createPixel(dirtPixelElem,pixel.x+1,pixel.y+1);
    }
    if (isEmpty(pixel.x-1,pixel.y+1)) {
        createPixel(dirtPixelElem,pixel.x-1,pixel.y+1);
    }
    if (isEmpty(pixel.x+2,pixel.y+1)) {
        createPixel(dirtPixelElem,pixel.x+2,pixel.y+1);
    }
    if (isEmpty(pixel.x-2,pixel.y+1)) {
        createPixel(dirtPixelElem,pixel.x-2,pixel.y+1);
    }
    if (isEmpty(pixel.x+2,pixel.y+2)) {
        createPixel(dirtPixelElem,pixel.x+2,pixel.y+2);
    }
    if (isEmpty(pixel.x-2,pixel.y+2)) {
        createPixel(dirtPixelElem,pixel.x-2,pixel.y+2);
    }
    if (isEmpty(pixel.x+1,pixel.y+2)) {
        createPixel(dirtPixelElem,pixel.x+2,pixel.y+2);
    }
    if (isEmpty(pixel.x-1,pixel.y+2)) {
        createPixel(dirtPixelElem,pixel.x-2,pixel.y+2);
    }
    if (isEmpty(pixel.x,pixel.y+2)) {
        createPixel(dirtPixelElem,pixel.x-2,pixel.y+2);
    }
}
elements.building_1 = {
    color: "#ffc800",
    tick: function(pixel) {
        if (!isEmpty(pixel.x,pixel.y+1)) {
            clearbase3x5(pixel);
            if (isEmpty(pixel.x+1,pixel.y) &&
            isEmpty(pixel.x-1,pixel.y) &&
            isEmpty(pixel.x+2,pixel.y) &&
            isEmpty(pixel.x-2,pixel.y) &&
            isEmpty(pixel.x+2,pixel.y-1) &&
            isEmpty(pixel.x-2,pixel.y-1) &&
            isEmpty(pixel.x+1,pixel.y-1) &&
            isEmpty(pixel.x-1,pixel.y-1) &&
            isEmpty(pixel.x,pixel.y-1) &&
            isEmpty(pixel.x+2,pixel.y-2) &&
            isEmpty(pixel.x-2,pixel.y-2) &&
            isEmpty(pixel.x+1,pixel.y-2) &&
            isEmpty(pixel.x-1,pixel.y-2) &&
            isEmpty(pixel.x,pixel.y-2)) {
                filldirt2x5(pixel);
                movePixel(pixel,pixel.x,pixel.y-1);
                createPixel("concrete",pixel.x+1,pixel.y+1);
                createPixel("concrete",pixel.x-1,pixel.y+1);
                createPixel("concrete",pixel.x+2,pixel.y+1);
                createPixel("concrete",pixel.x-2,pixel.y+1);
                createPixel("wood",pixel.x,pixel.y+1);
                pixel.limit = 5 + Math.floor(Math.random() * 25)*2;
                createPixel("concrete",pixel.x+1,pixel.y);
                createPixel("concrete",pixel.x-1,pixel.y);
                createPixel("concrete",pixel.x+2,pixel.y);
                createPixel("concrete",pixel.x-2,pixel.y);
                createPixel("concrete",pixel.x+1,pixel.y-1);
                createPixel("concrete",pixel.x-1,pixel.y-1);
                createPixel("concrete",pixel.x+2,pixel.y-1);
                createPixel("concrete",pixel.x-2,pixel.y-1);
                createPixel("concrete",pixel.x,pixel.y-1);
                pixel.foundation = true;
                pixel.height = pixel.height+2
            }
        }
        if (pixel.foundation == true && pixel.height < pixel.limit) {
            building_1_segment(pixel);
        }
        else if (pixel.foundation == true && pixel.height >= pixel.limit) {
            pixel.built = true;
        }
        if (pixel.built == true || pixel.age > 100) {
            changePixel(pixel,"wood");
        }
        pixel.age++
        doDefaults(pixel);
    },
    properties: {
        height:0,
        limit:0,
        foundation:false,
        built:false,
        clearbase:false,
        age:0
    },
    category: "citybuilding",
    state: "solid",
    density: 1500,
    cooldown: defaultCooldown,
    seed: true,
    maxSize: 1,
    excludeRandom: true,
    behavior: behaviors.STURDYPOWDER,
};
elements.small_tree_1 = {
    color: "#4bd943",
    tick: function(pixel) {
        if (!isEmpty(pixel.x,pixel.y+1)) {
            if (isEmpty(pixel.x+1,pixel.y-1) &&
            isEmpty(pixel.x-1,pixel.y-1) &&
            isEmpty(pixel.x,pixel.y-1) &&
            isEmpty(pixel.x+1,pixel.y-2) &&
            isEmpty(pixel.x-1,pixel.y-2) &&
            isEmpty(pixel.x,pixel.y-2) &&
            isEmpty(pixel.x+1,pixel.y-3) &&
            isEmpty(pixel.x-1,pixel.y-3) &&
            isEmpty(pixel.x,pixel.y-3)) {
                createPixel("wood",pixel.x,pixel.y-1);
                createPixel("wood",pixel.x,pixel.y-2);
                createPixel("plant",pixel.x,pixel.y-3);
                createPixel("plant",pixel.x-1,pixel.y-1);
                createPixel("plant",pixel.x-1,pixel.y-2);
                createPixel("plant",pixel.x-1,pixel.y-3);
                createPixel("plant",pixel.x+1,pixel.y-1);
                createPixel("plant",pixel.x+1,pixel.y-2);
                createPixel("plant",pixel.x+1,pixel.y-3);
                changePixel(pixel,"wood");
            }
        }
        if (pixel.age > 50) {
            changePixel(pixel,"wood");
        }
        pixel.age++
        doDefaults(pixel);
    },
    properties: {
        age:0
    },
    category: "citybuilding",
    state: "solid",
    density: 1500,
    cooldown: defaultCooldown,
    seed: true,
    maxSize: 1,
    excludeRandom: true,
    behavior: behaviors.STURDYPOWDER,
};

// var modName = "mods/switches.js";
// var formerlyNoConductMod = "mods/doElectricity changes.js";

// if(enabledMods.includes(formerlyNoConductMod)) {

// } else {
// 	enabledMods.splice(enabledMods.indexOf(modName),0,formerlyNoConductMod)
// 	alert(`The ${formerlyNoConductMod} mod is required and has been automatically inserted (reload for this to take effect).`)
// 	localStorage.setItem("enabledMods", JSON.stringify(enabledMods));
// };

elements.switch_off = {
	name: "switch (off)",
	color: "#7F3333",
	behavior: behaviors.WALL,
	ignoreConduct: ["switch_on_control","switch_off_control"],
	category: "machines",
};

elements.switch_on = {
	name: "switch (on)",
	color: "#33CC33",
	behavior: behaviors.WALL,
	conduct: 1,
	ignoreConduct: ["switch_on_control","switch_off_control"],
	category: "machines",
};

elements.switch_off_control = {
	color: "#FF3333",
	behavior: behaviors.WALL,
	behaviorOn: [
		"XX|CH:switch_on>switch_off|XX",
		"CH:switch_on>switch_off|XX|CH:switch_on>switch_off",
		"XX|CH:switch_on>switch_off|XX"
	],
	conduct: 1,
	ignoreConduct: ["switch_on","switch_off"],
	category: "machines",
};

elements.switch_on_control = {
	color: "#33FF33",
	behavior: behaviors.WALL,
	behaviorOn: [
		"XX|CH:switch_off>switch_on|XX",
		"CH:switch_off>switch_on|XX|CH:switch_off>switch_on",
		"XX|CH:switch_off>switch_on|XX"
	],
	conduct: 1,
	ignoreConduct: ["switch_on","switch_off"],
	category: "machines",
};

// autosave-on-exit.js
(function () {
  'use strict';

  function doEmergencySave() {
    try {
      if (typeof saveSlot === "function") {
        saveSlot(1);
      }
    } catch (e) {
      console.error("[autosave] saveSlot failed:", e);
    }

    try {
      if (typeof confirmSave === "function") {
        confirmSave();
      }
    } catch (e) {
      console.error("[autosave] confirmSave failed:", e);
    }

    try {
      if (typeof handlePrompt === "function") {
        handlePrompt(true);
      }
    } catch (e) {
      console.error("[autosave] handlePrompt failed:", e);
    }
  }

  // Kill the site's warning handler
  try {
    window.onbeforeunload = null;
  } catch (e) {
    console.warn("[autosave] couldn't clear existing onbeforeunload:", e);
  }

  // Block future assignments to onbeforeunload
  try {
    Object.defineProperty(window, "onbeforeunload", {
      configurable: true,
      enumerable: true,
      get() {
        return null;
      },
      set(v) {
        console.log("[autosave] blocked onbeforeunload assignment:", v);
      }
    });
  } catch (e) {
    console.warn("[autosave] couldn't lock onbeforeunload:", e);
  }

  // Run save logic right before leaving, but DO NOT return anything
  window.addEventListener("beforeunload", function () {
    doEmergencySave();
    // No return value -> no warning dialog
  });

  // Optional extra fallback for tab becoming hidden / page lifecycle changes
  window.addEventListener("pagehide", function () {
    doEmergencySave();
  });

  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      doEmergencySave();
    }
  });

})();

(function () {
  let didLoad = false;

  function runLoad() {
    if (didLoad) return;
    didLoad = true;

    if (typeof loadSlot === "function") {
      loadSlot(1);
    }
  }

  document.addEventListener("DOMContentLoaded", runLoad, { once: true });
  window.addEventListener("pageshow", runLoad, { once: true });
})();

(function () {
  if (window.__customDevtoolsLoaded) return;
  window.__customDevtoolsLoaded = true;

  const style = document.createElement("style");
  style.textContent = `
    #js-devtools-toggle {
      position: fixed;
      bottom: 14px;
      left: 14px;
      width: 22px;
      height: 22px;
      background: black;
      border-radius: 50%;
      z-index: 9999999;
      cursor: pointer;
      box-shadow: 0 0 8px rgba(0,0,0,0.35);
      opacity: 0.8;
      transition: transform 0.15s ease, opacity 0.15s ease;
    }

    #js-devtools-toggle:hover {
      opacity: 1;
      transform: scale(1.12);
    }

    #js-devtools-panel {
      position: fixed;
      bottom: 45px;
      left: 14px;
      width: 340px;
      max-height: 70vh;
      background: #111;
      color: #eee;
      border: 1px solid #333;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.45);
      z-index: 9999999;
      display: none;
      overflow: hidden;
      font-family: monospace;
      font-size: 12px;
    }

    #js-devtools-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      background: #1b1b1b;
      border-bottom: 1px solid #2d2d2d;
      cursor: move;
      user-select: none;
    }

    #js-devtools-title {
      font-weight: bold;
    }

    #js-devtools-close {
      background: transparent;
      color: white;
      border: none;
      font-size: 18px;
      cursor: pointer;
      line-height: 1;
    }

    #js-devtools-body {
      padding: 12px;
      overflow: auto;
      max-height: calc(70vh - 48px);
    }

    #js-devtools-body button {
      margin: 4px 4px 8px 0;
      background: #222;
      color: #eee;
      border: 1px solid #444;
      border-radius: 8px;
      padding: 6px 10px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
    }

    #js-devtools-body button:hover {
      background: #2c2c2c;
    }

    #js-devtools-output {
      background: #0b0b0b;
      border: 1px solid #333;
      padding: 8px;
      border-radius: 8px;
      min-height: 90px;
      max-height: 240px;
      overflow: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .js-devtools-section {
      margin-bottom: 12px;
    }

    .js-devtools-label {
      display: block;
      font-weight: bold;
      margin-bottom: 6px;
    }
  `;
  document.head.appendChild(style);

  const toggle = document.createElement("div");
  toggle.id = "js-devtools-toggle";
  toggle.title = "Open devtools";

  const panel = document.createElement("div");
  panel.id = "js-devtools-panel";

  const header = document.createElement("div");
  header.id = "js-devtools-header";

  const title = document.createElement("div");
  title.id = "js-devtools-title";
  title.textContent = "Devtools";

  const closeBtn = document.createElement("button");
  closeBtn.id = "js-devtools-close";
  closeBtn.textContent = "×";

  header.appendChild(title);
  header.appendChild(closeBtn);

  const body = document.createElement("div");
  body.id = "js-devtools-body";

  const controls = document.createElement("div");
  controls.className = "js-devtools-section";

  const controlsLabel = document.createElement("span");
  controlsLabel.className = "js-devtools-label";
  controlsLabel.textContent = "Controls";

  const btnSave = document.createElement("button");
  btnSave.textContent = "Save Slot 1";
  btnSave.onclick = () => {
    try { saveSlot(1); log("[ok] saveSlot(1)"); }
    catch (e) { log("[err] saveSlot failed: " + e); }
  };

  const btnLoad = document.createElement("button");
  btnLoad.textContent = "Load Slot 1";
  btnLoad.onclick = () => {
    try { loadSlot(1); log("[ok] loadSlot(1)"); }
    catch (e) { log("[err] loadSlot failed: " + e); }
  };

  const btnReload = document.createElement("button");
  btnReload.textContent = "Reload";
  btnReload.onclick = () => location.reload();

  const btnClearLog = document.createElement("button");
  btnClearLog.textContent = "Clear Log";
  btnClearLog.onclick = () => {
    output.textContent = "";
  };

  const btnDumpPixels = document.createElement("button");
  btnDumpPixels.textContent = "Log currentPixels";
  btnDumpPixels.onclick = () => {
    try {
      log("currentPixels length: " + (window.currentPixels ? currentPixels.length : "undefined"));
      console.log(currentPixels);
    } catch (e) {
      log("[err] currentPixels unavailable: " + e);
    }
  };

  controls.appendChild(controlsLabel);
  controls.appendChild(btnSave);
  controls.appendChild(btnLoad);
  controls.appendChild(btnReload);
  controls.appendChild(btnClearLog);
  controls.appendChild(btnDumpPixels);

  const outputWrap = document.createElement("div");
  outputWrap.className = "js-devtools-section";

  const outputLabel = document.createElement("span");
  outputLabel.className = "js-devtools-label";
  outputLabel.textContent = "Log";

  const output = document.createElement("pre");
  output.id = "js-devtools-output";

  outputWrap.appendChild(outputLabel);
  outputWrap.appendChild(output);

  body.appendChild(controls);
  body.appendChild(outputWrap);

  panel.appendChild(header);
  panel.appendChild(body);

  document.body.appendChild(toggle);
  document.body.appendChild(panel);

  function log(msg) {
    output.textContent += msg + "\n";
    output.scrollTop = output.scrollHeight;
  }

  function togglePanel() {
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }

  toggle.addEventListener("click", togglePanel);
  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
      e.preventDefault();
      togglePanel();
    }
  });

  // draggable panel
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = panel.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    panel.style.left = rect.left + "px";
    panel.style.top = rect.top + "px";
    panel.style.bottom = "auto";
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });

  // optional console mirroring
  const oldLog = console.log;
  const oldError = console.error;

  console.log = function (...args) {
    oldLog.apply(console, args);
    try {
      log("[log] " + args.map(v => String(v)).join(" "));
    } catch {}
  };

  console.error = function (...args) {
    oldError.apply(console, args);
    try {
      log("[err] " + args.map(v => String(v)).join(" "));
    } catch {}
  };

  log("[ready] custom devtools loaded");
})();
