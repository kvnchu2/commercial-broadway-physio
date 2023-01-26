import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import ryanCaselli from '../public/images/ryan-caselli.png';
import Service1 from '../public/images/service11.svg';
import Service2 from '../public/images/service22.svg';
import Service3 from '../public/images/service33.svg';
import Car from '../public/images/car-svgrepo-com.svg';
import Calendar from '../public/images/calendar-svgrepo-com.svg';
import Money from '../public/images/money-svgrepo-com.svg';
import Fitness from '../public/images/fitness.jpg';
import ProfileWoman from '../public/images/profile-woman.svg';
import Profile from '../public/images/profile.svg';
import Leaf from '../public/images/leaf.svg';
import PersonalTraining from '../public/images/personal-training.jpg';
import Acupuncture from '../public/images/acupuncture.jpg';
import ElderCare from '../public/images/elder-care.jpg';
import KinesioTaping from '../public/images/kinesio-taping.jpg';
import Physiotherapy from '../public/images/physiotherapy.jpg';
import Cupping from '../public/images/cupping.jpg';





export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Empowering you through movement</h1>
                  <p>
                    Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna
                    pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa
                    urna, volutpat orci imperdiet eget eget.
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Book Now
                        </div>
                      </Link>
                      
                      <a className="call-now" href="tel:555-213-9120">
                          <div className="light">
                            <Image decoding="async" src={phone} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="dark">
                            <Image className="dark" decoding="async" src={phoneDark} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="group">
                              <span className="text">Call Now</span>
                              <span className="number">(236) 512-5182</span>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </section>

    <section id="services" className="services">
        
        <div className="card">
            <picture className="picture">
                <Image src={Car} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Mobile</h2>
            <p>
                No need to visit a clinic! Sessions take place at your home, community center gym, or pool.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Calendar} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Flexible</h2>
            <p>
                Scheduling is convenient to accommodate your availability.
            </p>
        </div>
        <div className="card">
            <picture>
                <Image aria-hidden="true" decoding="async" src={Money} alt="appliance" width="48" height="48" />
            </picture>
            <h2>Direct Billing</h2>
            <p>
            Insurance-covered services billed directly to ICBC and major insurance providers.
            </p>
        </div>
    </section>
    <section id="about-content-home" className="section">
      <div className="container">
        <div className="image">
          <Image className="fitness" decoding="async" src={Fitness} alt="" width="" height="" />
        </div>
        <div className="content">
          <span className="topper">Who We Are</span>
          <h2>Dictum dolor, nullam morbi sem in auctor?</h2>
          <div aria-hidden="true" className="decoration">
            <div className="decorationimage">
                <Image src={Leaf} alt="" width="" height="" />
            </div>
            <div className="line"></div>
          </div>
          <p>
            Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna
            pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa
            urna, volutpat orci imperdiet eget eget.

            {/* Working with you, I will build a plan that will address rehabilitation exercise, basic strength training, stress management, lifestyle habits, and more. */}
          </p>
        </div>
      </div>
    </section>

    <section id="services-table">
        <div className="services-container">
            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={PersonalTraining} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>Active Rehabilitation</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>
            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={Physiotherapy} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>Physiotherapy</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={Acupuncture} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>Acupuncture/Dry Needling</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={ElderCare} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>Elder Care</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>

            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={KinesioTaping} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>KinesioTaping</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>


            <div className="services-table-item">
                <div className="personaltraining-image">
                    <Image src={Cupping} layout="fill" objectFit="cover"></Image>
                </div>
                <h3>Cupping</h3>
                <p>A physiotherapy service for those patients and insurers who are having trouble returning to their pre-injury levels of function or post-operative patients who want to return to their pre-operative activity levels.</p>
            </div>
            
        </div>
    </section>

    <section id="reviews-home">
        <div className="cs-container">
            <span className="cs-topper">Our Reviews</span>
            <h2 className="cs-title">Words From Our Clients</h2>
            <p className="cs-text">
                
            </p>
            <ul className="cs-card-group">
                
                <li className="cs-item">
                    <div className="cs-item-img">
                    <Image className="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src={ProfileWoman} alt="profile picture" width="80" height="80"/>
                    </div>
                    
                    <p className="cs-item-p">
                    Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna
          pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa
          urna, volutpat orci imperdiet eget eget.
                    </p>
                    <span className="cs-reviewer">
                        Jon Doe
                        <span className="cs-desc">Homeowner</span>
                    </span>
                    <div className="cs-item-stars">
                        <Image aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16" />
                    </div>
                </li>

                <li className="cs-item">
                    <div className="cs-item-img">
                        <Image className="cs-item-img" aria-hidden="true" loading="lazy" decoding="async" src={Profile} alt="profile picture" width="80" height="80"/>
                    </div>
                    <p className="cs-item-p">
                    Dictum dolor, nullam morbi sem in auctor proin. Consequat dolor habitasse nam sed tempor. Viverra magna
                    pharetra rhoncus, nec sed ullamcorper lectus et. Auctor velit diam fermentum consequat. Feugiat viverra massa
                    urna, volutpat orci imperdiet eget eget.
                    </p>
                    <span className="cs-reviewer">
                        Sally Urbank
                        <span className="cs-desc">Banker</span>
                    </span>
                    <div className="cs-item-stars">
                        <Image aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/stars-yellow.svg" alt="stars" width="96" height="16"/>
                    </div>
                </li>
            </ul>
            <a aria-label="read more reviews" href="/reviews" className="button-solid">Read More</a>
        </div>
    </section>
    
    </>
  );
}