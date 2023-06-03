$(function () {


    /* Nav Toggle on mobile
    ====================================== */

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    let langNav = $('.lang-menu-2__div');
    let navLinks = $('.nav__link');

    navToggle.on('click', function (event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
        langNav.toggleClass('btnDelete');
    });

    navLinks.on("click", function () {
        langNav.removeClass('btnDelete');
    });


    $(window).on("resize", function () {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
        langNav.removeClass('btnDelete');
    });



    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();



    /* Translate
    ====================================== */

    var arrLang = {
        'en': {
            // Nav
            'gallery': 'Gallery',
            'clients': 'Clients',
            'mission': 'About Us',
            'price': 'Price',
            'questions': 'Questions',
            'contacts': 'Our contacts',

            // Intro
            'intro__info': 'Burning pictures from photography',

            // Gallery
            'gallery__h2': 'Pictures from photo',
            'gallery__h2-2': 'Interior paintings',

            // Clients
            'clients__h2': 'Customer reviews',
            'name': 'Name',
            'country': 'Country',
            'btn--orange': 'Become a client',
            'clients-love': 'we love our clients',

            // Mission
            'mission-title': 'Why we?',
            'mission__h3': 'We value and listen to the opinion of customers',
            'mission__h4': '● We approach each client and their needs individually',
            'mission__h4-2': '● We try to do every job with the best possible quality',
            'mission__h4-3': '● We are extremely careful in choosing the source material to achieve high quality work',



            // Modal
            'modal__title__h4': 'Get in touch',
            'modal__p': 'If you want to place an order, enter the data in the form below. Respond to mail within hours.',
            'your-name': 'Your Name',
            'your-email': 'Your E-mail',
            'your-sms': 'Your SMS',
            'btn-send': 'Send',
            'our-contacts': 'Our contacts'
        },
        'ru': {
            // Nav
            'gallery': 'Галерея',
            'clients': 'Отзывы',
            'mission': 'О нас',
            'price': 'Цены',
            'questions': 'Вопросы',
            'contacts': 'Наши контакты',

            // Intro
            'intro__info': 'Выжигание картин по фотографии',

            // Gallery
            'gallery__h2': 'Картины по фотографии',
            'gallery__h2-2': 'Интерьерные картины',

            // Clients
            'clients__h2': 'Отзывы покупателей',
            'name': 'Имя',
            'country': 'Страна',
            'btn--orange': 'Стать клиентом',
            'clients-love': 'мы любим своих клиентов',

            // Mission
            'mission-title': 'Почему мы?',
            'mission__h3': 'Мы очень ценим и прислушиваемся к мнению покупателей',
            'mission__h4': '● К каждому клиенту и его запросам мы подходим индивидуально',
            'mission__h4-2': '● Каждую работу мы стараемся выполнить с максимально возможным качеством',
            'mission__h4-3': '● Мы крайне тщательно подходим к выбору исходного материала для достижения высокого качества работы',



            // Modal
            'modal__title__h4': 'Свяжитесь с нами',
            'modal__p': 'Если хотите оформить заказ, впишите данные в форме ниже. Ответ получите на почту в течение нескольких часов.',
            'your-name': 'Ваше Имя',
            'your-email': 'Ваш E-mail',
            'your-sms': 'Ваше сообщение',
            'btn-send': 'Отправить',
            'our-contacts': 'Наши контакты'
        },
        'lt': {
            // Nav
            'gallery': 'Galerija',
            'clients': 'Atsiliepimai',
            'mission': 'Apie mus',
            'price': 'Kainos',
            'questions': 'Klausimai',
            'contacts': 'Mūsų kontaktai',

            // Intro
            'intro__info': 'Paveikslų deginimas pagal nuotraukas',

            // Gallery
            'gallery__h2': 'Paveikslai pagal nuotraukas',
            'gallery__h2-2': 'Interjeriniai paveikslai',

            // Clients
            'clients__h2': 'Pirkėjų atsiliepimai',
            'name': 'Vardas',
            'country': 'Šalis',
            'btn--orange': 'Tapti klientu',
            'clients-love': 'mes mylime savo klientus',

            // Mission
            'mission-title': 'Kodėl mes?',
            'mission__h3': 'Mes labai vertiname ir įsiklausome į pirkėjų nuomonę',
            'mission__h4': '● Individuals požiūris į kiekvieno kliento užklausą ',
            'mission__h4-2': '● Kiekvieną projektą stengiamės atlikti maksimaliai kokybiškai',
            'mission__h4-3': '● Mes labai kruopščiai atsirenkame medieną, kad pasiektųme kokybės',

            // Price
            'section-price__title': 'Gaminių kainos',
            'tabletr1__td-1': '200х300 mm',
            'tabletr1__td-2': '300х400 mm',
            'tabletr1__td-3': '400х600 mm',
            'tabletd2-1': 'Išdeginti portretai ',
            'tabletd2-2': 'Interjeriniai paveikslai',

            // Questions
            'questions__main-title-1': 'Klausimai',
            'questions__title-1': 'Kaip atliekamas mokėjimas?',
            'questions__text-1': 'Mokėjimas gali būti atliekamas: grynaisiais pinigais, banko pavedimu, PayPal, Master Card, Visa.',
            'questions__title-2': 'Ar trapus gaunasi gaminys?',
            'questions__text-2': 'Mes deginame paveikslus ant beržo faneros 6 mm storio. Todėl ne, šis gaminys yra pakankamai tvirtas, bet jis nėra skirtas kitokiems tikslams.',
            'questions__title-3': 'Ar gaminys turi aitrių kvapų?',
            'questions__text-3': 'Nėra, kūriant mūsų paveikslus yra naudojamos tik natūralios medžiagos. Paveikslai turi beržo faneros kvapą.',
            'questions__title-4': 'Yra galimas pristatymas?',
            'questions__text-4': 'Taip, pristatymas Klaipėdoje nemokamas, į kitus miestus mokėjimas atliekamas pagal Lietuvos Pašto tarifus.',
            'questions-button-1': 'Skaityti daugiau',

            // Footer
            'copy': 'Kopijuoti  svetainės medžiagą draudžiama.',
            'copy-2': '© 2021-2021 Pyro Gallery. Visos autorinės teisės saugomos',

            // Modal
            'modal__title__h4': 'Susisiekite su mumis',
            'modal__p': 'Jeigu norite padaryti užsisakymą, įrašykite duomenis formoje žemiau. Atsakymą gausite elektroniniupaštu per kelias valandas.',
            'btn-send': 'Siųsti',
            'our-contacts': 'Mūsų kontaktai',

            // Contacts.html
            'main-page': 'Pagrindinis puslapis',
            'contact__title-1': 'Kontaktai',
            'contact__subtitle-1': 'Jei turite klausimų, galite susisiekti su mumis naudodami žemiau nurodytus kontaktus:'
        }
    }

    $(function () {
        $('.translate').click(function () {
            var lang = $(this).attr('id');

            $('.lang').each(function (index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });



    /* Payment system
    =====================================*/

    // $(document).ready(function() {
    //     $('#select-size-for-total-price').on('change', function() {
    //         var value = $(this).val();
    //         var pay2 = document.getElementById("hide-iframe-id");
    //         var pay = document.getElementById("hide-iframe-id-2");

    //         if(value == 80) 
    //         $(pay2).toggleClass('show-2');

    //         if(value == 80) 
    //         $(pay).removeClass('show-2');


    //         if(value == 45) 
    //         $(pay2).removeClass('show-2');

    //         if(value == 45) 
    //         $(pay).toggleClass('show-2');
    //     });
    // });



    /* Header class on scroll
    =====================================*/

    headerScroll();

    $(window).on("scroll  resize", function () {
        headerScroll();
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }



    /* Smooth Scroll to sections
    ===================================== */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500)
    });




    /* ScrollSpy
    ===================================== */
    
    let windowH = $(window).height();
    scrollSpy(scrollTop);

    $(window).on("scroll", function () {
        scrollTop = $(this).scrollTop();
        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function () {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if (scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if (scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }



    /* Modal
    =====================================*/

    $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });

    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });


    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }


    // Shop modal

    $(function() {
        $(".btn-product").click(function() {
            var imgtovara = $(this).attr('data-imgtovara');
            // var 
            // var productValue = $(this).attr('data-product-value');
            // var productValueModal = $(this).attr('data-form-1');
      
            $(".tovarimg").append('<img class="btn--shadow img-fluid" src="' + imgtovara + '" width="90%" height="90%" name="shop-img" alt="..." />');

            // $(".form-1__label").append('<label class="form-1__label" for="size" data-form-1="product-value">' + productValue + '</label>');

            
        })

        $(".btn-product").click(function() {
            var product = $(this).data('product');
            $(".form-1__label").text(product);
        })


        


        $(".modal__inner").click(function() {
            $(".img-fluid").remove()
        })
        $(".modal__close").click(function() {
            $(".img-fluid").remove()
        })
    });

    
    




    /* Slick slider
    ===================================== */


    /* Intro Slider */
    let introSlider = $("#introSlider");

    introSlider.slick({
        // deleted
    });



    /* Reviews Slider */
    let reviewsSlider = $("#reviewsSlider");

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });







    AOS.init({
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 50, // offset (in px) from the original trigger point // место активации анимации
        delay: 0, // values from 0 to 3000, with step 50ms // задержка анимации
        duration: 700, // values from 0 to 3000, with step 50ms // продолжительность анимации
        easing: 'ease', // default easing for AOS animations // тип анимации
        once: false, // whether animation should happen only once - while scrolling down // проигрывать анимации 1 раз
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});