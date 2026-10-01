function jalankanLooping() {

    let hasil = "";

    for (let i = 1; i <= 5; i++) {

        hasil += `
            <div class="loop-text">
                🧸 Saya sedang belajar JavaScript ♡
            </div>
        `;

    }

    document.getElementById("output").innerHTML = hasil;
}


function resetLooping() {

    document.getElementById("output").innerHTML =
        "Error: mantan masih tersimpan di memori.";

}