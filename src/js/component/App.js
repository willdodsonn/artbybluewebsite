import React, { useEffect } from "react";
import Aos from "aos";

function App() {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div>
			<section className="py-4 py-lg-5 container">
				<div className="row">
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="100"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700450751.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="100"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700450751.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card titles</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="200"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700450751.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="200"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700450751.jpg"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
