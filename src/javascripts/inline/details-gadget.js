$(function() {

    // load details gadget
    BE.gadget.details('#bookeasy__details-gadget', {
        adults: 1,
        defaultDate: gadgetDefaultDate,
        descriptionHover: true,
        period: 1,
        productID: operatorID,
        showHoverInline: true,
        showQuantity: false,
        thumbsInGrid: true,
        type: bookeasyType,
        vcID: 188
    });

    $('.be-fancybox').fancybox();

});
