window.onload = function down() {
    const btn = document.getElementById('download');
    const resume = document.getElementById('rcontainer'); 
    btn.addEventListener('click', () => {
        var opt = {
            margin: 0,
            filename: 'minalResume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1.7 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resume).set(opt).save();
    });
};