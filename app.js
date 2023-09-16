//? ilk bunlar yazıldı
const input = document.getElementById("inp")
const btn = document.querySelector("button")
const p = document.querySelector("p")
const select = document.getElementById("zorluk")




//? ilk bunlar yazıldı
btn.disabled = true //! zorluk seçilmediyse butona tıklayamam
input.disabled = true //! zorluk seçilmediyse inputa tıklayamam
btn.textContent = "Bir Zorluk Seç"



//? ilk bunlar yazıldı
let random; //! rastgele seçim yapıldı
//? ikinci yazılanlar
select.addEventListener("change", (e) => {//! hangi zorluğu girersem  bunun değerini değiştirecek
    let selectValue = Number(e.target.value)//!zorluk seçsin ve değerini alsın
    random = Math.round(Math.random() * selectValue) //!hangisine tıkladıysak onun valuesini random alsın.
    if (random != undefined) { //!eğer içinde böyle bir değer yoksa
        btn.disabled = false //!button acık olsun
        input.disabled = false//!input acık olsun
        btn.textContent = `Tahmin Et`//! button da tahmin et yazsın.
    }
    console.log(random);
})
//? 3. yazdıklarım (bitiş burası)
input.addEventListener("keydown", (e) => { //!enter ile bastığında komut algılansın.
    if (e.keyCode == 13) { //!eğer keycode 13 yani entera bastıgında
        tahminEt() //! tahmin et fonksiyonunu calıstırsın.
    }
})
//? ilk bunlar yazıldı
let kacKere = 0; //!kaç kere hakkın var?




//? ilk bunlar yazıldı
function tahminEt() {
    let value = Number(input.value) //! tahmin edilen sayıyı aldık ve
    kacKere++; //!bir arttırdık
    //? en son kazandım letini atadık
    let kazandım = false;
    if (kacKere < 4) { //! tahmini bildiysek eğer
        if (value == random) { //! doğru cevap eşit ise tahmine
            p.textContent = `Doğru bildin ${kacKere} denedin.` //! p etiketinde yazsın
            p.style.color = "green" //!yeşil renkte yazsın
            btn.disabled = true //!bilirsek button tekrardan tahmin ettirmesin. 
            input.disabled = true //!bilirsek button tekrardan tahmin ettirmesin. 
            kazandım = true //! kazanınca false yerine true'ya dönsün
        } else if (value < random) { //! doğru cevap küçük ise girilen cevaptan
            p.textContent = `Daha büyük bir değer gir.${3 - kacKere} hakkın kaldı`
            p.style.color = "red" //! yanlış tahmin yaparsak p kırmızı olsun
            input.value = "" //! tahmin yazıldığında inputun değeri boş olsun.
        } else if (value > random) { //! doğru cevap büyük ise girilen cevaptan
            p.textContent = `Daha küçük bir değer gir.${3 - kacKere}hakkın kaldı`
            p.style.color = "red" //! yanlış tahmin yaparsak p kırmızı olsun
            input.value = "" //! tahmin yazıldığında inputun değeri boş olsun.
        } else {
            p.textContent = `Hatalı bir değer girdiniz`
            p.style.color = "red" //! yanlış tahmin yaparsak p kırmızı olsun
            input.value = "" //! tahmin yazıldığında inputun değeri boş olsun.
        }
    }
    //? en son bunu yazdırdık
    if (kacKere == 3 && kazandım == false) { //! eğer tüm haklarını bitirdiysen oyunu kaybettin yazsın
        p.textContent = `Oyunu kaybettin` //!kaybedersen yazsın
        p.style.color = "red" //!kaybedince red olacak
        btn.disabled = true //!kaybedince seçim yaptırmasın
        input.disabled = true //!kaybedince seçim yaptırmasın
    }

}    
