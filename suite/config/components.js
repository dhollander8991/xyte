import { t, Selector, ClientFunction } from 'testcafe';
const userandpass = require("../../global/userandpass.json");

const login = {
    username: {
        selector: `input[name="email"]`,
        type: async (username = userandpass.xyte.username) => {
            await t.typeText(login.username.selector, username);
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
            const selector = await Selector(login.signIn.selector);
            await t.click(selector);
        }
    },
}

const sidebar = {
    models: {
        selector: `a.sidebar-link[href="/models"]`,
        click: async () => {
            const selector = await Selector(sidebar.models.selector);
            await t.click(selector);
        }
    }
}

const models = {
    table: {
        columns: {
            name: {
                click: async (rowNumber = 0) => {
                    const selector = await Selector(`#cell-cell_${rowNumber}_model > div a`);
                    await t.click(selector);
                }
            }
        }
    },
    modelDetails: {
        navbar: {
            supportedCommands: {
                selector: `div.mantine-Tabs-tabsList div:nth-child(4) button`,
                click: async () => {
                    const selector = await Selector(models.modelDetails.navbar.supportedCommands.selector);
                    await t.click(selector);
                }
            }
        },
        supportedCommands: {
            table: {
                columns: {
                    name: {
                        getText: async (value = 0) => {
                            if (typeof value == "string") {
                                const res = await Selector(`[id*=cell-cell] > div`).withText(value).innerText;
                                return res;
                            }
                            const res = await Selector(`#cell-cell_${value}_name > div`).innerText;
                            return res;
                        },
                        getCount: async (text) => {
                            const res = await Selector(`[id*=cell-cell] > div`).withText(text).count;
                            return res;
                        }
                    },
                    options: {
                        delete: {
                            selector: ``,
                            click: async (row = 0) => {
                                await t.hover(`div#cell-cell_${row}_file_type`);
                                await t
                                    .click(`div#cell-cell_${row}_file_type + div button`)
                                    .click(await Selector(`button`).withText('Delete'))
                                    .click(`button + button`);
                            }
                        }
                    }
                },
            },
            addCommand: {
                selector: Selector('button').withText("Add Command"),
                click: async () => {
                    const selector = models.modelDetails.supportedCommands.addCommand.selector;
                    await t.click(selector);
                }
            }
        }
    }
}

const modals = {
    addCommand: {
        friendlyName: {
            selector: `input[name="friendly_name"]`,
            type: async (text) => {
                await t.typeText(modals.addCommand.friendlyName.selector, text);
            }
        },
        description: {
            selector: `input[name="description"]`,
            type: async (text) => {
                await t.typeText(modals.addCommand.description.selector, text);
            }
        },
        nameSentToDevice: {
            selector: `input[name="name"]`,
            type: async (text) => {
                await t.typeText(modals.addCommand.nameSentToDevice.selector, text);
            }
        },
        create: {
            selector: `form + div + div button + button`,
            click: async () => {
                await t.click(modals.addCommand.create.selector)
            }
        },
        errorMessage: {
            selector: `div.modal-body > p`,
            getText: async () => {
                const res = await Selector(modals.addCommand.errorMessage.selector).innerText;
                return res;
            }
        }
    }
}


module.exports = {
    login,
    models,
    modals,
    sidebar,
}