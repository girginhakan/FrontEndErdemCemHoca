// Kullanıcıdan bir ay ismi alın ve girilen ayın kaç gün olduğunu konsola yazdırın. (Switch Case)


let ay = prompt("Lütfen bir ay ismi yazınız").toLowerCase().trim();
switch (ay) {
    case "ocak": console.log("Ocak ayı 31 günden oluşur "); break;
    case "şubat": console.log("Şubat ayı 29 günden oluşur"); break;
    case "mart": console.log("Mart ayı 31 günden oluşur"); break;
    case "nisan": console.log("Nisan ayı 30 günden oluşur"); break;
    case "mayıs": console.log("Mayıs ayı 31 günden oluşur"); break;
    case "haziran": console.log("Haziran ayı 30 gün oluşur"); break;
    case "temmuz": console.log("Temmuz ayı 31 günden oluşur"); break;
    case "ağustos": console.log("Ağustos ayı 31 günden oluşur"); break;
    case "eylül": console.log("Eylül ayı 30 günden oluşur"); break;
    case "ekim": console.log("Ekim ayı 31 günden oluşur"); break;
    case "kasım": console.log("Kasım ayı 30 günden oluşur"); break;
    case "aralık": console.log("Aralık ayı 31 günden oluşur"); break;
    default: console.log("Hatalı giriş!!");
}

// BMW, Mercedes ve Audi Markaları için farklı renk çeşitlerine göre stok durumunu kontrol eden iç içe bir switch yapısı oluşturun. Marka ismini ve renk bilgisini gereken zamanlarda kullanıcıdan prompt olarak isteyin. Kullanıcı, ilgili marka ve renk bilgisini girdikten sonra konsolda Stokta Var veya Yok şeklinde bir mesaj yayınlayın. Stok durumunu elde edebilmek için yaratacağınız bir stokDurumu değişkenini stokta "Var" veya "Yok" olarak caselerin içerisinde güncelleyin. 

let marka = prompt("Lütfen bir marka yazınız (BMW, Mercedes ve Audi)").toLowerCase().trim();
let renk = prompt("Lütfen aradığınız marka için istediğiniz rengi yazınız  (Kırmızı, Mavi, Yeşil)").toLowerCase().trim();

switch (marka) {
    case "bmw":
        switch (renk) {
            case "kırmızı":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta yoktur.");
                break;
            case "mavi":
                console.log(marka + "  adlı marka arabanın " + renk + " rengi stokta vardır.");
                break;
            case "yeşil":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta vardır.");
                break;
            default:
                console.log("Hatalı renk seçimi yaptınız");
                break;
        }
    break;
    case "mercedes":
        switch (renk) {
            case "kırmızı":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta var.");
                break;
            case "mavi":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta yok.");
                break;
            case "yeşil":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta var.");
                break;
            default:
                console.log("Hatalı renk seçimi yaptınız");
                break;
        }
    break;
    case "audi":
        switch (renk) {
            case "kırmızı":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta yoktur.");
                break;
            case "mavi":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta vardır.");
                break;
            case "yeşil":
                console.log(marka + " adlı marka arabanın " + renk + " rengi stokta vardır.");
                break;
            default:
                console.log("Hatalı renk seçimi yaptınız");
                break;
        }
    break;
    default:
        console.log("Hatalı marka seçimi yaptınız");
        break;
}
