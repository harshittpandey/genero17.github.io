    // ModalJS
    function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
    };
    const deptModals = ["#deptCSE","#comingSoon"]
    deptModals.map(function (dept) {
        $(dept).on('show.bs.modal', function (e) {
            var anim = "swing";
            anim = "fadeIn";
            testAnim(anim);
            $('.noticeBody').attr('class', 'noticeBody  ' + 'swing' + '  animated');

        })
        $(dept).on('hide.bs.modal', function (e) {
            var anim = "flipOutX";
            testAnim(anim);
        })
    })
    // ModalJS
    $('.slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    var img1 = new Image();
    img1.src = "http://genero17.in/img/events/wood.png";