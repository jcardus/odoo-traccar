/** @odoo-module **/

import  { Component, onMounted, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";


class OdooTraccar extends Component {
    static template = "frotaweb.dashboard";

    setup() {
        this.state = useState({iframeSrc: ""});
        this.rpc = useService('rpc')
        onMounted(async () => {
            const token = await this.rpc('/odoo_traccar/token')
            this.state.iframeSrc = `https://dash.fleetmap.org/traccar?token=${token}`;
        });
    }
}


class OdooTraccarReports extends Component {
    static template = "frotaweb.dashboard";

/*    setup() {
        this.state = useState({iframeSrc: ""});
        onWillStart(async () => {
            const token = await rpc('/odoo_traccar/token')
            this.state.iframeSrc = `https://dash.frotaweb.com/traccar/reports/combined?token=${token}`;
        });
    }*/
}

registry.category("actions").add("odoo_traccar.dashboard", OdooTraccar);
registry.category("actions").add("odoo_traccar.reports", OdooTraccarReports);
