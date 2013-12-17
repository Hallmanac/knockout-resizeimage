/************************************* 
* Use this binding to resize images to a maxWidth or maxHeight (or both).
* Either pass in the maxWidth & maxHeight parameters via an inline object on the binding itself.
*
* Example binding using an inline object: 
*        <img data-bind="resizeImage: { maxWidth: 200, maxHeight: 400 }, attr: { src: someSrcObject, alt: someAltObject, title: someTitleObject }" />"
**************************************/
(function () {
    var calculatedHeight = 0;
    var calculatedWidth = 0;

    var calcWidthAndHeight = function (givenMaxWidth, givenMaxHeight, givenImgWidth, givenImgHeight) {
        var widthRatio = (givenMaxWidth) || (givenMaxWidth !== 0) ? givenMaxWidth / givenImgWidth : 1;
        var heightRatio = (givenMaxHeight) || (givenMaxHeight !== 0) ? givenMaxHeight / givenImgHeight : 1;
        var finalRatio = (heightRatio < widthRatio) ? heightRatio : widthRatio;

        if (finalRatio <= 1) {
            calculatedWidth = Math.round(givenImgWidth * finalRatio);
            calculatedHeight = Math.round(givenImgHeight * finalRatio);
        } else {
            calculatedWidth = givenImgWidth;
            calculatedHeight = givenImgHeight;
        }
    };

    ko.bindingHandlers.resizeImage = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var img = new Image();
            var options = ko.utils.unwrapObservable(valueAccessor());
            if (!options.maxWidth && !options.maxHeight) {
                options = { maxWidth: allBindingsAccessor().maxWidth, maxHeight: allBindingsAccessor().maxHeight };
            }
            var mw = ko.utils.unwrapObservable(options.maxWidth);
            var mh = ko.utils.unwrapObservable(options.maxHeight);

            if (mw || mh) {
                var currentMaxWidth = (mw) ? mw : 0;
                var currentMaxHeight = (mh) ? mh : 0;

                $(element).load(
                    function () {
                        var imgWidth = $(element).width();
                        var imgHeight = $(element).height();
                        calcWidthAndHeight(currentMaxWidth, currentMaxHeight, imgWidth, imgHeight);
                        $(element).width(calculatedWidth);
                        $(element).height(calculatedHeight);
                    }
                );
            }
        },

        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var img = new Image();
            var options = ko.utils.unwrapObservable(valueAccessor());
            if (!options.maxWidth && !options.maxHeight) {
                options = { maxWidth: allBindingsAccessor().maxWidth, maxHeight: allBindingsAccessor().maxHeight };
            }
            
            var mw = ko.utils.unwrapObservable(options.maxWidth);
            var mh = ko.utils.unwrapObservable(options.maxHeight);
            
            if (mw || mh) {
                var currentMaxWidth = (mw) ? mw : 0;
                var currentMaxHeight = (mh) ? mh : 0;

                $(element).load(
                    function () {
                        var imgWidth = $(element).width();
                        var imgHeight = $(element).height();
                        calcWidthAndHeight(currentMaxWidth, currentMaxHeight, imgWidth, imgHeight);
                        $(element).width(calculatedWidth);
                        $(element).height(calculatedHeight);
                    }
                );
            }
        }
    };
})();
