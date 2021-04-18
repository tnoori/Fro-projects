@extends('_layouts.master') @section('body') @include('_partials.header')
<div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-8 col-sm-12">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/imgs/b-1.jpg" class="d-block w-100 img-carsousel" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/imgs/b-2.jpg" class="d-block w-100 img-carsousel" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/imgs/b-3.jpg" class="d-block w-100 img-carsousel" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev next-priv" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                        <button class="carousel-control-next next-priv" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-lg-3">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling
                            up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
      <div class="card border-0 ">
                    <button class="border-0 bg-0"><i class="far fa-heart heart"></i></button>
                    <div class="card-img-wrapper">
                        <img class="card-img-top  mx-auto pt-4" src="/imgs/e-1.jpg" alt="Card image cap">
                    </div>
                    <div class="card-body  pt-4 text-center">
                        <h5 class="card-title">Basic Grammar</h5>
                        <div class="card-content">
                            <h5 class="f-h5 card-text">1Book Gift </h5>
                            <div class=" p-3 text-center">
                                <button class="btn btn-light-card border"><img src="/imgs/pdf.svg" class="mb-1" width="20" height="20" alt="">  Free Download</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="col-lg-3">
              <div class="card border-0 ">
                    <button class="border-0 bg-0"><i class="far fa-heart heart"></i></button>
                    <div class="card-img-wrapper">
                        <img class="card-img-top  mx-auto pt-4" src="/imgs/e-1.jpg" alt="Card image cap">
                    </div>
                    <div class="card-body  pt-4 text-center">
                        <h5 class="card-title">Basic Grammar</h5>
                        <div class="card-content">
                            <h5 class="f-h5 card-text">1Book Gift </h5>
                            <div class=" p-3 text-center">
                                <button class="btn btn-light-card border"><img src="/imgs/pdf.svg" class="mb-1" width="20" height="20" alt="">  Free Download</button>
                            </div>
                        </div>
                    </div>
                </div></div>
        <div class="col-lg-3">
              <div class="card border-0 ">
                    <button class="border-0 bg-0"><i class="far fa-heart heart"></i></button>
                    <div class="card-img-wrapper">
                        <img class="card-img-top  mx-auto pt-4" src="/imgs/e-1.jpg" alt="Card image cap">
                    </div>
                    <div class="card-body  pt-4 text-center">
                        <h5 class="card-title">Basic Grammar</h5>
                        <div class="card-content">
                            <h5 class="f-h5 card-text">1Book Gift </h5>
                            <div class=" p-3 text-center">
                                <button class="btn btn-light-card border"><img src="/imgs/pdf.svg" class="mb-1" width="20" height="20" alt="">  Free Download</button>
                            </div>
                        </div>
                    </div>
                </div></div>
    </div>
</div>

 
  

@include('_partials.footer') @endsection