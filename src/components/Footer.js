import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";
function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
				<LinkedInIcon
					className="icons"
					onClick={(event) =>
						window.open("https://www.linkedin.com/in/kyleechen/", "_blank")
					}
				/>
				<EmailIcon
					className="icons"
					onClick={(event) => (window.location = "mailto:kchen727@uwo.ca")}
				/>
				<GithubIcon
					className="icons"
					onClick={(event) =>
						window.open("https://github.com/elyknehc", "_blank")
					}
				/>
			</div>

			<p> &copy; 2022 kylechen.com </p>
		</div>
	);
}

export default Footer;
