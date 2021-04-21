import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class CarouselSection extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.costacruises.com/content/dam/costa/inventory-assets/ports/IST/ist-istanbul-port-2.jpg"
            alt="Istanbul"
          />
          <Carousel.Caption>
            <h3>Istanbul label</h3>
            <p>This is Istanbul</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.senseandsustainability.net/wp-content/uploads/2015/04/11006913294_cc2e6f0f8b_o.jpg"
            alt="South Korea"
          />

          <Carousel.Caption>
            <h3>South Korea label</h3>
            <p>This is South Korea.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg"
            alt="Johannesburg"
          />

          <Carousel.Caption>
            <h3>Johannesburg label</h3>
            <p>This is Johannesburg</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselSection;
