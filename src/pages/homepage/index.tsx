import React from 'react';
import Navbar from 'components/molecules/Navbar';
import './styles.scss';
import Header from 'components/organisms/Header';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';
import InfoLinks from 'components/organisms/InfoLinks';
import ComparisonTable from 'components/molecules/ComparisonTable';
import Footer from 'components/organisms/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__content container">
        <main>
          <h1 className="home__pageTitle">
            Why choose Hastings Direct home insurance?
          </h1>
          <p className="home__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            repellendus natus cum harum sit quasi earum minima officia tenetur
            quas, delectus corrupti placeat molestiae sequi aperiam, eius
            accusamus exercitationem in illum similique cumque iste at? Rerum
            vel ducimus quibusdam totam!
          </p>
          <ComparisonTable />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit delectus sed nam eum dolorem aspernatur quibusdam
            nesciunt similique deleniti incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit delectus sed nam eum dolorem aspernatur quibusdam
            nesciunt similique deleniti incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit delectus sed nam eum dolorem aspernatur quibusdam
            nesciunt similique deleniti incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit delectus sed nam eum dolorem aspernatur quibusdam
            nesciunt similique deleniti incidunt.
          </p>
          <div className="home__ctaContainer">
            <Button
              text="Get a home insurance quote"
              href="#"
              classNames="centerAlign"
            />
            <Link text="Retrieve your home insurance quote" href="#" inline />
          </div>
        </main>
        <aside>
          <InfoLinks />
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
