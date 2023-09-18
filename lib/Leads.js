const makeRequest = require("./makeRequest.js");
const Bouncer = require("./Bouncer.js");

class Leads extends Bouncer{

    retrieve(id) {
        return makeRequest(this.key,{
            method: 'GET',
            path: `/leads/${id}`,
        });
    }

    update(id,data) {
        return makeRequest(this.key,{
            method: 'POST',
            path: `/leads/${id}`,
            body: data
        });
    }

    delete(id) {
        return makeRequest(this.key,{
            method: 'DELETE',
            path: `/leads/${id}`,
        });
    }

}
module.exports = Leads;