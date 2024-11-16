$(function () {
    "use strict";
    /* toggle button */
  
    /* dark mode button */
  
    $(".dark-mode i").click(function () {
      $(this).text(function (i, v) {
        return v === 'dark_mode' ? 'light_mode' : 'dark_mode'
      })
    });
  
    $(".dark-mode").click(function () {
      $("html").attr("data-bs-theme", function (i, v) {
        return v === 'dark' ? 'light' : 'dark';
      })
    })
  
    /* sticky header */
    
    /*
    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 60) {
          $('.top-header .navbar').addClass('sticky-header');
        } else {
          $('.top-header .navbar').removeClass('sticky-header');
        }
      });
    });
    */

    /* switcher */
  
    $("#BlueTheme").on("click", function () {
      $("html").attr("data-bs-theme", "blue-theme")
    }),
  
    $("#LightTheme").on("click", function () {
      $("html").attr("data-bs-theme", "light")
    }),
  
    $("#DarkTheme").on("click", function () {
      $("html").attr("data-bs-theme", "dark")
    }),

    $("#SemiDarkTheme").on("click", function () {
      $("html").attr("data-bs-theme", "semi-dark")
    }),

    $("#BoderedTheme").on("click", function () {
      $("html").attr("data-bs-theme", "bodered-theme")
    })
  }
);