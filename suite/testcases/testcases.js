const getTestcases = () => [
    {
        "testname": "Validate url",
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
        ],
        "test": {
            "path": ["login", "username", "type"],
            "values": "assestmentUrl"
        },
        "assertion": "eql",
        "expected": [""]
    },
]

module.exports = {
    getTestcases
}