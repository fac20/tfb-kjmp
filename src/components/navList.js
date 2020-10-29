import React from "react";
import Button from "./../styled-components/Button";
import List from "./../styled-components/List";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
	const location = useLocation();
	const path = location.pathname.split("/");
	path.pop();
	let joinPath = path.join("/");
	return (
		<>
			<ul>
				<Link to={`${joinPath}/laws`}>
					<List>
						<Button>LAWS</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/thingstodo`}>
					<List>
						<Button>THINGS TO DO</Button>
					</List>
				</Link>
				<Link to={`${joinPath}/experiences`}>
					<List>
						<Button>EXPERIENCES</Button>
					</List>
				</Link>
				{/* <Link to={`${joinPath}/businesses`}>
					<List>
						<Button>BUSINESSES</Button>
					</List>
				</Link> */}
			</ul>
		</>
	);
}
