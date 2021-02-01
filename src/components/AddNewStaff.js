import React, { useState } from 'react';
import NationList from '../data_list/NationList.json';
import Nationality from '../data_list/Nationality.json';
import CityVietNam from '../data_list/CityVietNam.json';
import Dept from '../data_list/Dept.json';
import Position from '../data_list/Position.json';
import Level from '../data_list/Level.json';

export const AddNewStaff = () => {
    return (
        <div className="AddStaff">
            <div className="register-border">
                <div className="title-border">
                    <h1>THÊM NHÂN VIÊN MỚI</h1>
                </div>
                <div className="border-content">
                    <form>
                        <div className="container-left">
                            <div className="input">
                                <label for="staff_id">Mã nhân viên</label>
                                <input name="staff_id" type="number" />
                            </div>

                            <div className="input">
                                <label for="fullname">Họ và tên*</label>
                                <input name="fullname" type="text" required={true} />
                            </div>

                            <div className="input">
                                <label for="nickname">Tên gọi khác</label>
                                <input name="nickname" type="text" />
                            </div>

                            <div className="input">
                                <label for="dob">Ngày sinh*</label>
                                <input name="dob" type="date" required={true} />
                            </div>

                            <div className="input">
                                <label>Giới tính*</label>
                                <select required={true}>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>

                            <div className="input">
                                <label>Hôn nhân</label>
                                <select>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    <option>Độc thân</option>
                                    <option>Đã kết hôn</option>
                                    <option>Ly dị</option>
                                </select>
                            </div>

                            <div className="input">
                                <label>Dân tộc</label>
                                <select>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        NationList.map((nation) => (
                                            <option key={nation.id}>{nation.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input">
                                <label>Quốc tịch</label>
                                <select>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        Nationality.map((name) => (
                                            <option key={name.num_code}>{name.nationality}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input">
                                <label for="address">Nơi đăng ký hộ khẩu thường trú*</label>
                                <input name="address" type="text" required={true} />
                            </div>

                            <div className="input">
                                <label for="current-add">Nơi ở hiện tại*</label>
                                <input name="current-add" type="text" required={true} />
                            </div>
                        </div>

                        <div className="container-right">
                            <div className="input">
                                <label for="id_card">Số CMND/CCCD/Hộ chiếu*</label>
                                <input name="id_card" type="number" required={true} />
                            </div>

                            <div className="input">
                                <label for="issue_date">Ngày cấp*</label>
                                <input name="issue_date" type="date" required={true} />
                            </div>

                            <div className="input">
                                <label>Nơi cấp*</label>
                                <select required={true}>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        CityVietNam.map((city) => (
                                            <option key={city.code}>{city.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="input">
                                <label>Trình độ*</label>
                                <select required={true}>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        Level.map((level) => (
                                            <option key={level.id}>{level.level}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input">
                                <label for="school">Trường học</label>
                                <input name="school" type="text" />
                            </div>

                            <div className="input">
                                <label for="major">Chuyên ngành*</label>
                                <input name="major" type="text" />
                            </div>

                            <div className="input">
                                <label for="certificate">Chứng chỉ</label>
                                <input name="certificate" type="text" />
                            </div>

                            <div className="input">
                                <label for="probationary_date">Ngày thử việc*</label>
                                <input name="probationary_date" type="date" />
                            </div>

                            <div className="input">
                                <label>Bộ phận*</label>
                                <select required={true}>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        Dept.map((name) => (
                                            <option key={name.id}>{name.dept}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="input">
                                <label>Vị trí*</label>
                                <select required={true}>
                                    <option disabled={true} selected={true}>Lựa chọn</option>
                                    {
                                        Position.map((name) => (
                                            <option key={name.id}>{name.position}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="submit-btn">
                    <button>THÊM NHÂN VIÊN</button>
                </div>
            </div>
        </div>
    );
}