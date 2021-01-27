import React, { useState } from 'react';
import NationList from '../data/NationList.json';

export const AddNewStaff = () => {
    return (
        <div className="AddStaff">
            <div className="general-info">
                <div className="box1">
                    <label>Mã nhân viên
                            <input type="number" required={true} />
                    </label>

                    <label>Số hồ sơ
                            <input type="text" />
                    </label>

                    <label>Họ và tên
                            <input type="text" required={true} />
                    </label>

                    <label>Tên gọi khác
                            <input type="text" />
                    </label>

                    <label>Giới tính
                            <select required={true}>
                            <option defaultValue="Lựa chọn">Lựa chọn</option>
                            <option>Nam</option>
                            <option>Nữ</option>
                        </select>
                    </label>

                    <label>Hôn nhân
                            <select>
                            <option defaultValue="Lựa chọn">Lựa chọn</option>
                            <option>Độc thân</option>
                            <option>Đã kết hôn</option>
                            <option>Ly dị</option>
                        </select>
                    </label>

                    <label>Dân tộc
                            <select>
                            {
                                NationList.map((nation) => (
                                    <option key={nation.id}>{nation.name}</option>
                                ))
                            }
                        </select>
                    </label>
                </div>

                <div className="box2">
                    <h1>box2</h1>
                </div>
            </div>

            <div className="personal-id">
                <div className="box1">

                </div>

                <div className="box2">

                </div>
            </div>

            <div className="personal-add">
                <div className="box1">

                </div>

                <div className="box2">

                </div>
            </div>
        </div>
    );
}