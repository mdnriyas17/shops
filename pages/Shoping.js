
import React from "react";

function Shoping(){
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstarp</a>
                <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Shop
      </a>
      </li>
      </ul>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a className="dropdown-item" href="#">All Product</a></li>
        <hr/>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
             </div>
</div>
</nav>
    )
    }
export default Shoping;

{/* <div className="container-fluid">
<a class="navbar-brand" href="#">Start Bootstarp</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Shop
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">All Product</a></li>
        <hr>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  </ul>
  <form class="d-flex">
    <button class="btn btn-outline-dark" type="submit">
        <i class="bi-cart-fill me-1"></i>
        <i class="fa fa-shopping-cart" style="font-size:24px"></i>
        Cart
        <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
    </button>
</form>
</div>
</div>
</nav>

<div id="perview">
<h1>
Shop in style
</h1>
<br>
<p>
With this shop hompeage template
</p>
</div>
<section class="py-3">
<div class="container ">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">
      <div class="col mb-5">
          <div class="card h-100">
              
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
             
              <div class="card-body p-4">
                  <div class="text-center">
                  
                      <h5 class="fw-bolder">Fancy Product</h5>
                     
                      $40.00 - $80.00
                  </div>
              </div>
            
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
       
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
              
              <div class="card-body p-4">
                  <div class="text-center">
                     
                      <h5 class="fw-bolder">Special Item</h5>
                     
                      <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                      </div>
                      
                      <span class="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                  </div>
              </div>
             
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
              
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
              
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
              
              <div class="card-body p-4">
                  <div class="text-center">
                     
                      <h5 class="fw-bolder">Sale Item</h5>
                   
                      <span class="text-muted text-decoration-line-through">$50.00</span>
                      $25.00
                  </div>
              </div>
             
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
             
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
             
              <div class="card-body p-4">
                  <div class="text-center">
                      
                      <h5 class="fw-bolder">Popular Item</h5>
               
                      <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="fa fa-star"></div>
                          <div class="fa fa-star"></div>
                          <div class="fa fa-star"></div>
                          <div class="fa fa-star"></div>
                          <div class="fa fa-star"></div>
                      </div>
                      
                      $40.00
                  </div>
              </div>
              
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
            
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
             
              <div class="card-body p-4">
                  <div class="text-center">
                     
                      <h5 class="fw-bolder">Sale Item</h5>
      
                      <span class="text-muted text-decoration-line-through">$50.00</span>
                      $25.00
                  </div>
              </div>
              
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
              
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
           
              <div class="card-body p-4">
                  <div class="text-center">
                      
                      <h5 class="fw-bolder">Fancy Product</h5>
                     
                      $120.00 - $280.00
                  </div>
              </div>
              
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
           
              <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
           
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
              
              <div class="card-body p-4">
                  <div class="text-center">
                     
                      <h5 class="fw-bolder">Special Item</h5>
                    
                      <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                      </div>
                    
                      <span class="text-muted text-decoration-line-through">$20.00</span>
                      $18.00
                  </div>
              </div>
             
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
      <div class="col mb-5">
          <div class="card h-100">
            
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="...">
            
              <div class="card-body p-4">
                  <div class="text-center">
                   
                      <h5 class="fw-bolder">Popular Item</h5>
                     
                      <div class="d-flex justify-content-center small text-warning mb-2">
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                      </div>
                
                      $40.00
                  </div>
              </div>
            
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
              </div>
          </div>
      </div>
  </div>
</div>
</section>

<footer class="py-5 bg-dark">
<div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
</footer> */}