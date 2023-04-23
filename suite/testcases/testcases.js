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
                "values": "testDaniel"
            },
        ],
        "test": {
            "path": ["models", "modelDetails", "supportedCommands", "table", "columns", "name", "getText"],
            "values": "testDaniel"
        },
        "assertion": "eql",
        "expected": ["testDaniel"]
    },
]

module.exports = {
    getTestcases
}