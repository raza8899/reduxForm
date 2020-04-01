import React from 'react'
import Header from './Header';
import Info from './Info'
import Form from './Form'
import Footer from './Footer'

function Home(){

    return(
        <React.Fragment>
        <Header />
        <Info />
        <Form />
        <Footer />
        </React.Fragment>
    )
}
export default Home;