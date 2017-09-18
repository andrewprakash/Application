import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default function(ComposedComponent) {
    class ReportsList extends Component {
        super(props){
        }
        render() { 
            
            let reportTypes = ["invoicereports"]
            var reportSelected = false;
            var pathname = this.props.location.pathname.split("/")

            if(pathname.length > 1){
                reportSelected = true
                pathname = pathname[1]
            }

            if(ComposedComponent){
                return (
                    <ComposedComponent {...this.props} />
                )
            }else{
                return (
                    <div>
                        <Link to="/invoicesreports">Invoices</Link>
                    </div>
                )
            }
        }
    }

    return (ReportsList)
}
// module.exports = ReportsList