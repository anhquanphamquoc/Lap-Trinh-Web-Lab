function trim(chuoi) {
    // Cắt các khoảng trắng ở đầu chuỗi
    let i = 0;
    let str = chuoi;
    while (chuoi.charCodeAt(i) == 32) {
      str = chuoi.substr(i + 1, chuoi.length - (i + 1)); // substr(vị trí bắt đầu, số ký tự)
      i++;
    }
  
    // Cắt các khoảng trắng ở cuối chuỗi
    let str2 = str;
    let j = str.length - 1;
    while (str.charCodeAt(j) == 32) {
      str2 = str.substr(0, j);
      j--;
    }
  
    return str2;
  }
  
  function PhanTich(chuoi) {
    chuoi = trim(chuoi);
  
    // Tìm khoảng trắng đầu tiên
    let d1 = chuoi.indexOf(" "); // trả về -1 nếu không tìm thấy.
    //console.log(d1)
    // Tìm khoảng trắng đầu tiên từ cuối chạy lên (lastIndexOf)
    let d2 = chuoi.lastIndexOf(" ");
    //console.log(d2)
    // Cắt và xuất chuỗi họ
    document.getElementById("Ho").innerText = chuoi.substr(0, d1);
    //console.log(chuoi.substr(0, d1))
    // Cắt và xuất chữ lót
    document.getElementById("Lot").innerText = chuoi.slice(d1 + 1, d2);
    //console.log(chuoi.slice(d1 + 1, d2))
    // Cắt và xuất tên
    document.getElementById("Ten").innerText = chuoi.slice(d2 + 1, chuoi.length);
    //console.log(chuoi.slice(d2 + 1, chuoi.length))
  }
  
  document.getElementById("phantich").addEventListener("click", function () {
    PhanTich(document.getElementById("HoTen").value);
  });
  