import {invert} from "jsr:@std/collections";

const challenge = {a : "x", b: "y", c: "z"};

console.log(invert(challenge)); // {x: "a", y: "b", z: "c"}