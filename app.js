const zorluk = document.getElementById("zorluk")
const tahmin = document.getElementById("tahmin")
const yazi = document.getElementById("yazi")
const btn = document.getElementById("btn")
const badge = document.querySelector(".badge")


let random;//!dışarıda tanımladık
let hak = 3; //!hak tanıdık.
btn.disabled = true //! butona basılmasın

zorluk.addEventListener("change", function zorlukAyarla() {//!zorluk ayarladık
    //!içeride değiştirdik
    let carpan = Number(zorluk.value) //! zorluk secildiğinde değerini al ve random sayı ile çarp
    random = Math.round(Math.random() * carpan) //! random tahmin seçtirdik.
    console.log(random);
    btn.disabled = false //!butona basılsın.
    badge.textContent = `${hak} hakkın kaldı.` //! butonun yanında hakkı gösterdik


})

btn.addEventListener("click", karsilastir);//!butona tıkladıgında tahmini karsılaştırmak istiyoruz.
function karsilastir() {
    hak--//!hak her tıklandıgında 1 eksildi
    badge.textContent = `${hak} hakkın kaldı.` //! butonun yanında hakkı gösterdik
    let tahminNum = Number(tahmin.value)//!tahmin edilen sayı tahmin e eşit ise;
    if (tahminNum < random) {//!tahmin doğru sayıdan küçük ise
        yazi.textContent = "Daha büyük bir sayı gir."
        yazi.classList.remove("text-primary", "text-warning")
        yazi.classList.add("text-danger")
        btn.classList.remove("btn-primary", "btn-warning")
        btn.classList.add("btn-danger")
    } else if (tahminNum > random) {//!tahmin doğru sayıdan büyük ise
        yazi.textContent = "Daha küçük bir sayı gir."
        yazi.classList.remove("text-primary", "text-danger")
        yazi.classList.add("text-warning")
        btn.classList.remove("btn-primary", "btn-danger")
        btn.classList.add("btn-warning")
    } else { //!kazandıysak
        yazi.textContent = "Tebrikler kazandın!"
        yazi.classList.remove("text-danger", "text-warning", "text-primary")
        yazi.classList.add("text-success")
        btn.classList.remove("btn-primary", "btn-danger", "btn-warning")
        btn.classList.add("btn-success")
        btn.disabled = true
    }
    if (hak == 0 && random != tahminNum) { //!hak tanıdık ve kaybettiğinde ki koşulları yazdık
        yazi.textContent = "Oyunu kaybettin!"
        yazi.classList.remove("text-warning", "text-danger")
        yazi.classList.add("text-secondary")
        btn.classList.remove("btn-danger", "btn-warning")
        btn.classList.add("btn-secondary")

        btn.disabled = true

    }
}

