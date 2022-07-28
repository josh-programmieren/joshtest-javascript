interface TestCase {
    name: string;
    hasParams: boolean;
    params?: any;
    func: Function;
    expected: any;
    passed: boolean;
    error?: Error;
    run():boolean
}
export class NonParamTestCase implements TestCase {
    name: string;
    hasParams: boolean;
    params?: any;
    func: Function;
    expected: any;
    passed: boolean;
    error?: Error;
    constructor(name: string, expected: any, func: Function) {
        this.name = name;
        this.hasParams = false;
        this.expected = expected;
        this.passed = false;
        this.func = func;
    }
    run():boolean {
        return this.func()===this.expected;
    }
}
export class ParamTestCase implements TestCase {
    name: string;
    hasParams: boolean;
    params?: any;
    func: Function;
    expected: any;
    passed: boolean;
    error?: Error;
    constructor(name: string, expected: any, func: Function, params: any) {
        this.name = name;
        this.hasParams = true;
        this.params = params;
        this.expected = expected;
        this.passed = false;
        this.func = func;
    }
    run():boolean {
        return this.func(this.params)===this.expected;
    }
}