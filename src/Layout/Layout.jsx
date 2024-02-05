import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Portofolio from '../Portofolio/Portofolio'
import About from '../About/About'
import { Outlet } from 'react-router-dom'


export default class Layout extends Component {
  render() {
    return <>
    <section>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </section>
    </>
    
  }
}
