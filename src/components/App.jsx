import "./App.css";
import PresentationCard from "./presentationCard/PresentationCard";
import Counter from "./counter/Counter";
import CountDown from "./countDown/CountDown";

export default function App() {
    return (
        <div className="App">
            {/* <PresentationCard/> */}
            {/* <Counter/> */}
            <CountDown/>
        </div>
    );
}
