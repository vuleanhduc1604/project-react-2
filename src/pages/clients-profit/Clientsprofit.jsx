import React from 'react';
import Leftmenu from '../../components/leftmenu/Leftmenu';
import Rightmenu from '../../components/rightmenu/Rightmenu';
import Contact from '../../components/contact/Contact';
import '../../css/loiichkhachhang.css'
const Clientsprofit = () => {
    return (
        <div>
        <div className="bg-wrapper">
          <img src="bg-loi-ich-khanh-hang.PNG" alt="" className="bg" />
        </div>
        <div className="body d-flex justify-content-between">
          <Leftmenu></Leftmenu>
          <div className="middle-content">
            <div className="middle-content-firs d-flex justify-content-between align-items-center">
              <div className="middle-content-first-content-wrapper">
                <p className="middle-content-first-content">Dịch vụ của SK Consulting mang lại sự phát triển bền vững cho khách hàng trên các lĩnh vực tư vấn quản lý, khảo sát đánh giá, đào tạo và phát triển nguồn nhân lực của tổ chức.</p>
              </div>
              <img src="Picture3.webp" alt="" className="middle-content-img" />
            </div>
            <div className="middle-content-second">
              <p className="middle-content-second-header">Dịch vụ Tư vấn quản lý</p>
              <div className="middle-content-wrapper">
                <p className="middle-content-header">SK Consulting cung cấp dịch vụ Tư vấn trên các lĩnh vực như sau:</p>
                <ul className="middle-content-list">
                  <li><span className="bold">Tư vấn Agile:</span> Dịch vụ tư vấn này giúp doanh nghiệp đánh giá thực trạng của doanh nghiệp, xây dựng chiến lược theo mục tiêu và chuyển đổi mô hình hoạt động linh hoạt và hiệu quả. Thiết lập văn hóa tổ chức và phương pháp lãnh đạo/quản lý Agile. Từ đó, nâng cao giá trị khách hàng và giúp doanh nghiệp phát triển bền vững. Chi tiết dịch vụ Tư vấn Agile tại đây</li>
                  <li><span className="bold">Tư vấn Nhân sự:</span> Dịch vụ tư vấn này giúp doanh nghiệp rà soát toàn bộ các hoạt động về quản trị nhân sự trong tổ chức, xây dựng chiến lược nhân sự, hoàn thiện cơ cấu tổ chức, mô tả công việc; hoạch định nguồn nhân lực, tuyển dụng, đánh giá hiệu suất theo KPI, OKR. Xây dựng lương thưởng, cơ chế đãi ngộ và các phương pháp đào tạo, phát triển nhân tài. từ đó xây dựng một đội ngũ nhân sự chất lượng, linh hoạt và phù hợp với từng vị trí theo cơ cấu tổ chức được thiết lập. Chi tiết dịch vụ Tư vấn Nhân sự tại đây</li>
                  <li><span className="bold">Tư vấn Hoạt động:</span> Dịch vụ tư vấn này giúp doanh nghiệp đánh giá mức độ hiệu quả và chất lượng sản phẩm dịch vụ doanh nghiệp cung cấp; Đánh giá phương pháp quản lý bán hàng và Đánh giá mức độ hài lòng của khách hàng nội bộ cũng như bên ngoài. Từ đó đưa ra các giải pháp phù hợp theo từng thời kỳ để doanh nghiệp phát triển ngày càng bền vững. Chi tiết dịch vụ Tư vấn Quản trị hoạt động tại đây</li>
                </ul>
              </div>
            </div>
            <div className="middle-content-third">
              <p className="middle-content-second-header">Dịch vụ Khảo sát và Đánh giá năng lực</p>
              <div className="middle-content-wrapper">
                <p className="middle-content-header">SK Consulting cung cấp dịch vụ Khảo sát thị trường và Đánh giá năng lực trên các lĩnh vực sau:</p>
                <ul className="middle-content-list">
                  <li><span className="bold">Dịch vụ Khảo sát thị trường:</span> Dịch vụ này cung cấp cho doanh nghiệp các thông tin khách quan về thị trường và góc nhìn của khách hàng trong và ngoài doanh nghiệp khi thực hiện các sản phẩm và dịch vụ của doanh nghiệp như Khảo sát sự hài lòng khách hàng; Nghiên cứu hành vi khách hàng và Dịch vụ khách hàng bí mật từ đó giúp doanh nghiệp hiểu thực trạng của mình để xây dựng các giải pháp phù hợp với mục tiêu và phát triển bền vững. Chi tiết dịch vụ Khảo sát thị trường tại đây</li>
                  <li><span className="bold">Dịch vụ Đánh giá năng lực:</span> Dịch vụ này cung cấp cho doanh nghiệp đánh giá năng lực con người trong tổ chức như Đánh giá 360, Đánh giá năng lực hành vi; Đánh giá tính cách từ đó giúp doanh nghiệp hiểu rõ năng lực của ứng viên, của cán bộ cũng như mối quan hệ của các cán bộ/đơn vị trong doanh nghiệp mình để sắp xếp và điều chỉnh nguồn nhân lực, xây dựng văn hóa quản trị doanh nghiệp phù hợp với tổ chức. Chi tiết dịch vụ Đánh giá năng lực tại đây </li>
                </ul>
              </div>
            </div>
            <div className="middle-content-fourth">
              <p className="middle-content-second-header">Dịch vụ Đào tạo và phát triển nguồn nhân lực</p>
              <div className="middle-content-wrapper">
                <p className="middle-content-header">SK Consulting cung cấp dịch vụ Đào tạo và phát triển nguồn nhân lực với các bộ chương trình tiêu chuẩn kết hợp với đặc thù của từng doanh nghiệp. Chương trình đào tạo giúp doanh nghiệp phát triển năng lực cho các cá nhân trong tổ chức một cách có bài bản, có hệ thống từ đó giúp nâng cao chất lượng nguồn nhân sự cho tổ chức. Dịch vụ Đào tạo và phát triển nguồn nhân lực của SK Consulting gồm các chương trình. Chi tiết xem tại đây.</p>
                <ul className="middle-content-list">
                  <li>Bộ chương trình đào tạo dành Giám đốc/Trưởng phòng/Tổ trưởng đương chức và tiềm năng</li>
                  <li>Các chương trình đào tạo Nghiệp vụ chuyên môn</li>
                  <li>Các chương trình đào tạo Kỹ năng mềm</li>
                </ul>
              </div>
            </div>
          </div>
          <Rightmenu></Rightmenu>
        </div>
        <Contact></Contact>
      </div>
    );
};

export default Clientsprofit;