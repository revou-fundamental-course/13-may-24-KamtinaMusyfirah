function calculateLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Harap masukkan nilai yang valid untuk alas dan tinggi.');
        return;
    }

    const areaLuas = 0.5 * alas * tinggi;

    const calculationStepsLuas = `
        L = 1/2 x a x t<br>
        L = 1/2 x ${alas} x ${tinggi}<br>
        L = ${areaLuas}
    `;

    document.getElementById('calculationStepsLuas').innerHTML = calculationStepsLuas;
    // Menampilkan elemen hasil
    document.getElementById('resultsLuas').removeAttribute('hidden');
}

function calculateKeliling() {
    const sisiA = parseFloat(document.getElementById('sisiA').value);
    const sisiB = parseFloat(document.getElementById('sisiB').value);
    const sisiC = parseFloat(document.getElementById('sisiC').value);

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert('Harap masukkan nilai yang valid untuk ketiga sisi.');
        return;
    }

    const areaKeliling = sisiA + sisiB + sisiC;
    const calculationStepsKeliling = `
        K = s + s + s<br>
        K = ${sisiA} + ${sisiB} + ${sisiC}<br>
        K = ${areaKeliling}
    `;
    
    document.getElementById('calculationStepsKeliling').innerHTML = calculationStepsKeliling;
    // Menampilkan elemen hasil
    document.getElementById('resultsKeliling').removeAttribute('hidden');
}
