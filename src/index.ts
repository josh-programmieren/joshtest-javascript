import { TestSuite } from "./test_suite";
import { NonParamTestCase, ParamTestCase } from "./test_case";
export default {
    "createTestSuite": function (name: string): TestSuite {
        return new TestSuite(name);
    }, 
    "createNonParamTestCase": function (name: string, expected: any, func: Function): NonParamTestCase {
        return new NonParamTestCase(name, expected, func);
    },
    "createParamTestCase": function (name: string, expected: any, func: Function, params: any): ParamTestCase {
        return new ParamTestCase(name, expected, func, params);
    }
};