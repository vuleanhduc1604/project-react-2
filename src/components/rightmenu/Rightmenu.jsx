import React from 'react';
import Activeservices from '../activeservices/Activeservices';
const Rightmenu = () => {
    return (
        <div className="right-side-bar text-center">
            <div className="chuong-trinh-noi-bat-wrapper">
                <p className="chuong-trinh-noi-bat-header">Chương trình nổi bật</p>
                <Activeservices/>
            </div>
            <div className="chu-de-dao-tao-wrapper">
                <div className="chu-de-dao-tao-header-wrapper">
                    <p className="chu-de-dao-tao-header">Chủ đề đào tạo</p>
                </div>
                <div className="chu-de-dao-tao-content-wrapper">
                    <p className="chu-de-dao-tao-content">Đào tạo Giám đốc/Quản Lý</p>
                    <p className="chu-de-dao-tao-content">Đào tạo Nghiệp vụ chuyên môn</p>
                    <p className="chu-de-dao-tao-content">Đào tạo Kỹ năng mềm</p>
                </div>
            </div>
        </div>
    );
};

export default Rightmenu;