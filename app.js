const zorluk = document.getElementById("zorluk")
const tahmin = document.getElementById("tahmin")
const yazi = document.getElementById("yazi")
const btn = document.getElementById("btn")
const badge = document.querySelector(".badge")
const yenile = document.getElementById("yenile")
const öncekiTahmin = document.querySelector(".onceki-tahminler")






yenile.style.display = "none"


yenile.addEventListener("click", refresh)
function refresh() {
    location.reload()//!oyunu kaybettiğinde sayfayı butona basarak yeniledik.
}


let random;//!dışarıda tanımladık
let hak = 3; //!hak tanıdık.
btn.disabled = true //! butona basılmasın
tahmin.disabled = true//!tahmine basılmasın

zorluk.addEventListener("change", function zorlukAyarla() {//!zorluk ayarladık
    //!içeride değiştirdik
    let carpan = Number(zorluk.value) //! zorluk secildiğinde değerini al ve random sayı ile çarp
    random = Math.round(Math.random() * carpan) //! random tahmin seçtirdik.
    console.log(random);
    btn.disabled = false //!butona basılsın.
    tahmin.disabled = false //!zorluk seçtiğinde tahminde açılsın
    badge.textContent = `${hak} hakkın kaldı.` //! butonun yanında hakkı gösterdik
    document.title = `Tahmin Oyunu ${hak}`
    zorluk.disabled = true

})

btn.addEventListener("click", karsilastir);//!butona tıkladıgında tahmini karsılaştırmak istiyoruz.
tahmin.addEventListener("keydown", function press(event) {
    if (event.keyCode == 13) {
        karsilastir()
    }
})
function karsilastir() {
    let tahminNum = Number(tahmin.value)//!tahmin edilen sayı tahmin e eşit ise;
    if (isNaN(tahminNum)) {//!eğer girilen değer string ise oynatmasın.
        yaziHandle("Oyun yalnızca rakam ile oynanır", ["text-primary", "text-warning"], "text-danger")
    } else { //! number yazdıysa oyun devam etsin.
        let li = document.createElement("li")
        li.textContent = tahminNum
        li.className = "list-group-item"
        öncekiTahmin.append(li)
        hak--//!hak her tıklandıgında 1 eksildi
        badge.textContent = `${hak} hakkın kaldı.` //! butonun yanında hakkı gösterdik
        document.title = `Tahmin Oyunu ${hak}`

        if (tahminNum < random) {//!tahmin doğru sayıdan küçük ise
            yaziHandle("Daha büyük bir sayı gir.", ["text-primary", "text-warning"], "text-danger")
            btnHandle(["btn-primary", "btn-warning"], "btn-danger")
            li.classList.add("bg-danger")
        } else if (tahminNum > random) {//!tahmin doğru sayıdan büyük ise
            yaziHandle("Daha küçük bir sayı gir.", ["text-primary", "text-danger"], "text-warning")
            btnHandle(["btn-primary", "btn-danger"], "btn-warning")
            li.classList.add("bg-warning")

        } else { //!kazandıysak
            yaziHandle("Tebrikler kazandın!", ["text-danger", "text-warning", "text-primary"], "text-success")
            btnHandle(["btn-primary", "btn-danger", "btn-warning"], "btn-success", true)
            tahmin.disabled = true //!zorluk seçtiğinde tahminde açılsın
            yenile.style.display = "block"
            li.classList.add("bg-success")



        }
        if (hak == 0 && random != tahminNum) { //!hak tanıdık ve kaybettiğinde ki koşulları yazdık
            yaziHandle("Oyunu kaybettin!", ["text-warning", "text-danger"], ("text-secondary"))
            btnHandle(["btn-danger", "btn-warning"], "btn-secondary", true)
            tahmin.disabled = true //!zorluk seçtiğinde tahminde açılsın
            yenile.style.display = "block"

        }
    }
    tahmin.value = " "

}

function yaziHandle(icerik, kaldirilacak, eklenecek) {
    yazi.textContent = icerik
    for (let i of kaldirilacak) {
        yazi.classList.remove(i)
    }
    yazi.classList.add(eklenecek)
}

function btnHandle(kaldirilacak, eklenecek, dis = false) {

    for (let i of kaldirilacak) {
        btn.classList.remove(i)
    }
    btn.classList.add(eklenecek)
    btn.disabled = dis


}
