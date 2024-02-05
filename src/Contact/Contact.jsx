import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
    <section className='container-sm p-5 text-center'>
        <div>
        <h2 className='fs-1 fw-bold pt-5'>CONTACT SECTION</h2>
        <i className="fa-solid fa-star fa-lg"></i>
        </div>
    <form className="p-5">
    <input type="text" className="form-control mb-3 w-50 mx-auto" id="inputname" placeholder="Name" />
    <input type="number" className="form-control mb-3 w-50 mx-auto" id="inputAge" placeholder="Age" />
    <input type="email" className="form-control mb-3 w-50 mx-auto" id="inputEmail4" placeholder="Email" />
    <input type="password" className="form-control mb-3 w-50 mx-auto" id="inputPassword" placeholder="Password" />
    <button type="submit" className="btn btn-success px-2 d-block mx-auto">Submit</button>  
</form>
    </section>

    </>
    
  }
}
