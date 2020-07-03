import React, {Component} from "react";
import CarouselSection from "./CarouselSection";
import CardSection from "./CardSection";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselSection/>
                <CardSection/>
            </div>
        )
    }
}

export default Home