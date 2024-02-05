import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return <>
    <div className="container-fluid bg-dark py-5">
        <div className="row mx-5 text-center text-white">
            <div className="col-md-4">
                <div className="d-flex flex-column">
                    <h5>LOCATION</h5>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 text-white">
                <div className="d-flex flex-column">
                    <h5>AROUND THE WEB</h5>
            <div className="socials">
  <ul className="list-unstyled ">
    <div className="icons">
        <i className="mx-2 fa-brands fa-facebook mx-1 icon"></i>
        <i className="mx-2 fa-brands fa-twitter mx-1 icon"></i>
        <i className="mx-2 fa-brands fa-linkedin-in mx-1 icon"></i>
        <i className="mx-2 fa-solid fa-globe mx-1 icon"></i>
    </div>
  </ul>
</div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="d-flex flex-column">
                    <h5>ABOUT FREELANCER</h5>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
            <div className="col-12 py-3 text-center text-white bg-black w-100">
                    <p>Copyright © Your Website 2021</p>
            </div>
    </>
    
  }
}

