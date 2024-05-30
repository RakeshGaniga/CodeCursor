

//components
import Home from "./Components/Home";

import DataProvider from "./context/DaataProvider";

function App() {
  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  );
}

export default App;
