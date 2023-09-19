import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
function Default() {
    return (
        <Fragment>
            <div>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default Default