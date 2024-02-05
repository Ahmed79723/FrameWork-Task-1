import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return <>
    <section className='text-center text-white bg-success pt-5'>
        <div className="container-sm">
        <div className='mt-5 pt-5'>
        <h2 className='fs-1 fw-bold text-nowrap mt-5'>ABOUT COMPONENT</h2>
        <i className="fa-solid fa-star fa-lg text-nowrap mb-4"></i>
        </div>
        <div className="row pb-5">
            <div className="col-md-6 pb-5">
                <div>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
            </div>
            <div className="col-md-6 pb-5">
                <div>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
            </div>
        </div>
        </div>    
    </section>
    </>
    
  }
}
