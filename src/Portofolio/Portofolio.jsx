import React, { Component } from 'react'

export default class Portofolio extends Component {
  render() {
    return <>
    <section className='container-sm p-5 text-center'>
    <div>
        <h2 className='fs-1 fw-bold pt-5'>PORTFOLIO COMPONENT</h2>
        <i className="fa-solid fa-star fa-lg"></i>
        </div>
        <div className="row mt-5 gy-4">
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/poert1.png" alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/port2.png" alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/port3.png" alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/poert1.png" alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/port2.png" alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div>
                    <img className='w-100 rounded-4' src="../assets/imgs/port3.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
    
  }
}
