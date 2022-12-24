import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				{/*Links}*/}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/interests" element={<Interests />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
