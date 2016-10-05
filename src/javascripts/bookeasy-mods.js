IMUtility.detailsGadgetGridRendered = false;

jQuery(document).on('gadget.script.loaded', function() {
    $w.event.subscribe('grid.rendered', function() {

        // Do not run this event handler more than once
        if (IMUtility.detailsGadgetGridRendered) return true;
        IMUtility.detailsGadgetGridRendered = true;

        jQuery('.im-grid table tbody tr:first-child td.name a.more').IMElementExists(function() {
            // Wait for room details link insertion before moving the row data
            arrangeRowData();

        });


        function arrangeRowData() {

            jQuery('.im-grid tbody tr').each(function() {
                jQuery(this).find('td.name').addClass('im-grid__details').removeClass('name');
            });

            // Insert named containers for row details
            jQuery('.im-grid__details .thumb').after('<div class="im-grid-roominfo"><h3 class="im-grid-roominfo__roomname"></h3><div class="im-grid-roominfo__actionbar"></div></div>');

            // add class to grid rows
            jQuery('.im-grid tbody tr').addClass('im-grid-item');


            // Insert row details into named containers..
            jQuery('.im-grid-item').each(function() {
                if (IMUtility.debug) console.log('Next Row: '+ jQuery(this).find('td.im-grid__details a').text() );

                // remove unwanted elements
                jQuery(this).find('.OperatorItemHeading, .OperatorInfoMore').remove();

                // always display description
                jQuery(this).find('.OperatorInfo').addClass('im-grid-operatorinfo').removeClass('.OperatorInfoHidden, .OperatorInfo');

                jQuery(this).find('td.im-grid__details a').appendTo(jQuery(this).find('.im-grid-roominfo__roomname'));
                jQuery(this).find('td.im-grid__details .specials').appendTo(jQuery(this).find('.im-grid-roominfo__actionbar'));
            });


            if (jQuery('.im-grid thead tr td.thumb').length>0 || jQuery('.im-grid tbody tr td.thumb').length>0) { return true; }
            jQuery('.im-grid thead tr').prepend('<td class="thumb"></td>');
            jQuery('.im-grid thead tr .title').empty();

            jQuery('.im-grid tbody tr').each(function() {

                // Move thumb to its own column & add fancybox
                $thumbImage = jQuery(this).find('.thumb > img');
                imagePath = $thumbImage.attr('rel');

                $thumbImage.attr('src', imagePath).wrap('<a class="be-fancybox" href="' + imagePath + '" rel="gallery" title="' + jQuery(this).find('a:not([class])').text() + '"></a>');

                jQuery(this).find('td.im-grid__details').before('<td class="thumb"></td>');
                jQuery(this).find('td.thumb').append(jQuery(this).find('div.thumb'));

            });

        }


    });
});
