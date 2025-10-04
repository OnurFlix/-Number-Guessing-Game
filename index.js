let doğruSayi = Math.floor(Math.random() * 10) + 1;  

function checkGuess() { 
    let tahmin = parseInt(document.getElementById("guess").value); 
    let sonuc = document.getElementById("result");   

    if (isNaN(tahmin) || tahmin < 1 || tahmin > 10) { 
        sonuc.textContent = "Lütfen 1 ile 10 arasında bir sayı girin."; 
        sonuc.style.color = "orange"; 
    } else if (tahmin === doğruSayi) { 
        sonuc.textContent = " 🎉 Tebrikler! Doğru tahmin."; 
        sonuc.style.color = "green"; 
    } else if (tahmin < doğruSayi) {  
        sonuc.textContent =  " ❌ Yanlış tahmin. Başka bir sayı deneyin."; 
        sonuc.style.color = "red";
    } 
} 


document.getElementById("guess").addEventListener("keydown", function(event) { 
    if (event.key === "Enter") { 
        checkGuess(); 
    }
});