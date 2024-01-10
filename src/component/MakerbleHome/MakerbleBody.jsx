import {Link, Outlet} from "react-router-dom";
import {MakerblePost} from "../MakerbleHome/MakerblePost";
import { useState } from "react";

export function MakerbleBody(){

    return(
        <>
            <header className="bg-body-tertiary">
        <div id="head-main" className="d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <nav class="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link to="/"><img  src="./resource/image/logo.png" alt="" height="40" width="40" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="post" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Apps
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
          <div id="profile-section" className="d-flex position-reletive">
            <div className="ms-2">
              <img src="./resource/image/boy1.png" alt="" />
            </div>
            <div className="ms-2">
              <button type="button" class="btn btn-secondary bi bi-bell position-reletive rounded-circle text-center" style={{ height: "2.5em", width: "2.5em" }}>
                <span class="badge text-bg-danger rounded-circle position-absolute">4</span>
              </button>
            </div>
            <div className="ms-2">
              <button type="button" class="btn btn-secondary bi bi-envelope position-reletive rounded-circle text-center" style={{ height: "2.5em", width: "2.5em" }}>
                <span class="badge text-bg-danger rounded-circle position-absolute">4</span>
              </button>
            </div>
            <div className="ms-2 me-3">
              <button className="btn btn-secondary bi bi-grid rounded-circle text-center" type="button" data-bs-toggle="collapse" data-bs-target="#Menu-item" aria-expanded="false" aria-controls="collapseExample" style={{ height: "2.5em", width: "2.5em" }}>
              </button>
              <div className="collapse" id="Menu-item">
                <div className="cart cart-body d-grid">
                  <button className="btn btn-danger mt-2 fw-semibold"><span className="bi bi-plus-lg"></span>Create</button>
                  <button className="btn btn-primary mt-2 fw-semibold"><span className="bi bi-star"></span>Upgrade</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-body-tertiary m-auto mt-2">
        {/* feature container */}
        <div className="d-flex justify-content-between p-3 border-bottom" id="feature-container">
          <div><Link to="post" className="text-decoration-none">Posts</Link></div>
          <div><Link to="project" className="text-decoration-none">Projects</Link></div>
          <div><Link to="Albums" className="text-decoration-none">Albums</Link></div>
          <div><Link to="organisation" className="text-decoration-none">Organisations</Link></div>
          <div><Link to="boards" className="text-decoration-none">Boards</Link></div>
        </div>
        {/*  main section start */}
        <main>
            <Outlet></Outlet>
        </main>
        {/* main section end */}

      </section>
      <footer className="mt-5">
        <div id="footer-border-line"></div>
        <div className=" d-flex flex-wrap justify-content-around">
          <div className="mt-4">
            <img src="./resource/image/logo-text.jpg" alt="" height="" width="100" />
            <div className="text-secondary">
              <p>About us</p>
              <p>Terms & Condition</p>
              <p>Privacy & Cookies</p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="fw-semibold">ORGANISATIONS</h5>
            <div className="text-secondary">
              <p>Control Panel</p>
              <p>Discover the Marketplace</p>
              <p>Create Organisation Account</p>
            </div>
          </div>
          <div className="mt-4" id="footer_account">
            <h5 className="fw-semibold">YOUR ACCOUNT</h5>
            <div className="text-secondary">
              <p>Library</p>
              <p>Profile</p>
              <p>Projects</p>
              <p>Help</p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="fw-semibold">EXPLORE</h5>
            <div className="text-secondary">
              <p>Metrics</p>
              <p>Networks</p>
              <p>Strategies</p>
              <p>Projects</p>
              <p>Studies</p>
              <p>Surveys</p>
              <p>Tips</p>
              <p>Vouchers</p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="fw-semibold">FOLLOW THE MAKERBLE STORY</h5>
            <div className="">
              <span className="text-primary fs-2 ms-3 bi bi-linkedin"></span>
              <span className="text-danger fs-2 ms-4 bi bi-youtube"></span>
              <span className="text-info fs-2 ms-4 bi bi-instagram"></span>
              <span className="text-primary fs-2 ms-4 bi bi-twitter"></span>
              <span className="text-primary fs-2 ms-4 bi bi-facebook"></span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          <div id="chatBox" className="text-center bg-secondary p-2">
            <i className="bi bi-chat-fill fs-4 text-white"></i>
          </div>
          <div className="ms-4">
            <p className="text-secondary">Contect us:</p>
            <p className="text-secondary"><i class="bi bi-envelope"></i>&nbsp;contect@makerble.com</p>
          </div>
        </div>
      </footer>       
        </>
    )
}