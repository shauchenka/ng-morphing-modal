(function (window, document) {

    MorphingModal = function (options) {

        var that = this;

        that.selectorId = '[data-type="modal-trigger"]';//options.selector;
        that.selectorObj = $('[data-type="modal-trigger"]');
        that.contentSelector = '.cd-modal';
        that.contentSelectorObj = $('.cd-modal');



        // DEFAULT OPTIONS
        that.options = {
            selectorId: false,
            selectorObj: false,
            contentSelector: false,
            onAfterOpen: null,
            onAfterClose: null

        };

        // OVERWRITE DEFAULT OPTIONS
        for (i in options) that.options[i] = options[i];
        console.log(that.contentSelector);
        // INIT THE WHOLE DAMN THING!!!
        that.init();

    };
    MorphingModal.prototype = {

        obj: {},
        containerObj: {},
        init: function () {
            var that = this;

            that.corners = this.options.corners;


            jQuery(document).ready(function ($) {
                that.create();
            });

        },
        create: function () {
            var that = this;

            //trigger the animation - open modal window
            that.selectorObj.on('click', function () {
                var actionBtn = $(this),
                    scaleValue = that.retrieveScale(actionBtn.next('.cd-modal-bg')); //c

                actionBtn.addClass('to-circle');
                actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    that.animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
                });

                //if browser doesn't support transitions...
                if (actionBtn.parents('.no-csstransitions').length > 0) that.animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
            });

            //trigger the animation - close modal window
            $('.cd-section .cd-modal-close').on('click', function () {
                that.closeModal();
            });
            $(document).keyup(function (event) {
                if (event.which == '27') that.closeModal();
            });

            $(window).on('resize', function () {
                //on window resize - update cover layer dimention and position
                if ($('.cd-section.modal-is-visible').length > 0) window.requestAnimationFrame(that.updateLayer);
            });
        },
        retrieveScale: function (btn) {

            var that = this;
if(btn.offset()){


            var btnRadius = btn.width() / 2,
                left = btn.offset().left + btnRadius,
                top = btn.offset().top + btnRadius - $(window).scrollTop(),
                scale = that.scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

            btn.css('position', 'fixed').velocity({
                top: top - btnRadius,
                left: left - btnRadius,
                translateX: 0
            }, 0);
}else{
    scale=1;
}
            return scale;

        },
        scaleValue: function (topValue, leftValue, radiusValue, windowW, windowH) {

            var that = this;

            var maxDistHor = ( leftValue > windowW / 2) ? leftValue : (windowW - leftValue),
                maxDistVert = ( topValue > windowH / 2) ? topValue : (windowH - topValue);
            return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radiusValue);
        },
        animateLayer: function (layer, scaleVal, bool) {

            var that = this;

            layer.velocity({ scale: scaleVal }, 400, function () {
                $('body').toggleClass('overflow-hidden', bool);
                (bool)
                    ? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
                    : layer.removeClass('is-visible').removeAttr('style').siblings(that.selectorId).removeClass('to-circle');
            });
        },
        updateLayer: function () {

            var that = this;

            var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
                layerRadius = layer.width() / 2,
                layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
                layerLeft = layer.siblings('.btn').offset().left + layerRadius,
                scale = that.scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());

            layer.velocity({
                top: layerTop - layerRadius,
                left: layerLeft - layerRadius,
                scale: scale
            }, 0);
        },
        closeModal: function () {

            var that = this;

            var section = $('.cd-section.modal-is-visible');
            section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                that.animateLayer(section.find('.cd-modal-bg'), 1, false);
            });
            //if browser doesn't support transitions...
            if (section.parents('.no-csstransitions').length > 0) animateLayer(section.find('.cd-modal-bg'), 1, false);
        },

        destroy: function () {

        }
    }
})(window, document);
var myApp = angular.module('myApp', []).directive(
    'ngMorphingModal', function() {
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var uniqid = randLetter + Date.now();

        return {
            replace: true,
            restrict: 'AE',
            scope: {
                contentSelector: '@'
            },
            link: function (scope, element, attributes) {

            var MorphingModalObj = new MorphingModal({
                selectorId: '[data-type="modal-trigger"]',
                selectorObj: $('[data-type="modal-trigger"]'),
                contentSelector: scope.contentSelector,
                onAfterClose: null,
                onAfterOpen: function(){}
            });

        },
            templateUrl: '../js/td-modal.html'

    }
    });


myApp.controller("MyController", ["$scope", function($scope) {
    $scope.name = "World";
}]);

