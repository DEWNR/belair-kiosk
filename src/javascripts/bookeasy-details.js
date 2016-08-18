var bAllowBookings = true;
var bookeasyData = {};
var bookeasyType = 'tours'; // defaults to accomodation
var bookingDate = new Date(); // get today's date
var aTourData = [];

$(function() {

    aTourData = getTourData();

    // load details gadget
    BE.gadget.details('#bookeasy__details-gadget', {
        defaultDate: bookingDate,
        descriptionHover: true,
        period: 1,
        productID: productID,
        showHoverInline: true,
        showQuantity: false,
        thumbsInGrid: true,
        type: bookeasyType,
        vcID: 188
    });

});





function getTourData() {

    aTemp = [];

    $.ajax({
        url: '//sjp.impartmedia.com/be/getToursOperatorTourDetails?q=188&operators=' + operatorIDString,
        cache: true,
        dataType: 'jsonp'
    })
    .done(function(data) {

        if (data['Operators'].length) {

            // loop over data, replace
            aTours = data['Operators'][0].Tours;

            for (i = 0; i < aTours.length; i++) {

                aTemp[aTours[i].Name.trim()] = aTours[i].Description;

            }

        }

    })

    return aTemp;

}


function text2HTML(input) {

    input = input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\//g, '/');
    input = input.replace(/\r/g, '').replace(/\n( )*?(\n)*?( )*?$/, '').replace(/\n( )*?\n/g, '</p><p>').replace(/\n/g, '<br />');
    input = '<p>'+input+'</p>';

    return input;

}


$w(function() {
  BE.gadget.cart("#toolbar-cart", {
    vcID:"188",
    bookingURL:"https://www.environment.sa.gov.au/parks/checkout",
    autoCollapse:true
  });
});
