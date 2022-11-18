import React from 'react';
import Contact from '../../components/contact/Contact.jsx';
import Leftmenu from '../../components/leftmenu/Leftmenu.jsx';
import Rightmenu from '../../components/rightmenu/Rightmenu.jsx';
import '../../css/tuyendung.css'
const Tuyendung = () => {
    return (
        <div>
        <div className="bg-wrapper">
          <img src="bg-gioi-thieu.PNG" alt="" className="bg" />
        </div>
        <div className="body d-flex justify-content-between">
          <Leftmenu/>
          <div className="middle-content">
            <div className="first-content-wrapper d-flex align-items-center justify-content-between">
              <div className="komputer-wrapper d-flex align-items-center">
                <div className="komputer">
                  <img src="komputer.webp" alt="" className="komputer-img" />
                </div>
                <p className="komputer-desc">Chuyên viên<br />
                  Phát triển chương trình đào tạo</p>
              </div>
              <div className="number-wrapper d-flex align-items-center">
                <div className="number-desc-wrapper">
                  <p className="number-desc">Số lượng <br /> tuyển dụng:</p>
                </div>
                <div className="number-wrapper">
                  <p className="number">02</p>
                </div>
              </div>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Yêu cầu Công việc</p>
            </div>
            <div className="desc-content-wrapper">
              <p className="desc-list-header">1. Phát triển chương trình đào tạo</p>
              <ul className="desc-list">
                <li>Nghiên cứu, đề xuất áp dụng và cập nhật các chương trình đào tạo hiện có</li>
                <li>Nghiên cứu yêu cầu các khoá học theo yêu cầu thực tế của doanh nghiệp và đề xuất phương án triển khai khóa học phù hợp theo yêu cầu và theo tiêu chuẩn của công ty</li>
                <li>Tham gia xây dựng học liệu (bài giảng, video, bài tập, bài đánh giá...) các chương trình đào tạo theo hướng dẫn của Ban chuyên môn</li>
                <li>Rà soát tính hợp lý và thiết kế các tài liệu theo quy định của SK Consulting</li>
                <li>Đóng gói khoá học, chương trình đào tạo (đề cương, giáo trình, tài liệu hướng dẫn...)</li>
                <li>Tham gia các công việc khác theo phân công</li>
              </ul>
              <p className="desc-list-header">2.   Tham gia các Dự án phát triển và  hỗ trợ các Dự án Tư vấn</p>
              <ul className="desc-list">
                <li>Nghiên cứu, phát triển và xây dựng các tài liệu chuyên môn theo mục tiêu của các Dự án trong từng thời kỳ</li>
                <li>Tổng hợp các bài viết chuyên đề nghiên cứu, các tài liệu đào tạo, tài liệu ebook và tài liệu hỗ trợ tư vấn theo sự hướng dẫn của Ban chuyên môn</li>
              </ul>
              <p className="desc-list-header">3.   Điều phối đào tạo</p>
              <ul className="desc-list">
                <li>Thực hiện xác định nhu cầu đào tạo của các phòng/ban trong công ty</li>
                <li>Xây dựng kế hoạch đào tạo cho nội bộ công ty và các kế hoạch đào tạo đối với khách hàng đã được thống nhất bởi bộ phận Phát triển Quan hệ khách hàng</li>
                <li>Lên kế hoạch và thực hiện toàn bộ công tác tổ chức lớp học đảm bảo chất lượng theo yêu cầu</li>
                <li>Đánh giá chất lượng của khóa học với các tiêu chí đã được xác định theo tiêu chuẩn của SK Consulting</li>
              </ul>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Yêu cầu Ứng viên</p>
            </div>
            <div className="desc-content-wrapper">
              <ul className="desc-list">
                <li>Tốt nghiệp đại học hoặc sắp tốt nghiệp các trường đại học uy tín tại Việt Nam hoặc nước ngoài với các chuyên ngành Kinh tế; Quản trị nguồn nhân lực; Marketing; Quản trị kinh doanh; Ngoại ngữ; Tâm lý học…</li>
                <li>Có kiến thức tổng hợp về thị trường, kinh tế xã hội và sử dụng tiếng Anh tốt</li>
                <li>Có kỹ năng giao tiếp tốt; khả năng làm việc độc lập và làm việc nhóm hiệu quả; có khả năng tư duy và biết cách lập kế hoạch và tổ chức công việc khoa học</li>
              </ul>
            </div>
            <div className="desc-header-wrapper">
              <p className="desc-header">Quyền lợi</p>
              <ul className="desc-list">
                <li>Lương và cơ chế đãi ngộ: Lương theo vị trí, thưởng và chế độ đãi ngộ theo năng suất công việc</li>
                <li>Môi trường làm việc chuyên nghiệp, năng động cùng với các tổ chức lớn tại Việt Nam và khu vực</li>
                <li>Được đánh giá theo khung năng lực tiêu chuẩn, có cơ hội học hỏi và phát triển bản thân tốt</li>
                <li>Được đào tạo miễn phí các chương trình đào tạo nhằm phát triển bản thân phù hợp theo định hướng phát triển của công ty</li>
              </ul>
            </div>
            <Contact/>
          </div>
          <Rightmenu/>
        </div>
      </div>
    );
};

export default Tuyendung;