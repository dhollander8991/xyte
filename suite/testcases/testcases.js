const getTestcases = () => [
    {
        "testname": "Adding a new command and making sure the command is added",
        "actions": [
            {
                "path": ["login", "username", "type"],
                "values": undefined
            },
            {
                "path": ["login", "password", "type"],
                "values": undefined
            },
            {
                "path": ["login", "signIn", "click"],
                "values": ""
            },
            {
                "path": ["sidebar", "models", "click"],
                "values": ""
            },
            {
                "path": ["models", "table", "columns", "name", "click"],
                "values": 0
            },
            {
                "path": ["models", "modelDetails", "navbar", "supportedCommands", "click"],
                "values": ""
            },
            {
                "path": ["models", "modelDetails", "supportedCommands", "addCommand", "click"],
                "values": ""
            },
            {
                "path": ["modals", "addCommand", "friendlyName", "type"],
                "values": "testDaniel"
            },
            {
                "path": ["modals", "addCommand", "description", "type"],
                "values": "testDaniel"
            },
            {
                "path": ["modals", "addCommand", "nameSentToDevice", "type"],
                "values": "testDaniel"
            },
            {
                "path": ["modals", "addCommand", "create", "click"],
                "values": ""
            },
        ],
        "test": {
            "path": ["models", "modelDetails", "supportedCommands", "table", "columns", "name", "getText"],
            "values": "testDaniel"
        },
        "assertion": "eql",
        "expected": ["testDaniel"]
    },
    {
        "testname": "Adding an existing command and making sure I can't add that command by asserting the error message is displayed",
        "actions": [
            {
                "path": ["login", "username", "type"],
                "values": undefined
            },
            {
                "path": ["login", "password", "type"],
                "values": undefined
            },
            {
                "path": ["login", "signIn", "click"],
                "values": ""
            },
            {
                "path": ["sidebar", "models", "click"],
                "values": ""
            },
            {
                "path": ["models", "table", "columns", "name", "click"],
                "values": 0
            },
            {
                "path": ["models", "modelDetails", "navbar", "supportedCommands", "click"],
                "values": ""
            },
            {
                "path": ["models", "modelDetails", "supportedCommands", "table", "columns", "options", "delete", "click"],
                "values": 3
            },
            {
                "path": ["models", "modelDetails", "supportedCommands", "addCommand", "click"],
                "values": ""
            },
            {
                "path": ["modals", "addCommand", "friendlyName", "type"],
                "values": "reboot"
            },
            {
                "path": ["modals", "addCommand", "description", "type"],
                "values": "reboot"
            },
            {
                "path": ["modals", "addCommand", "nameSentToDevice", "type"],
                "values": "reboot"
            },
            {
                "path": ["modals", "addCommand", "create", "click"],
                "values": ""
            },
        ],
        "test": {
            "path": ["modals", "addCommand", "errorMessage", "getText"],
            "values": ""
        },
        "assertion": "eql",
        "expected": ["Name has already been taken"]
    },
    {
        "testname": "Adding an existing command and making sure I can't add that command by asserting the reboot model appears only once in the table",
        "actions": [
            {
                "path": ["login", "username", "type"],
                "values": undefined
            },
            {
                "path": ["login", "password", "type"],
                "values": undefined
            },
            {
                "path": ["login", "signIn", "click"],
                "values": ""
            },
            {
                "path": ["sidebar", "models", "click"],
                "values": ""
            },
            {
                "path": ["models", "table", "columns", "name", "click"],
                "values": 0
            },
            {
                "path": ["models", "modelDetails", "navbar", "supportedCommands", "click"],
                "values": ""
            },
        ],
        "test": {
            "path": ["models", "modelDetails", "supportedCommands", "table", "columns", "name", "getCount"],
            "values": "reboot"
        },
        "assertion": "eql",
        "expected": [1]
    },
]

module.exports = {
    getTestcases
}