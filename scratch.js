var foo = "varname";
console.log(foo);

var k = "value";
var i = 0;
for (i = 1; i < 2; i++) {
  eval("var " + k + i + "= " + i + ";");
  let dude = (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);
  console.log(dude);
}
console.log("value1=" + value1);
