// How to call a object prototype methods

const obj = { 1: "piocasso" };

// First best way
const has = Object.prototype.hasOwnProperty.call(obj, 1);

// or

// Second best way
import has from "has";
has(obj, 1);
