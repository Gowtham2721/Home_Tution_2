// Client.js

document.getElementById('detailsForm1').addEventListener('submit', function(event) {
    event.preventDefault();
    window.open('https://docs.google.com/spreadsheets/d/1EF9FPqrc6xPEPEbUbLZYKRWNYfbvTQ87_piHixYzG9c/edit?usp=sharing', '_blank');
});

document.getElementById('amountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.open('https://drive.google.com/file/d/18w0wyAo9za6ngKQHNcDOh6g0Hb4_80Gh/view?usp=drivesdk', '_blank');
});

document.getElementById('goBackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = '/T/index.html';
});
