$(document).ready(function () {

  // 1. Show current year and today's date
  $("#year").text(new Date().getFullYear());
  $("#today").text(new Date().toLocaleDateString("en-GB"));

  // 2. Highlight the current page in the menu
  var page = location.pathname.split("/").pop() || "index.html";
  $("nav a.link").each(function () {
    if ($(this).attr("href") === page) {
      $(this).addClass("active");
    }
  });

  // 3. Mobile menu toggle
  $("#menuBtn").click(function () {
    $("#menu").toggleClass("open");
  });

  // 4. Animate skill bars
  $(".skill").each(function () {
    var level = $(this).data("level");
    $(this).find(".bar span").css("width", level + "%");
  });

  // 5. Print button
  $("#printBtn").click(function () {
    window.print();
  });

  // 6. Typing effect on home page
  var words = ["Web developer in the making", "Problem solver", "Quick learner"];
  var w = 0, c = 0, deleting = false;
  function type() {
    var word = words[w];
    $("#typed").text(word.substring(0, c));
    if (!deleting && c === word.length) { deleting = true; setTimeout(type, 1200); return; }
    if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
    c += deleting ? -1 : 1;
    setTimeout(type, deleting ? 40 : 80);
  }
  if ($("#typed").length) { type(); }

  // 7. Contact form validation
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var ok = true;
    $(".err").text("");
    $("#formMsg").text("");

    if ($.trim($("#name").val()).length < 2) {
      $("#nameErr").text("Enter your name."); ok = false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test($("#email").val())) {
      $("#emailErr").text("Enter a valid email."); ok = false;
    }
    if ($.trim($("#msg").val()).length < 10) {
      $("#msgErr").text("Write at least 10 characters."); ok = false;
    }
    if (ok) {
      $("#formMsg").text("Message sent. Thank you!");
      this.reset();
    }
  });

});