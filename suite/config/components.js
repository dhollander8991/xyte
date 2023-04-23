const login = {
    email: {
        selector: `input#email`,
        placeholderSelector: `input[placeholder="Email address"]`
    },
    password: {
        selector: `input#password`,
        placeholderSelector: `input[placeholder="Password"]`
    },
    buttons: {
        signIn: {
            selector: `div.login-container button[test-id="sign-in"]`
        }
    }
}
const navbar = {
    reports: {
        selector: `nav.navbar div[aria-label="simple tabs example"] > a[test-id="topbar-tab"][test-label="Reports"]`
    },
    downloadsManager: {
        selector: `div#navbar li[test-id="topbar-dropdown-downloads"]`,
        date: {
            hour: {
                selector: `div.download-container > div:nth-child(1) div[class*=Download__TimeSinceLaunch] > div > span + span`
            },
            date: {
                selector: `div.download-container > div:nth-child(1) div[class*=Download__TimeSinceLaunch] > div > span:nth-child(1)`
            },
            download: {
                selector: `div.download-container > div:nth-child(1) div[class*=Download__TimeSinceLaunch] > button[test-id="download"]`
            }
        }
    }
}
const pages = {
    reports: {
        assestmentReports: {
            webApplicationFireWall: {
                selector: `div#dashboard div.dashboard-card[data-module="waf"]`,
                history: {
                    selector: `div#dashboard div.dashboard-card[data-module="waf"] div.dashboard-card-content > div.report-module-button a[href*="history"] + a`,
                    reports: {
                        selector: `div#assessment-history div.table_body div.table-row`
                    }
                }
            }
        }
    }
}

const assestmentSummary = {
    assestmentScore: {
        selector: `div.report-sidebar div.donut-chart-container div.score-text span.pieChartInfoText > span`
    },
    assestmentUrl: {
        selector: `div.report-sidebar > div.summary-data:nth-child(5) div.report-summary-data`
    },
    assestmentStatus: {
        selector: `div.report-sidebar > div.summary-data div.report-summary-data span[data-for="assessment_status"]`
    },
}

const generateReport = {
    selector: `div.report-sidebar div.summary-data button.report-pop-up`,
    csv: {
        selector: `div.report-sidebar div.summary-data button.report-pop-up + div.generate-report-dropdown-popup > div + div button.cymulate-btn`,

    }
}

module.exports = {
    login,
    navbar,
    pages,
    assestmentSummary,
    generateReport
}