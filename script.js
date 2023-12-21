document.addEventListener("DOMContentLoaded", function () {
    var openModalBtns = document.querySelectorAll(".openModalBtn");
    var modal = document.getElementById("myModal");
    var closeModalBtn = document.getElementById("closeModalBtn");

    openModalBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            modal.style.display = "block";
        });
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
