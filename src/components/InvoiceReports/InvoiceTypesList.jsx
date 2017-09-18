import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default function(ReportType) {
    class InvoiceTypesList extends Component{
        super(props){

        }
        render () {
            var reportTypeSelected = false;
            console.log("the props", this.props)

            const inovices = ["invoices","invoicebyclient"]
            var pathname = this.props.location.pathname.split("/")

            if(pathname.length > 2){
                reportTypeSelected = true;
                pathname = pathname[2]
            }

            return(
                <div>
                    {inovices.map(i => {
                        let reportTypeFiltersView = null
                        if(reportTypeSelected && pathname === i){
                            reportTypeFiltersView = (
                                <ReportType {...this.props} />
                            )
                        }
                        return(
                            <div>
                                <Link to= {"/invoicesreports/" + i} >{i}</Link>
                                {reportTypeFiltersView}
                            </div>
                        )
                    })}
                </div>
            )
            
        }
    }
    return (InvoiceTypesList)
}
