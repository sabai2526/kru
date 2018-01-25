
var a = [ 'a', 'b', 'c' ];
var b = [ 1, 2, 3 ];
console.log(a.concat([ 'd', 'e', 'f' ], b));
console.log(a.join('!'));
console.log(a.slice(1, 3));
console.log(a.reverse());
console.log('---');

var c = a.splice(0, 2);
console.log(a, c);

var d = b.splice(1, 1, 'foo', 'bar');
console.log(b, d);


