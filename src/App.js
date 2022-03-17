import Slide from './component/sliders/silder.js';
import slideData from './component/sliders/slideData.js';
function App() {
  return (
    <div className="App">
        <Slide slides={slideData}/>
    </div>
  );
}

export default App;
