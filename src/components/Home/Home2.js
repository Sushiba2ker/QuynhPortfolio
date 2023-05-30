import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							Là một Nhà phân tích dữ liệu, tôi không ngừng trau dồi các kỹ năng
							của mình. Tôi tin rằng tôi đã nắm chắc về nó. 🤷‍♂️
							<br />
							<br />
							Chuyên môn của tôi bao gồm các ngôn ngữ lập trình cổ điển như
							<b className="purple"> Python, SQL, Scala và R. </b>
							<br />
							<br />
							Các lĩnh vực tôi quan tâm bao gồm &nbsp;
							<b className="purple">
								phân tích dữ liệu tài chính và kinh doanh của công ty để đưa ra
								các quyết định chiến lược, trong lĩnh vực y tế và dược phẩm,
								phân tích dữ liệu y tế để nghiên cứu{" "}
							</b>{" "}
							và{" "}
							<b className="purple">cải thiện chất lượng chăm sóc sức khỏe.</b>
							<br />
							<br />
							Bất cứ khi nào có thể, tôi cũng áp dụng niềm đam mê của mình vào
							việc phát triển các giải pháp với
							Beam <b className="purple">Google Cloud Dataflow</b> và
							<b className="purple">
								{" "}
								Apache
							</b>
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/NguyennQuynh"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.facebook.com/quynh.nguyenn.33865"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillFacebook />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/nguyễnn-quỳnh-507778258/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/n_quynh304/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
