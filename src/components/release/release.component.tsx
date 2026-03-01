import { ReleaseContainer, ReleaseDesc, ReleaseTitle } from "./release.styles";

const Release = () => {
	return (
		<>
			<ReleaseContainer>
				<ReleaseTitle>
					Release <i>v </i>1.0.0{" "}
					<a
						href="#"
						target="_blank"
						rel="noreferrer noopener"
					>
						&#128206;
					</a>
				</ReleaseTitle>
				<ReleaseDesc>
					<li>
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
					<li>
						Redux Extended Tools
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
					<li>
						Redux Extended Tools
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
					<li>
						Razorpay Integration
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
					<li>
						Razorpay Integration
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
					<li>
						UI Overhaul
						<a
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
						</a>
					</li>
				</ReleaseDesc>
			</ReleaseContainer>
		</>
	);
};

export default Release;
