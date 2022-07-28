import { TestCase } from "./test_case";
export class TestSuite {
    /** This class implements a test suite */
    name: string;
    tests: TestCase[];
    points: number;
    constructor(name: string) {
        this.name = name;
        this.tests = [];
        this.points = 0;
    }
    addTest(test: TestCase) {
        /** Add a test case */
        this.tests.push(test);
    }
    run():void {
        /** Run all tests */
        for (let test of this.tests) {
            test.run();
            if (test.passed) {
                this.points += 1;
            }
        }
    }
    getPoints():number {
        /** Get the points of the test suite */
        return this.points;
    }
}