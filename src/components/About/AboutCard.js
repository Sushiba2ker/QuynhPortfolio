import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Xin chào mọi người, tôi là <span className="purple">Nguyễn Thanh Quỳnh </span>
            đến từ <span className="purple"> đến từ thành phố Phan Thiết.</span>
            <br /> Tôi là sinh viên năm thứ hai theo đuổi bằng Cử nhân tại Đại học Công Nghệ Thành phố Hồ Chí Minh
            <br />
            <br />
            Ngoài việc học phân tích dữ liệu, tôi còn có một số hoạt động khác mà tôi thích làm!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Nghe nhạc
            </li>
            <li className="about-activity">
              <ImPointRight /> Ngắm cảnh
            </li>
            <li className="about-activity">
              <ImPointRight /> Nấu Ăn
            </li>
            <li className="about-activity">
              <ImPointRight /> Đi tour
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Cố gắng xây dựng những thứ mới tạo nên sự khác biệt!""{" "}
          </p>
          <footer className="blockquote-footer">Quỳnh babe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
