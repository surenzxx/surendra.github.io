// JQuery for about me javascript – https://nnattawat.github.io/slideReveal/
$(function($) {
    var aboutMeSlider = $("#aboutMeSlider").slideReveal({
      trigger: $("#aboutMeTrigger"),
      push: false,
      overlay: true,
      speed: 700,
      width: "53%",
      position: "right",
      autoEscape: true,
    });
});

//Jquery for skills javascript – https://nnattawat.github.io/slideReveal/
$(function($) {
    var skillsSlider = $("#skillsSlider").slideReveal({
      trigger: $("#skillsTrigger"),
      push: false,
      overlay: true,
      speed: 700,
      width: "53%",
      position: "right",
      autoEscape: true,
    });
});