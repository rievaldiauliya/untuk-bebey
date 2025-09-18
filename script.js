const message = `Maafin ival yaa sayang kalo bikin kamu jadi bt, selalu bikin kamu jadi bm, selalu ngecewain kamu sayang tapi yg kamu harus tau kalo ival sayang sekali sama kamu bey, ival tida akan pergi buat ninggalin kamu sampe kapanpun, ival bakal sama kamu terus, temenin kamu setiap harinya sayang jangan khawatir yaa, ival sayang dan cintaa sekalii sama kamu aku berharap semoga kita sama sama terus yaa sayang. I Always Lovee uu sayangku.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
