import React from "react";
import { Parallax } from "react-parallax";
import App from "./App";
//include images into your bundle
import TheSlides from "./Carousel";
//create your first component

const image1 =
	"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";

const Home = () => {
	return (
		<div>
			<Parallax bgImage={image1} strength={400}>
				<div style={{ height: 900 }}>
					<div className="inlineStuff">
						<h1 className="text-center">welcome</h1>
					</div>
				</div>
			</Parallax>
			<div>
				<TheSlides
					Img1="https://bloximages.newyork1.vip.townnews.com/hometownnewsbrevard.com/content/tncms/assets/v3/editorial/5/47/5477f8c6-b347-11eb-9652-ffe3a5e4efd0/609c10b0ad1d7.image.jpg?resize=1200%2C1600"
					Img2="https://assets.bigcartel.com/assets/310677/E214FD92-D346-4032-B087-6A03BD0D8F8B.jpeg?w=2400&h=2400&fit=clip"
					Img3="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
				/>
			</div>
			<div>
				<App />
				<App />
			</div>

			<div style={{ height: "100vh" }}></div>
		</div>
	);
};

export default Home;
