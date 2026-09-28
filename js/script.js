// ================================
// FORM LIÊN HỆ
// ================================

const form = document.getElementById("form-lien-he");

const thongBao = document.getElementById("thong-bao");


form.addEventListener("submit", function(event) {

    // Không tải lại trang
    event.preventDefault();


    // Lấy tên người gửi
    const ten = document.getElementById("ten").value;


    // Hiện thông báo
    thongBao.textContent =
        "Cảm ơn " + ten + "! Mình đã nhận được lời nhắn của bạn ❤️";


    // Xóa dữ liệu trong form
    form.reset();

});


// ================================
// HIỆU ỨNG MENU KHI CUỘN
// ================================

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.05)";
    }

});