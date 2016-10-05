// this script REQUIRES imutility.js
// please ensure you include imutility.js before this script, like so:
// <jdoc:include type="impartScript" name="{shared}/v3/js/imutility.js" compress="true" />


// convert the search gadget into bootstrap format, to allow for better styling, and automatic responsiveness
jQuery(document).on('gadget.script.loaded', function() {
    IMUtility.pushSearchGadgetLoadedEvent();
    $w.event.subscribe('search.gadget.ready', function() {

        BE._isMobile = 1;

// Please do not make changes to this file within the {shared}/v3/ folder
// If you wish to make changes, consider copying and pasting this file into your {template}/js/ folder, and then customising

        jQuery('#searchGadget .search-gadget').before(jQuery('#searchGadget .hybridTabs'));
        jQuery('#searchGadget .hybridTabs').addClass('gadget__all-tabs row').removeClass('hybridTabs');
        jQuery('#searchGadget .gadget__all-tabs a').addClass('col-xs-12 col-md-6 col-lg-3');

        jQuery('.search-gadget span.label').wrap('<label></label>');
        jQuery('.search-gadget span.label').addClass('gadget__search-label').removeClass('label');
        jQuery('.search-gadget > .date label').addClass('col-xs-12 hidden-lg');
        jQuery('.search-gadget > .date .input').wrap('<div class="col-xs-12 col-lg-12"></div>').css('display', 'block');
        jQuery('.search-gadget > div[class!="date"] label').addClass('col-xs-12 col-lg-5');
        jQuery('.search-gadget > div[class!="date"] .input').wrap('<div class="col-xs-12 col-lg-7"></div>').css('display', 'block');

        jQuery('.search-gadget').addClass('row');
        jQuery('.search-gadget .product').addClass(' ' + ((jQuery('.embedded-search').size() == 0) ? 'col-md-4' : 'col-md-6') + ' col-lg-2 col-md-offset-4 col-lg-offset-2 gadget__search-column gadget__search-column-select gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .date').addClass('col-md-4 ' + ((jQuery('.embedded-search').size() == 0) ? 'col-lg-2' : 'col-lg-2') + ' gadget__search-column gadget__search-column-date gadget__search-column-botborder');
        jQuery('.search-gadget .period').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .adults').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .children').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .infants').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .concessions').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .students').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .observers').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .family').addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .button').addClass('col-md-12 col-lg-3 gadget__search-column gadget__search-column-button');

        jQuery('.search-gadget .date .input').css('width', '100%');
        jQuery('.search-gadget select').css('width', '100%');
        jQuery('.search-gadget .date, .search-gadget .period, .search-gadget .adults, .search-gadget .children, .search-gadget .infants').wrapInner('<div class="row"></div>');
        jQuery('.search-gadget .concessions, .search-gadget .students, .search-gadget .observers, .search-gadget .family').wrapInner('<div class="row"></div>');
        jQuery('.specific-prop-search').hide();
        jQuery('.search-gadget').css('margin', '0').css('border', 'none').attr('id', 'gadget__search');
        jQuery('.embedded-search .search-gadget .button').hide();
        jQuery('#searchGadget .search-gadget .infants').hide();
        jQuery('.embedded-search .search-gadget > div').css('margin', '0');
        if (jQuery('.search-gadget .students').size() > 0) {
            jQuery('.search-gadget').addClass('wide-row-many-columns');
        }

        jQuery('#itemGadget .search-gadget .date').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .period').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .adults').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .children').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .infants').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .concessions').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .students').addClass('col-sm-2 col-md-2');
        jQuery('#itemGadget .search-gadget .observers').addClass('col-sm-2 col-md-2');


        // for sites that display the product dropdown (instead of the hybrid tabs), make sure the dropdown works as expected
        //if (jQuery('.search-gadget .product').is(':visible')) {
            jQuery('.search-gadget .date').addClass('gadget__search-column-border');
            jQuery('.search-gadget .period, .search-gadget .adults, .search-gadget .children').removeClass('col-lg-2').addClass('col-lg-1_5');
            jQuery('.search-gadget .button').removeClass('col-lg-3').addClass('col-lg-1_5');
            jQuery('.search-gadget .button > div').removeClass().addClass('col-xs-12');
            jQuery('.search-gadget .product label').addClass('hidden-lg');
        //}
        jQuery('.BE-hybrid-gadget .product select option').each(function() {
            var option = jQuery(this).attr('value');
            if (jQuery('.gadget__all-tabs a.' + option).size() == 0) {
                jQuery(this).remove();
            }
        });
        jQuery('.BE-hybrid-gadget .product select').change(function(e) {
            e.preventDefault();
            if (jQuery(this).val() == "accom") {
                wisDOM($w.find("a.tab")[0]).trigger("click");
            } else if (jQuery(this).val() == "tours") {
                wisDOM($w.find("a.tab")[1]).trigger("click");
            } else if (jQuery(this).val() == "events") {
                wisDOM($w.find("a.tab")[2]).trigger("click");
            } else if (jQuery(this).val() == "carhire") {
                wisDOM($w.find("a.tab")[3]).trigger("click");
            } else if (jQuery(this).val() == "packages") {
                wisDOM($w.find("a.tab")[4]).trigger("click");
            } else {
                wisDOM($w.find("a.tab")[0]).trigger("click");
            }
            return false;
        });

    });
    $w.event.subscribe('region.refinetools.built', function() {

        if (jQuery('.search-gadget .facilities.gadget__search-column').size() > 0) {
            return;
        }

        jQuery('.search-gadget .refineTools span.label').wrap('<label></label>');
        jQuery('.search-gadget .refineTools span.label').addClass('gadget__search-label').removeClass('label');
        jQuery('.search-gadget .refineTools > div label').addClass('col-xs-12 col-lg-12');
        jQuery('.search-gadget .refineTools > div .input').wrap('<div class="col-xs-12 col-lg-12"></div>').css('display', 'block');

        jQuery('#regionGadget .locationFilter').addClass('col-md-3 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-botborder');
        jQuery('.search-gadget .accommTypes').addClass('col-md-3 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .tourTypes').addClass('col-md-3 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .facilities').addClass('col-md-3 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .maxPrice').addClass('col-md-3 col-lg-1 gadget__search-column gadget__search-column-textbox gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .nameFilter').addClass('col-md-3 col-lg-2 gadget__search-column gadget__search-column-textbox gadget__search-column-border gadget__search-column-botborder');
        jQuery('.search-gadget .sortBy').addClass('col-md-12 col-lg-3 gadget__search-column gadget__search-column-select gadget__search-column-border');
        jQuery('.search-gadget .byWhich').addClass('col-md-6 col-lg-6').css('margin', '0');
        jQuery('.search-gadget .byOrder').addClass('col-md-6 col-lg-6 gadget__search-column-border').css('margin', '0');
        jQuery('.search-gadget .byWhich .col-xs-12, .search-gadget .byOrder .col-xs-12').removeClass();

        jQuery('.search-gadget .refineTools input').css('width', '100%');
        jQuery('.search-gadget .refineTools select').css('width', '100%');
        jQuery('.search-gadget .refineTools .sortBy > div').wrapInner('<div class="row"></div>').css('margin', '0');
        jQuery('.search-gadget .refineTools > div').wrapInner('<div class="row"></div>').css('margin', '0');
        jQuery('.embedded-search .search-gadget > div').css('margin', '0');

        jQuery('#searchGadget .refineTools').show().addClass('col-md-4 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-botborder').css('position', 'absolute').css('border-top', 'none');
        jQuery('#searchGadget .locationFilter label').addClass('hidden-lg');
        jQuery('#searchGadget .locationFilter select option').eq(0).text('All Locations');

        setTimeout(function() {
            jQuery('#gadget__search .date').before(jQuery('#regionGadget .locationsFilter'));
            jQuery('#regionGadget .locationsFilter').addClass('col-md-6 col-lg-2 gadget__search-column gadget__search-column-select gadget__search-column-botborder');
            jQuery('#regionGadget .locationsFilter select').css('width', '100%');
            jQuery('#regionGadget .locationsFilter select option').eq(0).text('All Locations');
            jQuery('#regionGadget .locationsFilter span.label').wrap('<label></label>');
            jQuery('#regionGadget .locationsFilter span.label').addClass('gadget__search-label').removeClass('label');
            jQuery('#regionGadget .locationsFilter .input').css('display', 'block');
            jQuery('#regionGadget .locationsFilter label').addClass('hidden-lg');
            jQuery('#regionGadget .date').removeClass('col-md-4').addClass('col-md-6');
            jQuery('#regionGadget .period, #regionGadget .adults, #regionGadget .children, #regionGadget .infants').removeClass('col-md-4').addClass('col-md-3');
        }, 1000);

    });
});
