import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import heart from "../../Assets/Projects/heart.png";
import energy from "../../Assets/Projects/energy.png";
import stroke from "../../Assets/Projects/stroke.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={energy}
              isBlog={false}
              title="Energy Efficiency"
              description="Tôi thực hiện phân tích năng lượng bằng cách sử dụng 12 hình dạng tòa nhà khác nhau được mô phỏng trong Ecotect. Các tòa nhà khác nhau về diện tích kính, phân bố diện tích kính và hướng, giữa các tham số khác. Tôi mô phỏng các cài đặt khác nhau dựa trên các đặc điểm đã đề cập để có được 768 hình dạng tòa nhà. Bộ dữ liệu bao gồm 768 mẫu và 8 tính năng, nhằm dự đoán hai phản hồi giá trị thực. Nó cũng có thể được sử dụng như một vấn đề phân loại đa lớp nếu phản hồi được làm tròn đến số nguyên gần nhất."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://colab.research.google.com/drive/1P7vXVuznACGYmtKYwCqF4WCa8mLbuvay#scrollTo=IjygYmR0sZPQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stroke}
              isBlog={false}
              title="Stroke Prediction"
              description="Theo Tổ chức Y tế Thế giới (WHO), đột quỵ là nguyên nhân gây tử vong hàng đầu thứ hai trên toàn cầu, chiếm khoảng 11% tổng số ca tử vong.
              Bộ dữ liệu này được sử dụng để dự đoán liệu một bệnh nhân có khả năng bị đột quỵ dựa trên các thông số đầu vào như giới tính, tuổi, các bệnh lý khác nhau và tình trạng hút thuốc. Mỗi dòng trong dữ liệu cung cấp thông tin liên quan về bệnh nhân.."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://colab.research.google.com/drive/1-jMGwjmKZI_dWBAN7-aLXUZukkfUTBg4#scrollTo=fjvh7C5ssbX2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Heart Disease"
              description="Bệnh tim mạch cũng được biết đến với tên gọi các bệnh tim mạch (CVDs) là nguyên nhân gây tử vong hàng đầu trên toàn thế giới, ước tính là chiếm khoảng 17,9 triệu sinh mạng mỗi năm, tương đương với khoảng 32% tổng số tử vong trên toàn thế giới. CVDs là một nhóm các rối loạn của tim và mạch máu và bao gồm bệnh động mạch vành, bệnh mạch máu não, bệnh tim thấp và các bệnh lý khác. Bốn trong số 5 tử vong do CVDs là do đột quỵ và nhồi máu cơ tim, và một phần ba số tử vong này xảy ra sớm ở những người dưới 70 tuổi."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://colab.research.google.com/drive/1eYfhSzUxhLmVPh5uhh30G9rPV9QsfK_0#scrollTo=HnZMR0aAD_yF"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
