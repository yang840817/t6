/*jslint browser: true*/
/*global $, jQuery, alert*/

$('.arrow').on('click', function () {
    var self = $(this);
    function getClass() {
        var result = $('#bigpicture').attr('class').match(/\d+$/)[0];
        return result;
    }
    function addIndex(self, index, slideMax) {
        if (self.attr('id') === 'leftarrow') {
            if (index === 1) {
                index = slideMax;
            } else {
                index -= 1;
            }
        } else {
            if (index === slideMax) {
                index = 1;
            } else {
                index += 1;
            }
        }
        return index;
    }
    var slideMax = 3;
    var index = Number(getClass());
    var newIndex = addIndex(self, index, slideMax);
    var nextImg = $('#bigpicture').attr('class').replace(/\d+$/, newIndex);
    $('#bigpicture').attr('class', nextImg);
});
