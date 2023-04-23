import { t, Selector, ClientFunction } from 'testcafe';
const userandpass = require("../../global/userandpass.json");

const login = {
    username: {
        selector: `input[name="email"]`,
        type: async (username = userandpass.xyte.username) => {
            await t.typeText(login.email.selector, username);
        }
    },
    password: {
        selector: `input[name="password"]`,
        type: async (password = userandpass.xyte.password) => {
            await t.typeText(login.password.selector, password);
        }
    },
    signIn: {
        selector: `form.sign-in-container button[type="submit"]`,
        click: async () => {
            const selector = await Selector(login.signIn.selector)
            await t.click(selector);
        }
    },
}


module.exports = {
    login,
}