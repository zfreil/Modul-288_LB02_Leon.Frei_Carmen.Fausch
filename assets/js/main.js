$(document).ready(() => {
    $('.burger-toggle').click(e => {
        let burger = $(e.currentTarget);

        burger.toggleClass('burger-toggle--open');

        burger.trigger('burger-toggle', {
            open: burger.hasClass('burger-toggle--open'),
        });
    });

    $('header .burger-toggle').on('burger-toggle', (e, {open}) => {
        if (open) {
            $('header > nav').addClass('nav__mobile-open');
        } else {
            $('header > nav').removeClass('nav__mobile-open');
        }
    });
});


