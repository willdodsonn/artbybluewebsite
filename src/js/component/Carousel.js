import React from "react";
import Carousel from "react-bootstrap/Carousel";

function TheSlides(props) {
	return (
		<div>
			<div className="slideSize">
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={props.Img1}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>a young schoolboy with his nice painting</h3>
							<p>wonder what he'll do next</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={props.Img2}
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>uh oh</h3>
							<p>blue smoking ciggies</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={props.Img3}
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>this ain't blues bruh</h3>
							<p>fuck you</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default TheSlides;
