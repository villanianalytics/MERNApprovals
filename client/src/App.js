import { Routes, Route } from "react-router-dom";
import Editor from "./component/Editor";
import Navbar from "./component/Navbar";
import Customer from "./component/Customer";
import Copyrighter from "./component/Copyrighter";
import Teammember from "./component/Teammember";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/copyrighter" element={<Copyrighter />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/teammember" element={<Teammember />} />
      </Routes>
    </>
  );
}

export default App;
