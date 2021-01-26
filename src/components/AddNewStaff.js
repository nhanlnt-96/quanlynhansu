import React from 'react';

export const AddNewStaff = () => {
    return (
        <div className="AddStaff">
            <div className="personal-info">
                <div className="general-info">
                    <div className="box1">
                        <div className="content">
                            <label for="staff-id">Mã nhân viên</label>
                            <input name="staff-id" type="number" required={true} />
                        </div>

                        <div className="content">
                            <label for="profile-id">Số hồ sơ</label>
                            <input name="profile-id" type="text" />
                        </div>

                        <div className="content">
                            <label for="fullname">Họ và tên</label>
                            <input name="fullname" type="text" required={true} />
                        </div>

                        <div className="content">
                            <label for="nickname">Tên gọi khác</label>
                            <input name="nickname" type="text" />
                        </div>

                        <div className="content">
                            <label for="gender">Giới tính</label>
                            <select name="gender" required={true}>
                                <option selected>Lựa chọn</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                            </select>
                        </div>
                        
                        <div className="content">
                            <label for="mariage">Hôn nhân</label>
                            <select name="mariage">
                                <option selected>Lựa chọn</option>
                                <option>Độc thân</option>
                                <option>Đã kết hôn</option>
                                <option>Ly dị</option>
                            </select>
                        </div>
                    </div>

                    <div className="box2">
                        <h1>box2</h1>
                    </div>
                </div>

                <div className="personal-id">
                    <div className="box1">
                        <label for="staff-id">Mã nhân viên</label>
                        <input name="staff-id" type="number" required={true} />
                    </div>
                    <div className="box2">

                    </div>
                </div>

                <div className="personal-add">
                    <div className="box1">
                        <label for="staff-id">Mã nhân viên</label>
                        <input name="staff-id" type="number" required={true} />
                    </div>
                    <div className="box2">

                    </div>
                </div>
            </div>

            <div className="personal-contact">

            </div>
        </div>
    );
}