import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return <>
    <section className='bg-success p-5 d-flex flex-column align-items-center justify-content-center text-center text-white'>
<img className='mt-5' src="../assets/imgs/avataaars.svg" alt="" width={250} />
        <div>
        <h1 className='fs-1 fw-bold text-nowrap mt-5'>START FRAMEWORK</h1>
        <i className="fa-solid fa-star fa-lg text-nowrap"></i>
        </div>
        <p className='mt-4'>Graphic Artist - Web Designer - Illustrator</p>
    </section>
    </>
    
  }
}
