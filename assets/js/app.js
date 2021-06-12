const sideBar = document.querySelector('.mb-menu-wrapper');
const openBtn = document.querySelector('.hmbrg-icon');
const body = document.getElementById('webBody');
const formSec = document.querySelector('.form-sec');
const faqs = document.querySelectorAll('.faq-wrapper');
const nvItm = document.querySelectorAll('.nv-t');
const successBoxWrap = document.querySelector('.success-msg-box-wrapper ');
const ClosesuccessBoxWrap = document.querySelector('.cl');

faqs.forEach((faq, i) => {
    faq.addEventListener('click', () => {

        for (let j = 0; j < faqs.length; j++) {
            if (faqs[j].classList.remove('faq-active')) {
                faqs[j].classList.remove('faq-active');
                faqs.classList.remove('faq-active');
            }
        }
        faq.classList.add('faq-active');
    });
});

const controlSideBar = () => {
    webBody.classList.toggle("hideWebScrollbar")
}

const bodyload = () => {
    setTimeout(() => {
        document.getElementById("pre-loader").style.display = "none";

    }, 300)
    if (window.scrollY > window.innerHeight / 1.7) {
        formSec.classList.add('changedFormbg');
        document.body.classList.add("bodych");
    } else {
        formSec.classList.remove('changedFormbg');
        document.body.classList.remove("bodych");
    }
}



const changeContactBg = () => {
    if (this.scrollY > this.innerHeight / 1.7) {
        formSec.classList.add('changedFormbg');
        document.body.classList.add("bodych");
    } else {
        formSec.classList.remove('changedFormbg');
        document.body.classList.remove("bodych");
    }
}

document.getElementById("ct-form").addEventListener("submit", function(event) {
    event.preventDefault();
    this.reset();
    // successBoxWrap.classList.add("show-success");
    // successBoxWrap.addEventListener('click', () => {
    //     successBoxWrap.classList.remove("show-success");
    // })

    document.querySelector('.sucMsg').style.visibility = "visible";
    setTimeout(() => {
        document.querySelector('.sucMsg').style.visibility = "hidden";

    }, 3000)
});

// ClosesuccessBoxWrap.addEventListener("click", () => {
//     successBoxWrap.classList.remove("show-success");
// });


openBtn.addEventListener('click', controlSideBar);
window.addEventListener('scroll', changeContactBg);


nvItm.forEach((item, i) => {
    item.addEventListener('click', () => {

        for (let j = 0; j < nvItm.length; j++) {

            if (nvItm[j].classList.contains('active')) {
                nvItm[j].classList.remove('active');
            }
        }
        item.classList.add('active');
        webBody.classList.remove("hideWebScrollbar");

        document.getElementById('click').checked = false


    });
});