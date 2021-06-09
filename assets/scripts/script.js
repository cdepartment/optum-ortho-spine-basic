$(document).ready(function(){



    var eles=$('[data-ajax-load="true"]');
    for(var i=0;i<eles.length;i++){
        var ele=$(eles[i]);

        (function(ele){
            var fname=ele.attr('data-ajax-target');
            $.get(fname,function(res){
                ele.html(res);
                var links=window.location.pathname.split('/');
                var link=links.pop();
                $('.nav-link').removeClass('active-now');
                $("[href='"+window.location.pathname+"']").addClass('active-now');
                $("[href='"+link+"']").addClass('active-now');
            });
        })(ele);
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });


    //Accordion

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            $(".accordion-item-header").css({"border-color": "#000000"});
            accordionItemHeader.style.borderBottom = "1px solid #000000";

           const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
              currentlyActiveAccordionItemHeader.classList.toggle("active");
              currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
              accordionItemHeader.style.borderBottom = "1px solid #000000";
                $("#accordion-close").remove();
                accordionItemHeader.style.borderBottom = "1px solid #000000";
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if(accordionItemHeader.classList.contains("active")) {
                accordionItemBody.insertAdjacentHTML('beforeend', '<div id="accordion-close" class="accordion-close">CLOSE</div>');
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                accordionItemHeader.style.borderBottom = "1px solid #C25608";

            }
            else {
                accordionItemBody.style.maxHeight = 0;
                accordionItemHeader.style.borderBottom = "1px solid #000000";
                $("#accordion-close").remove();
            }

            $('.accordion-close').on('click', function(){
                accordionItemHeader.classList.toggle("active");
                accordionItemHeader.style.borderBottom = "1px solid #000000";
                accordionItemBody.style.maxHeight = 0;
                $("#accordion-close").remove();
            });
        });
    });

});