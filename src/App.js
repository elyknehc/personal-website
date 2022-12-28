import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				{/*Links}*/}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<ProjectDisplay />} />
					<Route path="/technologies" element={<Technologies />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
