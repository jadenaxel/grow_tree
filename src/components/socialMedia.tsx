import { FC } from "react";

const Social: FC = (): JSX.Element => {
	return (
		<div className="socialMedia d-flex flex-column">
			<div className="video d-flex align-items-center">
				<img src="/assets/play.png" alt="Play"/>
			</div>
			<div className="social d-flex align-items-center justify-content-center">
				<i className="fab fa-facebook" />
				<i className="fab fa-instagram"></i>
				<i className="fab fa-youtube"></i>
			</div>
		</div>
	)
}
export default Social;
