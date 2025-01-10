import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/page.css';

export default function Home() {
  return (
    <div className="p-0 col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-5 d-flex align-items-start flex-column shadow position-relative">
      <Header />
      <main className="mb-auto col-12 px-vw-5">
        <div
          className="bg-light rounded p-5 overflow-x-hidden"
          data-aos="fade-left"
        >
          <div className="on-hover d-inline">
            <Image
              loading="lazy"
              src="/img/webp/person_3_sm.webp"
              width="80"
              height="80"
              className="rounded-circle mb-4 shadow-sm mt-2 mt-xxl-4 hoh img-fluid"
              alt="A image of Ashish Badgujar"
            />
            <Image
              loading="lazy"
              src="/img/webp/person_4_md.webp"
              width="80"
              height="80"
              className="rounded-circle mb-4 shadow-sm mt-2 mt-xxl-4 soh"
              alt="Another image of Ashish Badgujar"
            />
          </div>
          <h1 className="fw-lighter text-black">
            <strong>Welcome to my design universe!</strong>
            I'm Ashish, a Stockholm-based digital product designer with a love
            for crafting beautiful interfaces.
          </h1>
          <p className="lead py-4">
            Welcome to this fictional sample content! It is just here to be
            replaced by your own fancy super content.
          </p>
          <div className="row d-flex align-items-center mb-2 mb-xxl-4 text-center text-sm-start mx-0">
            <a
              className="btn btn-black btn-xl shadow col-12 col-sm-auto"
              href="contact.html"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Let´s chat!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a
              href="aboutme.html"
              className="ms-0 ms-sm-3 mt-3 mt-sm-0 col-12 col-sm-auto p-0 link-dark"
              aria-label="Link to my About page"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              More about me
            </a>
          </div>
        </div>
        <div className="py-vh-3 overflow-x-hidden">
          <h2
            className="h6 mb-4 px-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Side Projects:
          </h2>
          <div
            className="d-flex align-items-center p-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="me-4">
              <Image
                loading="lazy"
                src="/img/webp/bck1_xs.webp"
                width="80"
                height="80"
                className="rounded-circle shadow-sm"
                alt="An image of my sitesproject website"
              />
            </div>
            <div className="flex-grow-1">
              <h3 className="h5">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark"
                >
                  Wall-AI - AI generated Wallpapers for free
                </a>
              </h3>
              <p>
                My personal collection of hand- and AI crafted Wallpapers. Made
                for everyone, free and Open Sourced plus the Prompt´s I use.
              </p>
            </div>
          </div>
          <div
            className="d-flex align-items-center my-2 p-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="me-4">
              <Image
                loading="lazy"
                src="/img/webp/sample4_xs.webp"
                width="80"
                height="80"
                className="rounded-circle shadow-sm"
                alt="Another image of another sitesproject website"
              />
            </div>
            <div className="flex-grow-1">
              <h3 className="h5">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark"
                >
                  3DArt - The 3D Meetup
                </a>
              </h3>
              <p>
                A virtual exchange of 3D artist while playing VR Dart. It´s fun!
                Everyone can join and hangout with us. Every first Monday of the
                month.
              </p>
            </div>
          </div>
          <div
            className="d-flex align-items-center p-4"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="me-4">
              <Image
                loading="lazy"
                src="/img/webp/sample6_xs.webp"
                width="80"
                height="80"
                className="rounded-circle shadow-sm"
                alt="Another image of another sitesproject website"
              />
            </div>
            <div className="flex-grow-1">
              <h3 className="h5">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-underline-dark"
                >
                  BirdTree - Freelancer Hangout Space
                </a>
              </h3>
              <p>
                My brand new startup idea. I build it in public and a lot of
                stuff going around there. So check it out and play around!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <div
        className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 col-xxl-7 bg-cover py-vh-max py-lg-0 bg-black ba-local position-fixed top-0 end-0 z-0 h-100 bg-img"
        data-aos="fade"
      ></div>
    </div>
  );
}
