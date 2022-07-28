export interface TestCase {
    /** This interface defines how a test case has to look like */
    name: string;
    hasParams: boolean;
    params?: any;
    func: Function;
    expected: any;
    passed: boolean;
    error?: Error;
    run():void;
}
export class NonParamTestCase implements TestCase {
    /** This is the class to create tests that haven't any params */   name: string;
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
        this.error=Error("No error");
    }
    run():void {
        try {
        this.passed=this.func()===this.expected;
    }
    catch(e:any){ {
        this.error = e;
        this.passed = false;
    }
}
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
    run():void {
        try {
        this.passed=this.func(this.params)===this.expected;
    }
    catch(e:any){ {
        this.error = e;
        this.passed=false;
    }
}
}
}