$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("open");
  $(this).toggleClass("open");
  $("html").toggleClass("lock");
  $(".header .call").toggleClass("open");
});
$(".nav-link").click(function (event) {
  $(this).closest(".nav-item").find(".sub-menu").toggleClass("open");
  $(this).find("svg").toggleClass("open");
});

document.querySelectorAll(".faq-item").forEach(function (item) {
  item.addEventListener("click", function (event) {
    let parentListItem = this.closest("li");
    let isPlusOpen = parentListItem
      .querySelector(".plus")
      .classList.contains("open");

    document.querySelectorAll(".plus").forEach(function (plus) {
      plus.classList.remove("open");
    });
    document.querySelectorAll(".answer").forEach(function (answer) {
      answer.classList.remove("open");
    });
    document.querySelectorAll(".question").forEach(function (question) {
      question.classList.remove("open");
    });

    if (isPlusOpen) {
      parentListItem.querySelector(".answer").classList.remove("open");
    } else {
      parentListItem.querySelector(".answer").classList.add("open");
      parentListItem.querySelector(".plus").classList.add("open");
      parentListItem.querySelector(".question").classList.add("open");
    }
  });
});
