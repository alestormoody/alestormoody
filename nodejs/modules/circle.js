// require MATH module
var PI = Math.PI;

// Create modules : area
function area(r) {
    return PI * r * r;
}

// Export modules
module.exports = { area };