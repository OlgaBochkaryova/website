/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {
                
                $.fn.multiselect = function () {

                    var settings = $.extend({
                        children: "tbody tr",
                        className: "td_selected",
                        onSelect: function () {}
                    }, arguments[0] || {});

                    return this.each(function (_, that) {
                        var $ch = $(this).find(settings.children),
                                sel = [],
                                last;

                        $ch.on("mousedown", function (ev) {
                            var isCtrl = (ev.ctrlKey || ev.metaKey),
                                    isShift = ev.shiftKey,
                                    ti = $ch.index(this),
                                    li = $ch.index(last),
                                    ai = $.inArray(this, sel);

                            if (isShift || isCtrl)
                                ev.preventDefault();

                            $(sel).removeClass(settings.className);

                            if (isCtrl) {
                                if (ai > -1)
                                    sel.splice(ai, 1);
                                else
                                    sel.push(this);
                            } else if (isShift && sel.length > 0) {
                                if (ti > li)
                                    ti = [li, li = ti][0];
                                sel = $ch.slice(ti, li + 1);
                            } else {
                                sel = ai < 0 || sel.length > 1 ? [this] : [];
                            }

                            last = this;
                            $(sel).addClass(settings.className);
                            settings.onSelect.call(that, sel);
                        });
                    });
                };
            }(jQuery));

