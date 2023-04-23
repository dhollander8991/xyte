const getTestcases = () => [
    {
        "testname": "Validate url",
        "actions": [
            {
                "path": ["login"],
                "values": null
            },
            {
                "path": ["navbar", "clickOnTab"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "click"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "reportsTable", "click"],
                "values": 0
            },

        ],
        "test": {
            "path": ["assestmentSummary", "getText"],
            "values": "assestmentUrl"
        },
        "assertion": "eql",
        "expected": ["https://ekslabs.cymulatedev.com"]
    },
    {
        "testname": "Validate assessment status is completed",
        "actions": [
            {
                "path": ["login"],
                "values": null
            },
            {
                "path": ["navbar", "clickOnTab"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "click"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "reportsTable", "click"],
                "values": 0
            },

        ],
        "test": {
            "path": ["assestmentSummary", "getText"],
            "values": "assestmentStatus"
        },
        "assertion": "eql",
        "expected": ["Completed"]
    },
    {
        "testname": "Validate assessment score is 29",
        "actions": [
            {
                "path": ["login"],
                "values": null
            },
            {
                "path": ["navbar", "clickOnTab"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "click"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "reportsTable", "click"],
                "values": 0
            },

        ],
        "test": {
            "path": ["assestmentSummary", "getText"],
            "values": "assestmentScore"
        },
        "assertion": "eql",
        "expected": ["29"]
    },
    {
        "testname": "Validate CSV report appears in the download manager",
        "actions": [
            {
                "path": ["login"],
                "values": null
            },
            {
                "path": ["navbar", "clickOnTab"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "click"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "reportsTable", "click"],
                "values": 0
            },
            {
                "path": ["assestmentSummary", "click"],
                "values": "assestmentScore"
            },
            {
                "path": ["scrollDownSideBar"],
                "values": ""
            },
            {
                "path": ["generateReport", "click"],
                "values": ""
            },
            {
                "path": ["scrollDownCSV"],
                "values": ""
            },
            {
                "path": ["generateReport", "csv", "click"],
                "values": ""
            },
            {
                "path": ["navbar", "downloadsManager", "click"],
                "values": ""
            },
        ],
        "test": {
            "path": ["navbar", "downloadsManager", "date", "getText"],
            "values": "assestmentScore"
        },
        "assertion": "contains",
        "expected": [new Date().getDate().toString() + "/" + (new Date().getMonth() + 1).toString().padStart(2, '0') + "/" + new Date().getFullYear() + " " + new Date().getHours().toString() + ":" + new Date().getMinutes() + 2]
    },
    {
        "testname": "Validate downloaded file contains the string ",
        "actions": [
            {
                "path": ["login"],
                "values": null
            },
            {
                "path": ["navbar", "clickOnTab"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "click"],
                "values": "reports"
            },
            {
                "path": ["pages", "reports", "assestmentReports", "webApplicationFireWall", "history", "reportsTable", "click"],
                "values": 0
            },
            {
                "path": ["assestmentSummary", "click"],
                "values": "assestmentScore"
            },
            {
                "path": ["scrollDownSideBar"],
                "values": ""
            },
            {
                "path": ["generateReport", "click"],
                "values": ""
            },
            {
                "path": ["scrollDownCSV"],
                "values": ""
            },
            {
                "path": ["generateReport", "csv", "click"],
                "values": ""
            },
            {
                "path": ["navbar", "downloadsManager", "click"],
                "values": ""
            },
            {
                "path": ["navbar", "downloadsManager", "download", "click"],
                "values": ""
            },
        ],
        "test": {
            "path": ["navbar", "downloadsManager", "download", "readCSVFile"],
            "values": "assestmentScore"
        },
        "assertion": "contains",
        "expected": ["https://ekslabs.cymulatedev.com\\Program Files\\Apache Group\\Apache\\logs\\error.log"]
    },
]

module.exports = {
    getTestcases
}