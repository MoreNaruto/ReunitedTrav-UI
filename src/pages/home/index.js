import React, {Component} from "react";
import CarouselSection from "../../components/CarouselSection";
import CardSection from "../../components/CardSection";
import PurposeSection from "../../components/PurposeSection";

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