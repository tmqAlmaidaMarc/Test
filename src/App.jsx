import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { jsPlumb } from "jsplumb";
import { useLayoutEffect } from "react";

function App() {
	const instance = jsPlumb.getInstance({});
	useLayoutEffect(() => {
		instance.setContainer("diagram");

		instance.bind("ready", () => {
			instance.draggable("control1", { containment: true });
			instance.draggable("control2", { containment: true });

			instance.addEndpoint("control1", {
				endpoint: "Dot",
				anchor: ["RightMiddle"],
				isSource: true
			});

			instance.addEndpoint("control2", {
				endpoint: "Dot",
				anchor: ["LeftMiddle"],
				isTarget: true
			});
		});
	}, [instance]);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3">
					<div id="toolbox" className="justify-content-center">
						<div className="control search">
							<i className="fa fa-search"></i> Search
						</div>
						<div className="control filter">
							<i className="fa fa-filter"></i> Filter
						</div>
						<div className="control sort">
							<i className="fa fa-sort"></i> Sort
						</div>
						<div className="control email">
							<i className="fa fa-envelope-o"></i> Email
						</div>
					</div>
				</div>
				<div className="col-md-9">
					<div id="diagram" style={{ height: "90vh", position: "relative" }}>
						<div
							id="control1"
							className="control"
							style={{ left: "50px", top: "50px" }}
						>
							Control 1
						</div>
						<div
							id="control2"
							className="control"
							style={{ left: "300px", top: "200px" }}
						>
							Control 2
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
