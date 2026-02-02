(function ($) {
    "use strict";

    $(document).ready(function () {

        $('[data-countdown]').each(function () {
            var $this = $(this);
            var finalDate = $this.data('countdown');

            function runCountdown() {
                var endTime = new Date(finalDate).getTime();
                var now = new Date().getTime();
                var distance = endTime - now;

                if (distance <= 0) {
                    $this.html("<h2 class='text-white'>We Are Live!</h2>");
                    return;
                }

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                var minutes = Math.floor((distance / (1000 * 60)) % 60);
                var seconds = Math.floor((distance / 1000) % 60);

                $this.html(
                    '<div class="d-flex">' +
                        '<div class="mr-4"><h2>' + days + '</h2><span>Days</span></div>' +
                        '<div class="mr-4"><h2>' + hours + '</h2><span>Hours</span></div>' +
                        '<div class="mr-4"><h2>' + minutes + '</h2><span>Minutes</span></div>' +
                        '<div><h2>' + seconds + '</h2><span>Seconds</span></div>' +
                    '</div>'
                );
            }

            runCountdown();
            setInterval(runCountdown, 1000);
        });

    });

})(jQuery);
