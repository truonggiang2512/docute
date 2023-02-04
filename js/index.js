function tinhTienLuong(){
    //input
    debugger;
    var soNgayLam= document.getElementById('soNgayLam').value;
    var tongTienLuong=0;
    var luongMotNgay=100000;
    //progress
    tongTienLuong=soNgayLam*luongMotNgay;
    //output
    document.getElementById('tongTienLuong').innerHTML=tongTienLuong.toLocaleString();;
}
function tinhDiemTrungBinh(){
    //input
    var soThuNhat=document.getElementById('soThuNhat').value;
    var soThuHai=document.getElementById('soThuHai').value;
    var soThuBa=document.getElementById('soThuBa').value;
    var soThuTu=document.getElementById('soThuTu').value;
    var soThuNam=document.getElementById('soThuNam').value;
    var diemTrungBinh=0;
    //progress
    diemTrungBinh=(Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam)) / 5;
    //output
    document.getElementById('diemTrungBinh').innerHTML=diemTrungBinh.toLocaleString();;

}
function quyDoiTien(){
    //input
    var tienUSD=document.getElementById('nhapUSD').value;
    var motUSD=23500;
    var tienQuyDoi=0;
    //progress
    tienQuyDoi=tienUSD*motUSD;
    //output
    document.getElementById('quyDoiTien').innerHTML=tienQuyDoi.toLocaleString();;
}
function tinhChieuDaiChieuRong(){
    //input
    var chieuDai=document.getElementById('chieuDai').value;
    var chieuRong=document.getElementById('chieuRong').value;
    var chuVi=0;
    var dienTich=0;
    //progress
    chuVi=(Number(chieuDai)+Number(chieuRong))*2;
    dienTich=chieuDai*chieuRong;
    //output
    document.getElementById('chuVi').innerHTML=chuVi;
    document.getElementById('dienTich').innerHTML=dienTich;
    
}
function tinhTong2KiSo(){
    //input 
    var soTuNhien=document.getElementById('soTuNhien').value;
    var tong2KySo = 0;
    //progress
   var soHangChuc = Math.floor(soTuNhien / 10);
   var soHangDonVi = Math.floor(soTuNhien % 10);
   tong2KySo= soHangChuc + soHangDonVi;
   //output
   document.getElementById('tong2So').innerHTML=tong2KySo;

}