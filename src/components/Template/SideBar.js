import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        {/* <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" /> */}
      </Link>
      <header>
        <h2>Vikranth&apos;srivatsa</h2>
        {/* <p><a href="mailto:michael.l.dangelo@gmail.com">michael.l.dangelo@gmail.com</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      {/* <p>Hi, I&apos;m Michael. I like building things.
        I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni, and
        the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p> */}
      <ul className="actions">
        <li>
          <Link target="_blank" key="Resume" to={"./Vikranth_s_Resume.pdf"}>Learn More</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Vikranth Srivatsa<Link to="/">viks.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
