// ICON TOGGLE
(function () {

    "use strict";

    let toggles = document.querySelectorAll("a > li > .fa-chevron-left");

    for (let i = toggles.length - 1; i >= 0; i--) {
        let toggle = toggles[i];
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

let edit = document.querySelector('#edit');
let input = document.getElementsByTagName('input');

for (let d = input.length - 1; d >= 0; d--) {
    edit.addEventListener("click", function(e) {
        input[d].removeAttribute("disabled");
    });
};
