import React from 'react'

import Header from '../Header'
import Copyright from '../Copyright'

const Layout = ({children}) => (
    <>
    <link href="http://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
    <link href="default.css" rel="stylesheet" type="text/css" media="all" />
    <link href="fonts.css" rel="stylesheet" type="text/css" media="all" />
    <div id="wrapper1">
        <Header/>
        {children}
    </div>
    <Copyright/>
    </>
)

export default Layout