import TrafficLight from "./TrafficLight";

import "./styles.css";

const trafficStates = {
  red: {
    backgroundColor: "red",
    duration: 1000,
    next: "green"
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 1000,
    next: "red"
  },
  green: {
    backgroundColor: "green",
    duration: 1000,
    next: "yellow"
  }
};

export default function App() {
  return (
    <div className="wrapper">
      <TrafficLight trafficStates={trafficStates} />
    </div>
  );
}
