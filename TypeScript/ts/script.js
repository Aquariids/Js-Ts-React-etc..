function countCoord(coord) {
}
function a(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase);
    }
}
function sum(a) {
    if (Array.isArray(a)) {
        var num = a.reduce(function (sum, current) {
            return sum + current;
        });
        return num;
    }
    else {
        return a;
    }
}
console.log(sum([10, 10]));
