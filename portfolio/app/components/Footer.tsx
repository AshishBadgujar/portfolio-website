'use client';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      {isDarkTheme ? (
        <footer className="mb-auto col-12 py-vh-3 px-vw-5">
          <div className="row d-flex justify-content-between small">
            <div className="col-12 col-md-auto d-flex justify-content-center">
              <ul className="nav bg-black rounded px-3">
                <li className="nav-item">
                  <a
                    className="nav-link link-light px-0"
                    href="index-dark.html"
                    aria-label="Go home!"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-light" href="aboutme-dark.html">
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-light" href="imprint-dark.html">
                    Imprint
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-light" href="contact-dark.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md text-center text-md-end py-2">
              Made by{' '}
              <a
                href="#"
                className="link-fancy link-fancy-light"
                target="_blank"
              >
                Ashish
              </a>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="mb-auto col-12 py-vh-3 px-vw-5">
          <div className="row d-flex justify-content-between small">
            <div className="col-12 col-md-auto d-flex justify-content-center">
              <ul className="nav bg-light rounded px-3">
                <li className="nav-item">
                  <a
                    className="nav-link link-dark px-0"
                    href="index.html"
                    aria-label="Go home!"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="aboutme.html">
                    About me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="imprint.html">
                    Imprint
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-dark" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md text-center text-md-end py-2">
              Made by{' '}
              <a href="#" className="link-fancy" target="_blank">
                Ashish
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
