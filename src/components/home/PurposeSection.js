import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";

class PurposeSection extends Component {
    render() {
        return (
            <Jumbotron className="text-center">
                <h1>Welcome Fam!</h1>
                <p>
                    The best vacations are with family and friends. We want to make your re-unions
                    as easy as possible, so you all can just enjoy each other!
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default PurposeSection