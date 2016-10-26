IMUtility.detailsGadgetGridRendered = false;

$(document).on('gadget.script.loaded', function() {

    $w.event.subscribe('grid.rendered', function() {

        // Do not run this event handler more than once
        if (IMUtility.detailsGadgetGridRendered) return true;
        IMUtility.detailsGadgetGridRendered = true;


        $('.im-grid table tbody tr:first-child td.name a.more').IMElementExists(function() {
            // Wait for room details link insertion before moving the row data
            insertImages('details');

        });

    });

});





function insertImages(gadget) {
    var thumbCount = 0;

    $('.im-grid tbody tr').each(function() {

        if ($(this).find('td.name div.thumb').size()) {

            // Move thumb to its own column & add fancybox
            $thumbImage = $(this).find('.thumb > img');
            imagePath = $thumbImage.attr('rel');

            thumbCount = thumbCount + 1;

            $thumbImage.attr('src', imagePath).wrap('<a class="be-fancybox" href="' + imagePath + '" rel="gallery" title="' + $(this).find('a:not([class])').text() + '"></a>');


        } else {
            $(this).addClass('no-image');
        }

    });

    if (thumbCount == 0) {
        // remove header thumb

        $('.im-grid thead tr td.thumb').remove();
    }
}
