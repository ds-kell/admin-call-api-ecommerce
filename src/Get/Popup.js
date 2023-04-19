import React from "react";

function Popup(props){
    return ( props.trigger) ? (
        <div>
            {/* <button>Chỉnh sửa</button>
            <button>Xoá</button> */}
            <button onClick={() => props.setTrigger(false)}>Đóng</button>
            {props.children}
        </div>
    ) : "";
}

export default Popup;