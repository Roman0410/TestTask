$(".header-burger").click((function(e){$(".header-nav").toggleClass("open"),$(this).toggleClass("open"),$("html").toggleClass("lock"),$(".header .call").toggleClass("open")})),$(".nav-link").click((function(e){$(this).closest(".nav-item").find(".sub-menu").toggleClass("open"),$(this).find("svg").toggleClass("open")})),document.querySelectorAll(".faq-item").forEach((function(e){e.addEventListener("click",(function(e){let s=this.closest("li"),o=s.querySelector(".plus").classList.contains("open");document.querySelectorAll(".plus").forEach((function(e){e.classList.remove("open")})),document.querySelectorAll(".answer").forEach((function(e){e.classList.remove("open")})),document.querySelectorAll(".question").forEach((function(e){e.classList.remove("open")})),o?s.querySelector(".answer").classList.remove("open"):(s.querySelector(".answer").classList.add("open"),s.querySelector(".plus").classList.add("open"),s.querySelector(".question").classList.add("open"))}))}));