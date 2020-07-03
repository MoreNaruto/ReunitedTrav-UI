import React, {Component} from "react";
import CarouselSection from "./CarouselSection";
import CardSection from "./CardSection";
import PurposeSection from "./PurposeSection";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselSection/>
                <PurposeSection/>
                <CardSection/>
            </div>
        )
    }
}

export default Home