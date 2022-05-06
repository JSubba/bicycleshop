$(document).ready(function () {
  $(".menu-icon").on({
    click: () => {
      $(".mobile-menu").toggle();
    },
    mouseup: () => {
      $(".fa-solid").toggleClass("fa-bars-staggered fa-x");
    },
  });
});
