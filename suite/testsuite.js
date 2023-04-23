const testcases = require("./testcases/testcases").getTestcases();
const action = require("./config/actions.js");


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

fixture`Cymulate UI`
    .page`https://google.com`
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

testcases.forEach((testcase) => {
    test
        (`${testcase.testname}`, async t => {
            await t
                .navigateTo(`https://app.cymulate.com/login`)
                .wait(1000);
            for (var a of testcase.actions) {
                const res = getActionFromPath(a.path);
                await res(a.values);
            }
            const res = getActionFromPath(testcase.test.path);
            await t.expect(await res(testcase.test.values, testcase.screen))[testcase.assertion](...testcase.expected);
        });
});