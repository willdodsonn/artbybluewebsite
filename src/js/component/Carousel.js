import React from "react";
import Carousel from "react-bootstrap/Carousel";



function TheSlides() {
	return (
		<div className="slideSize">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOXWxNrlFNtB37C05yxFXm2qTqYEWbK374rWPMukWlNsZXrAG_MHZtQJap1xB0LpSXvQ&usqp=CAU"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>sum came in the mail today</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i1.sndcdn.com/artworks-000201256683-45rbuy-t500x500.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>deez nuts</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://i1.sndcdn.com/avatars-000182957187-axj0eh-t500x500.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>ha </h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default TheSlides;
