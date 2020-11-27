'use strict';

//МЕНЮ

let burger = document.querySelector('#burger'),
    menu = document.querySelector('#menu'),
    body = document.querySelector('body'),
    menuItems = document.querySelectorAll('.menu__link');

burger.addEventListener('click', function () {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    this.classList.toggle('active');
});

for (let menuItem of menuItems) {
    menuItem.addEventListener('click', function(){
        menu.classList.remove('active');
        body.classList.remove('lock');
        burger.classList.remove('active');
    })
}

//СЛАЙДЕР

$('.slider').slick({
    arrows: false,
    dots: true,
});


//ОБНУЛЕНИЕ ССЫЛОК

let links = document.querySelectorAll('.tab__link');

for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
    });
};

//АККАРДИОН

let titles = document.querySelectorAll('.acc-title');

for (let title of titles) {
    title.addEventListener('click', function () {
        if (!(this.classList.contains('active'))) {
            for (let title of titles) {
                title.classList.remove('active');
            }
        }
        this.classList.toggle('active');
    });
};


//ТАБЫ


let tabs = document.querySelectorAll('.tab__item'),
    contents = document.querySelectorAll('.delicious-menu__content'),
    tabName;

tabs.forEach(function (item) {
    item.addEventListener('click', selectTab);
});

function selectTab() {
    tabs.forEach(function (item) {
        item.classList.remove('active');
    });
    this.classList.add('active');
    tabName = this.getAttribute('data-tab-name');
    selectContent(tabName);
};

function selectContent(tabName) {
    contents.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    });
};

//КАРТЫ

function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 59.925277,
        lng: 30.295998
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 17,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


//ВАЛИДАЦИЯ ФОРМЫ


function validate() {
    let name = document.querySelector('#userName'),
        phone = document.querySelector('#userPhone'),
        mail = document.querySelector('#userMail');

    if (!name.value && !phone.value && !mail.value) {
        name.style.border = '1px solid red';
        phone.style.border = '1px solid red';
        mail.style.border = '1px solid red';
        return false;
    }

    if (!mail.value && !phone.value) {
        mail.style.border = '1px solid red';
        phone.style.border = '1px solid red';
        return false;
    }

    if (!mail.value && !name.value) {
        mail.style.border = '1px solid red';
        name.style.border = '1px solid red';
        return false;
    }

    if (!name.value && !phone.value) {
        name.style.border = '1px solid red';
        phone.style.border = '1px solid red';
        return false;
    }

    if (!name.value) {
        name.style.border = '1px solid red';
        return false;
    }

    if (!phone.value) {
        phone.style.border = '1px solid red';
        return false;
    }

    if (!mail.value) {
        mail.style.border = '1px solid red';
        return false;
    }

    return true;
};

//let btn = document.querySelector('.book-table__btn');
//
//btn.onclick = function(e){
//    e.preventDefault();
//}



