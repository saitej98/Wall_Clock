import "./App.css";
import Alarm from "./AlarmContext/Alarm";
import AnalogClock from "./Components/AnalogClock";
import AlarmOption from "./Components/AlarmOption";
import DigitalClock from "./Components/DigitalClock";
import ProximitySensor,{onMouseMove} from "./Components/ProximitySensor";
function App() {
  return (
    <section className="clock container" onMouseMove={onMouseMove}>
      <ProximitySensor />
      <div className="clock-container grid">
        <div className="clock-content grid">
          <Alarm>
            <AnalogClock />
            <DigitalClock />
            <AlarmOption />
          </Alarm>
        </div>
      </div>
    </section>
  );
}

export default App;
