const joshtest = require('../src/index');

function hello() {
    return "Hello World";
}

function hello2(user) {
    return "Hello " + user;
}
var suite = joshtest.createTestSuite("My Test Suite");
var test1 = joshtest.createNonParamTestCase("Test 1", "Hello World", hello);
var test2 = joshtest.createParamTestCase("Test 2", "Hello Josh", hello2, "Josh");
suite.addTestCase(test1);
suite.addTestCase(test2);
suite.run();
points = suite.getPoints();
console.log(points);