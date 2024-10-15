import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:roomId" element={<h1>Hey you are in room</h1>} />
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
