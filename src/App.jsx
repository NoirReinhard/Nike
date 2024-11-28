import "./App.css";
import "./index.css";
import { Nav, Hero, PopularProducts, SuperQuality, SpecialOffer, Review } from "./Sections";
import Footer from "./Sections/Footer";
import Services from "./Sections/Services";
import Subscribe from "./Sections/Subscribe";

const App = () => {
  return (
    <>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section >
        <Review/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </>
  );
};

export default App;
