import React, { useEffect } from "react";
import Aos from "aos";

const saverImg =
	"https://c4.wallpaperflare.com/wallpaper/574/417/275/aesthetic-vaporwave-wallpaper-preview.jpg";

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
						data-aos-offset="300"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src={saverImg}
								alt="Card image cap"
							/>
							<div className="card-body bg-dark">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									these cards are underdeveloped
								</p>

								<button className="btn btn-light">
									check this out
								</button>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="300"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src={saverImg}
								alt="Card image cap"
							/>
							<div className="card-body bg-dark">
								<h5 className="card-title">Card titles</h5>
								<p className="card-text">
									these cards are underdeveloped
								</p>
								<button className="btn btn-light">
									check this out
								</button>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="300"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src={saverImg}
								alt="Card image cap"
							/>
							<div className="card-body bg-dark">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									these cards are underdeveloped
								</p>
								<button className="btn btn-light">
									check this out
								</button>
							</div>
						</div>
					</div>
					<div
						data-aos="fade-zoom-in"
						data-aos-offset="300"
						className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
						<div className="card p-0 overflow-hidden h-100 shadow">
							<img
								className="card-img-top"
								src={saverImg}
								alt="Card image cap"
							/>
							<div className="card-body bg-dark">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									these cards are underdeveloped
								</p>
								<button className="btn btn-light">
									check this out
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
