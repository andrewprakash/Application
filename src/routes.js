import React from 'react'
import {Route, Switch} from 'react-router-dom'

//Home
import ReportsList from "./components/ReportsList.jsx"

//Invoice Reports
import InvoiceTypesList from "./components/InvoiceReports/InvoiceTypesList.jsx"
import InvoiceReport from "./components/InvoiceReports/InvoiceReport.jsx"
import InvoiceByClient from "./components/InvoiceReports/InvoiceByClient.jsx"

const routes = (
    <div>
        <Switch>
            <Route path="/invoicesreports/invoices" component={ReportsList(InvoiceTypesList(InvoiceReport))}/>
            <Route path="/invoicesreports/invoicebyclient" component={ReportsList(InvoiceTypesList(InvoiceByClient))}/>
            <Route path="/invoicesreports" component={ReportsList(InvoiceTypesList())}/>
            <Route path="/" component={ReportsList()} />
        </Switch>
    </div>
)

export default routes