// ICON TOGGLE
(function () {

    "use strict";

    var toggles = document.querySelectorAll("li > a > .fa-chevron-left");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("mouseenter", function (e) {
            e.preventDefault();

            if (this.classList.contains("fa-chevron-left") === true) {
                this.classList.remove("fa-chevron-left");
                this.classList.add("fa-chevron-right");
            }
            else if (this.classList.contains("fa-chevron-right") === true) {
                this.classList.remove("fa-chevron-right");
                this.classList.add("fa-chevron-left");
            }
        });
        toggle.addEventListener("mouseleave", function (e) {
            e.preventDefault();

            if (this.classList.contains("fa-chevron-right") === true) {
                this.classList.remove("fa-chevron-right");
                this.classList.add("fa-chevron-left");
            }
        });
    }

})();