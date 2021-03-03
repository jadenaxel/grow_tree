import { FC } from "react";

const Grow: FC = (): JSX.Element => {
	return (
		<div className="grow d-flex justify-content-between">
			<img className="left" src="/assets/right.png" alt="left" />
			<div className="growContent d-flex flex-column justify-content-center align-items-center">
				<img className="tree" src="/assets/tree.png" alt="tree" />
				<div className="description d-flex flex-column">
					<p>As an environmental charity, we’re on a mission to make it simple for everyone to help the environment by planting each one tree!</p>
					<button className="btn btn-outline-success btn-button" type="button">PLANT A TREE NOW</button>
				</div>
			</div>
			<img className="right" src="/assets/right.png" alt="right" />
		</div>
	)
}

export default Grow;