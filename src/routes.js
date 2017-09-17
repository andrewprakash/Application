import React from 'react'
import {Route, Switch} from 'react-router-dom'

const Page = () => {
    return (
        <div>
            This is home page
        </div>
    )
}

const routes = (
    <div>
        <Switch>
            <Route path="/" component={Page}/>
        </Switch>
    </div>
)

export default routes