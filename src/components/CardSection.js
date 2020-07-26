import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";

class CardSection extends Component {
    render() {
        return (
            <div className="m-5 d-flex card-section">
                <Card>
                    <Card.Img variant="top"
                              src="https://www.reviewgeek.com/thumbcache/0/0/d71d0303b65d72b7061443662328a8c4/p/uploads/2018/04/e0af834a.jpg"/>
                    <Card.Body>
                        <Card.Title>Find it!</Card.Title>
                        <Card.Text>
                            Check out some upcoming vacation locations we have set up for you and your
                            family
                        </Card.Text>
                        <Button variant="primary">Click me!</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top"
                              src="https://www.avoyatravel.com/images/dbLibrary/104407-180928154716_1000x565.jpg"/>
                    <Card.Body>
                        <Card.Title>Plan It!</Card.Title>
                        <Card.Text>
                            Want to plan your own custom trip?
                            Set up your own itinerary from scratch!
                        </Card.Text>
                        <Button variant="primary">Click me!</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top"
                              src="https://epmgaa.media.clients.ellingtoncms.com/img/photos/2017/03/23/blacktravelfeed_t750x550.png?d885fc46c41745b3b5de550c70336c1b382931d2"/>
                    <Card.Body>
                        <Card.Title>Connect It!</Card.Title>
                        <Card.Text>
                            Find and add family and friends to your group, so
                            you all can be connected about updates to the itinerary
                            and new trips related to your interests
                        </Card.Text>
                        <Button variant="primary">Click me!</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardSection