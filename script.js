let save = [];
let koordinatV1 = [];
let koordinatV2 = [];

function sudutVektor() {
    // koordinat vektor 1
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let z1 = parseFloat(document.getElementById('z1').value);
    // koordinat vektor 2
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);
    let z2 = parseFloat(document.getElementById('z2').value);

    // Menghitung Sudut
    let dotProduct = x1 * x2 + y1 * y2 + z1 * z2;
    let panjangV1 = Math.sqrt(x1 ** 2 + y1 ** 2 + z1 ** 2);
    let panjangV2 = Math.sqrt(x2 ** 2 + y2 ** 2 + z2 ** 2);
    // rumus sudut antara 2 vektor
    let sudut = Math.acos(dotProduct / (panjangV1 * panjangV2));
    // Mengubah radian menjadi sudut dalam derajat
    sudut = (sudut * 180) / Math.PI;
    return sudut;
}

function reset() {
    document.getElementById('x1').value = "";
    document.getElementById('y1').value = "";
    document.getElementById('z1').value = "";
    document.getElementById('x2').value = "";
    document.getElementById('y2').value = "";
    document.getElementById('z2').value = "";
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("cek").innerHTML = "";
    document.getElementById("tampil").innerHTML = "";
}

function cekInput() {
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;
    let z1 = document.getElementById('z1').value;
    let x2 = document.getElementById('x2').value;
    let y2 = document.getElementById('y2').value;
    let z2 = document.getElementById('z2').value;

    if (x1 === "" || y1 === "" || z1 === "" || x2 === "" || y2 === "" || z2 === "") {
        document.getElementById("cek").innerHTML = "Harap isi semua koordinat terlebih dahulu!";
    } else {
        document.getElementById("cek").innerHTML = "";
        let hasil = sudutVektor();
        hasil = hasil.toFixed(2);
        document.getElementById("hasil").innerHTML = hasil + " derajat";
    }
    return hasil;
}

function simpan() {
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;
    let z1 = document.getElementById('z1').value;
    let x2 = document.getElementById('x2').value;
    let y2 = document.getElementById('y2').value;
    let z2 = document.getElementById('z2').value;

    let hasil = sudutVektor();
    hasil = hasil.toFixed(2);
    koordinatV1.push([x1+"i",y1+"j",z1+"k"]);
    koordinatV2.push([x2+"i",y2+"j",z2+"k"]);
    save.push(hasil);
}

function tampil() {
    let x1 = document.getElementById('x1').value;
    let y1 = document.getElementById('y1').value;
    let z1 = document.getElementById('z1').value;
    let x2 = document.getElementById('x2').value;
    let y2 = document.getElementById('y2').value;
    let z2 = document.getElementById('z2').value;

    let sLen = save.length;
    if (sLen > 0) {
        let tampilan = "";
        for (let i = 0; i < sLen; i++) {
            tampilan = tampilan + koordinatV1[i]+" dan "+koordinatV2[i]+ " = " + save[i] + " derajat<br>";
        }
        document.getElementById("tampil").innerHTML = tampilan;
    } else {
        document.getElementById("tampil").innerHTML = "Belum ada data yang disimpan.";
    }
}

function hapus() {
    while (save.length > 0){
        save.pop();
    }
    document.getElementById("tampil").innerHTML = "";
}
