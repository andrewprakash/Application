import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default function(ComposedComponent) {
    class ReportsList extends Component {
        super(props){
        }
        render() { 
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