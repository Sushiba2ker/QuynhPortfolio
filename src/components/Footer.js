import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Designed and Developed by Thanh Quynh</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year} Thanh Quynh</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/NguyennQuynh"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.facebook.com/quynh.nguyenn.33865"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillFacebook />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/nguyễnn-quỳnh-507778258/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/n_quynh304/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
