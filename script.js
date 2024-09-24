
document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault();
    var link = document.createElement('a');
    link.href = 'assets/CV_RABENARIVO_Jessy_Owen.pdf';
    link.download = 'mon_fichier.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
