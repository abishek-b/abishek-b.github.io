
$(document).on('scroll', function () {
    $navbar = $(".navbar")
    if ($(document).scrollTop() > 583) {
        $navbar.addClass('navbar-bg-fixed');
    } else {
        $navbar.removeClass('navbar-bg-fixed');
    }
});


document.getElementById('btn_hire_me').addEventListener("click", function (e) {
    // e.preventDefault()
    location.href = "mailto:bjabishek30@gmail.com?subject=Inquiry - " + document.getElementById('form_name').value + "("+document.getElementById('form_email').value + ")&body=" + document.getElementById('form_message').value
})

const hamburger = document.querySelector('.navbar .hamburger')
const mobile_menu = document.querySelector('.navbar ul')


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    mobile_menu.classList.toggle("active")
})