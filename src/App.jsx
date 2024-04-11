import React from "react";
import { NavComponent } from "./components";
import { AboutPage, CoursePage, HomePage } from "./pages";
import ReviewPage from "./pages/Review.page";
import ContactPage from "./pages/Contact.page";
import FooterComponent from "./components/Footer.component";

const App = () => {
  return (
    <div>
      <NavComponent />
      <main>
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutPage />
        </div>

        <div id="courses">
          <CoursePage />
        </div>
        <div id="reviews">
          <ReviewPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </main>
      <FooterComponent />
    </div>
  );
};

export default App;
