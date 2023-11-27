import "./App.css";
import Neurotoxins from "./assets/NeuroToxin.jpg";
import Filler from "./assets/DermalFiller.jpg";
import Carousel from "react-bootstrap/Carousel";

const MainPage = () => {
  const redirectToLink = () => {
    window.open("https://kohaesthetics.janeapp.com", "_blank");
  };

  return (
    <>
      <div
        className="main-container"
        style={{
          backgroundColor: "#F9F6EE",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <a href="#"> Koh Aesthetics </a>

        <div
          className="app-button"
          style={{
            backgroundColor: "#FAF9F6",
            color: "#000000",
            padding: "20px",
            borderRadius: "10px",
            border: "2px solid #050511",
            textAlign: "center",
            maxWidth: "450px",
            width: "100%",
          }}
        >
          <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>
            Welcome to Koh Aesthetics!
          </h1>
          <p style={{ fontSize: "15px", marginBottom: "20px" }}>
            Welcome to Dr. Koh Aesthetics! We're here to enhance your natural
            beauty with personalized care. Dr. Koh is dedicated to providing
            individualized aesthetic solutions that highlight your unique
            features. Interested in a personalized consultation? Book an
            appointment today!
          </p>
          <button
            onClick={redirectToLink}
            style={{
              backgroundColor: "#FAF9F6",
              color: "#000000",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <Carousel style={{ height: "400px" }}>
        <Carousel.Item>
          <a href="https://emedicine.medscape.com/article/1743954-overview?form=fpf">
            <img src={Neurotoxins} alt="Neurotoxins" />
          </a>
          <Carousel.Caption>
            <h3>Neurotoxins</h3>
            <p>Learn more here.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://my.clevelandclinic.org/health/treatments/22667-dermal-fillers">
            <img src={Filler} alt="Filler" />
          </a>
          <Carousel.Caption>
            <h3>Dermal Filler</h3>
            <p>Learn more here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MainPage;
