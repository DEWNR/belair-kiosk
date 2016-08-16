# BookEasy kiosk

This streamlined implementation of DEWNR's booking system for Innes National Park simplifies the booking process for visitors who are already on site. It also improves performance by reducing the number of times the [Impart Media Gadgets](https://gadgets.impartmedia.com/doc/) are initialised.

Note that the gadgets will only load if run from the www.environment.sa.gov.au domain.

## Region Gadget

Because it is not possible to load an Item Details Gadget and a Region Gadget on the same page, the Region Gadget is loaded through an iFrame. The iFrame continuously broadcasts its height to allow the parent window to adjust to the height of the iFrame to match the contents.

## Item Details Gadget

The details gadget is deleted and reinitialised every time the location changes. This ensures that the user can successfully switch between park entry (which is a tour) and accommodation.

## Cart Gadget

The Cart Gadget is currently configured to use the standard checkout page. Consider creating a new custom checkout page and updating the Cart Gadget's settings accordingly.
