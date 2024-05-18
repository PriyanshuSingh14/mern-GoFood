import React from 'react'

const Carousel = () => {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className='carousel-caption' style ={{zIndex:'10'}}>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
      </form>
      </div>
      <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..."  style ={{filter: "brightness(30%)"}}/>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." style ={{filter: "brightness(30%)"}}/>
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." style ={{filter: "brightness(30%)"}}/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div></div>
  )
}

export default Carousel