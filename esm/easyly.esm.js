import Leads from '../lib/Leads.js';

export function createEasyly(SK){
    return {
        Leads: new Leads(SK)
    }
}

export const Easyly = createEasyly("SK");
export default Easyly;


console.log("[b]")