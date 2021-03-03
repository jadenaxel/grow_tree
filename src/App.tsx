import { FC } from "react";
import Nav from "./components/Nav";
import Grow from "./components/grow";
import Social from "./components/socialMedia";

const App: FC = (): JSX.Element => {
	return (
		<div className="App">
			<div className="container">
				<Nav />
				<Grow />
				<Social />
			</div>
		</div>
	);
}

export default App;
