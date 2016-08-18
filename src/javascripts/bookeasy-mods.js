jQuery(document).on('gadget.script.loaded', function() {

    IMUtility.pushDetailsGadgetLoadedEvent();
    IMUtility.pushDetailsContentLoadedEvent();

    $w.event.subscribe('details.gadget.ready', function() {

        jQuery('.im-grid tr.odd, .im-grid tr.even').each(function() {
            // setup fancybox
            thumbImage = jQuery(this).find('.thumb img');
            imagePath = thumbImage.attr('rel');

            thumbImage.attr('src', imagePath);

            thumbImage.wrap('<a class="be-fancybox" href="' + imagePath + '" rel="gallery" title="' + jQuery(this).find('a:not([class])').text() + '"></a>')
        });

    });


    $w.event.subscribe('details.content.ready', function() {

        jQuery('.priceGrid').addClass('is-loading');

        // format OperatorInfo
        jQuery('.im-grid tr.odd, .im-grid tr.even').each(function() {
            operatorInfo = jQuery(this).find('.OperatorInfo');

            jQuery(this).find('.RoomConfig, .MaxGuests, .OperatorItemHeading, .OperatorInfoMore').remove();

            operatorInfo.removeClass('OperatorInfoHidden');

            // // remove unwanted elements
            // jQuery(this).find('.RoomConfig, .MaxGuests, .OperatorItemHeading, .OperatorInfoMore').remove();
            //
            // jQuery(this).find('a:not([class])').wrap('<h3>');
            //
            operatorInfo.prepend(jQuery(this).find('h3'));

            // find in array
            currentName = jQuery(this).find('a:not([class])').text();

            // check if it can find the currentName
            if(typeof aTourData !== 'undefined' && typeof aTourData[currentName] !== 'undefined') {

                sDescription = aTourData[currentName].replace(/\n/g, '<br />');

                sDescription = sDescription.replace(/\b(FACILITY|BBQ|SHELTER|SEATING|TOILETS|HOLDING CAPACITY|CAR PARKS|ALTERNATIVE PARKING|WATER AVAILABLE|POWER|TENNIS COURTS|WHEELCHAIR ACCESS|SHADE)\b/g,'<strong>$1</strong>');

                // replace description
                jQuery(this).find('.Description').html('<p>' + sDescription + '</p>');


            }


        });

        jQuery('.priceGrid').removeClass('is-loading');


    });

});
