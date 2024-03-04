document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var confirmation = document.getElementById('confirmacion');
    confirmation.innerText = `Gracias, ${name}. Tu mensaje "${message}" ha sido enviado.`;
    confirmation.style.display = 'block';
    confirmation.style.opacity = '0';
    confirmation.style.transform = 'translateY(-50px)';

    setTimeout(function() {
        confirmation.style.opacity = '1';
        confirmation.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(function() {
        confirmation.style.opacity = '0';
        confirmation.style.transform = 'translateY(-50px)';
    }, 3000);

    setTimeout(function() {
        confirmation.style.display = 'none';
    }, 4000);

    document.getElementById('contactForm').reset();
});
