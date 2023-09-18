const Leads = require("../lib/Leads.js");

module.exports = (SK) => {
    return {
        leads:new Leads(SK)
    }
}