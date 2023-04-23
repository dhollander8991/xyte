const testcases = require("./testcases/testcases").getTestcases();
const action = require("./config/components.js");


const getActionFromPath = (path) => {
    var method = action;
    if (Array.isArray(path)) {
        for (let entry of path) {
            method = method[entry];
        }
        return method;
    }
    return function () { return null };
};

fixture`Xyte test`
    .page`https://partners.xyte.io/auth/sign-in`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

testcases.forEach((testcase) => {
    test
        (`${testcase.testname}`, async t => {
            await t
                .navigateTo(`https://partners.xyte.io/auth/sign-in`)
                .wait(1000);
            for (var a of testcase.actions) {
                const res = getActionFromPath(a.path);
                await res(a.values);
            }
            const res = getActionFromPath(testcase.test.path);
            await t.expect(await res(testcase.test.values))[testcase.assertion](...testcase.expected);
        });
});