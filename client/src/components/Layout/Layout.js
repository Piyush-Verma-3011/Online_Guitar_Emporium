import React from 'react'
import Header from './Header';

import { Helmet } from "react-helmet";


import{Toaster} from 'react-hot-toast';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
     <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      
      <Header/>
      <main style={{ minHeight: "80vh" }}>
      <Toaster/>
      {children}</main>
    
     

    </div>
  )
}
Layout.defaultProps = {
  title: "Guitar Empo",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb,shopping ,ecommerce",
  author: "Piyush Verma",
};
export default Layout
