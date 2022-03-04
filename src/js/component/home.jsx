import React from "react";
import { Parallax } from "react-parallax";
import App from "./App";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TheSlides from "./Carousel";

//create your first component

const image1 =
	"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";

const Home = () => {
	return (
		<div>
			<Parallax bgImage={image1} strength={500}>
				<div style={{ height: 1000 }}>
					<div className="inlineStuff">
						<h1 className="text-center">This is Art</h1>
					</div>
				</div>
			</Parallax>
			<div>
				<TheSlides />
			</div>
			<div>
				<App />
			</div>

			<div style={{ height: "100vh" }}></div>
		</div>
	);
};

export default Home;
