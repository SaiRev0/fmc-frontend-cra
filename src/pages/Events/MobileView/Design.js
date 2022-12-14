import * as React from "react";
import EventCard from "../EventCard";
import data from "../Data/data";
import Footer from "../../../components/footer/Footer";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import WorkshopCard from "../WorkshopCard";
function Design() {
  return (
    <div style={{ background: "#1D033E", overflow: "hidden" }}>
      <ToastContainer
        draggable={true}
        toastClassName="toast-style"
        toastStyle={{
          backgroundColor: "#FCC907",
          color: "#1D033E",
          fontWeight: "bold",
        }}
      />
      <section className="section">
        <Link to="/events" className="back-btn">
          Back
        </Link>
        <div className="card-container">
          <div className="event-cards">
            {data.designData.map((item, index) => {
              return (
                <EventCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          <div className="workshop-cards">
            {data.designWorkshopData.map((item, index) => {
              return (
                <WorkshopCard
                  img={item.img}
                  title={item.title}
                  type={item.type}
                  link={item.link}
                  price={item.price}
                  prize={item.prize}
                  desc={item.desc}
                  date={item.date}
                  time={item.time}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Design;
