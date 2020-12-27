import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Home1 = () => (
  <div>
    <main className="cover-page" id="home1">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Thailand Travel Guide</h1>
          <h3>Tours | Travel | Guide</h3>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Home1;