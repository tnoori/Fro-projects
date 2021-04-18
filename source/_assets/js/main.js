$(document).ready(function() {

    $(window).on('scroll', function(e) {
        e.preventDefault()
        if ($(window).scrollTop() > 20) {
            $('.nav').addClass('active')
        } else {
            $('.nav').removeClass('active')
        }
    })

});


$(document).ready(function() {
    $('.slider_').slick({
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 30,
        dots: true,
        centerMode: true,
    });
});

$(document).ready(function() {
    $('.carousel').slick({
        slidesToShow: 3,
        autoplay: false
    });
});

$(function() {
    $('.mhn-slide').owlCarousel({
        nav: true,
        //loop:true,
        slideBy: 'page',
        rewind: false,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            600: { items: 3 },
            1000: { items: 4 }
        },
        smartSpeed: 70,
        onInitialized: function(e) {
            $(e.target).find('img').each(function() {
                if (this.complete) {
                    $(this).closest('.mhn-inner').find('.loader-circle').hide();
                    $(this).closest('.mhn-inner').find('.mhn-img').css('background-image', 'url(' + $(e.target).attr('src') + ')');
                } else {
                    $(this).bind('load', function(e) {
                        $(e.target).closest('.mhn-inner').find('.loader-circle').hide();
                        $(e.target).closest('.mhn-inner').find('.mhn-img').css('background-image', 'url(' + $(e.target).attr('src') + ')');
                    });
                }
            });
        },
        navText: ['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>', '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>']
    });
});




var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement
var TOGGLE_RATIO = 0.80

function handleScroll() {
    // do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > TOGGLE_RATIO) {
        //show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        //hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    //scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)


// text slider  animation

AOS.init();

// searching box



// $(function() {
//     var today = new Date();
//     var items = generateItems(today);
//     refreshNotifications(items, today);
// });

// function refreshNotifications(items, today) {
//     items = items || [];
//     today = today || newDate();

//     var cssTransitionEnd = getTransitionEnd();
//     var container = $('body');

//     items.forEach(function(item) {
//         item.isExpired = item.date < today;

//         item.isToday = (item.date.getFullYear() === today.getFullYear()) &&
//             (item.date.getMonth() === today.getMonth()) &&
//             (item.date.getDate() === today.getDate());

//         item.formattedDate = function() {
//             if (this.isToday) {
//                 return timeToString(this.date);
//             } else {
//                 return this.date.getFullYear() + '-' +
//                     strpad(this.date.getMonth() + 1) + '-' +
//                     strpad(this.date.getDate());
//             }
//         };
//     });

//     items.sort(function(a, b) {
//         if (a.isExpired === b.isExpired) {
//             return a.date - b.date;
//         } else {
//             return (b.isExpired ? 0 : 1) - (a.isExpired ? 0 : 1);
//         }
//     });

//     var template =
//         '<div class="notifications js-notifications">' +
//         '<h3>Notifications</h3>' +
//         '<ul class="notifications-list">' +
//         '<li class="item no-data">You don\'t have notifications</li>' +
//         '{{#items}}' +
//         '<li class="item js-item {{#isExpired}}expired{{/isExpired}}" data-id="{{id}}">' +
//         '<div class="details">' +
//         '<span class="title">{{title}}</span>' +
//         '<span class="date">{{formattedDate}}</span>' +
//         '</div>' +
//         '<button type="button" class="button-default button-dismiss js-dismiss">×</button>' +
//         '</li>' +
//         '{{/items}}' +
//         '</ul>' +
//         '<a href="#" class="show-all">Show all notifications</a>' +
//         '</div>';

//     container
//         .append(Mustache.render(template, { items: items }))
//         .find('.js-count').attr('data-count', items.length).html(items.length).end()
//         .on('click', '.js-show-notifications', function(event) {
//             $(event.currentTarget).closest('.js-show-notifications').toggleClass('active').blur();
//             return true;
//         })
//         .on('click', '.js-dismiss', function(event) {
//             var item = $(event.currentTarget).parents('.js-item');

//             var removeItem = function() {
//                 item[0].removeEventListener(cssTransitionEnd, removeItem, false);
//                 item.remove();

//                 /* update notifications' counter */
//                 var countElement = container.find('.js-count');
//                 var prevCount = +countElement.attr('data-count');
//                 var newCount = prevCount - 1;
//                 countElement
//                     .attr('data-count', newCount)
//                     .html(newCount);

//                 if (newCount === 0) {
//                     countElement.remove();
//                     container.find('.js-notifications').addClass('empty');
//                 }
//             };

//             item[0].addEventListener(cssTransitionEnd, removeItem, false);
//             item.addClass('dismissed');
//             return true;
//         });
// }

// function generateItems(today) {
//     today = today || newDate();
//     return [
//         { id: 1, title: 'Meeting with Ben\'s agent.', date: randomDate() },
//         { id: 2, title: 'Papers review with Tonny.', date: randomDate(addMinutes(today, -60), addMinutes(today, 60)) },
//         { id: 3, title: 'Annual party at Eric\'s house.', date: randomDate() },
//         { id: 4, title: 'Last day to pay off auto credit.', date: randomDate() },
//         { id: 5, title: 'Call and schedule another meeting with Amanda.', date: randomDate(addMinutes(today, -360), addMinutes(today, 360)) },
//         { id: 6, title: 'Don\'t forget to send in financial reports.', date: randomDate() }
//     ];
// }

// function randomDate(start, end) {
//     start = start || (new Date(2014, 0, 1));
//     end = end || (new Date(2015, 0, 1));
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// function addMinutes(date, minutes) {
//     return new Date(date.getTime() + minutes * 60000);
// }

// function timeToString(date) {
//     if (date) {
//         var hh = date.getHours();
//         var mm = date.getMinutes();
//         var ap = hh >= 12 ? 'PM' : 'AM';

//         hh = (hh >= 12) ? (hh - 12) : hh;
//         hh = (hh === 0) ? 12 : hh;

//         return (hh < 10 ? '0' : '') + hh.toString() + ':' +
//             (mm < 10 ? '0' : '') + mm.toString() + ' ' + ap;
//     }
//     return null;
// }

// function strpad(num) {
//     if (parseInt(num) < 10) {
//         return '0' + parseInt(num);
//     } else {
//         return parseInt(num);
//     }
// }

// function getTransitionEnd() {
//     var supportedStyles = window.document.createElement('fake').style;
//     var properties = {
//         'webkitTransition': { 'end': 'webkitTransitionEnd' },
//         'oTransition': { 'end': 'oTransitionEnd' },
//         'msTransition': { 'end': 'msTransitionEnd' },
//         'transition': { 'end': 'transitionend' }
//     };

//     var match = null;
//     Object.getOwnPropertyNames(properties).forEach(function(name) {
//         if (!match && name in supportedStyles) {
//             match = name;
//             return;
//         }
//     });

//     return (properties[match] || {}).end;
// }



$(document).ready(function() {
    $('.carousel[data-type="multi"] .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < 4; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });
});
