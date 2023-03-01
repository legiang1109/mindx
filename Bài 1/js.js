function tinhTongSoNguyenTo() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let tong = 0;
    let danhsach = []
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            danhsach.push(i)
            document.getElementById("list-numbers").innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + danhsach.join(",");
            tong += i;
        }
    }
    document.getElementById("ketqua").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là " + tong;
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}