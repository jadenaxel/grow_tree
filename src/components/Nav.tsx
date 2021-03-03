import { FC } from "react";

const Nav: FC = (): JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<a className="navbar-brand" href="#!">
					<img src="/assets/logo.png" alt="Logo" />
				</a>
				<button className="navbar-toggler btn-outline-success btn-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fas fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse menu-list justify-content-center" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#!">Main</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="#!">Info</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#!">Contact</a>
						</li>
						<button className="btn btn-outline-success btn-button" type="button">Plant Now</button>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Nav;