import { FC } from "react";
import Nav from "./components/Nav";

const App: FC = (): JSX.Element => {
	return (
		<div className="App">
			<div className="container">
				<Nav />
			</div>
		</div>
	);
}

export default App;
