$(function () {
    "use strict";
    /* toggle button */
  
    $(document).ready(function () {
      function toggleSidebar() {
        const isLargeScreen = $(window).width() > 1199;
        $("body").toggleClass("toggled", isLargeScreen);
        $(".sidebar-wrapper").off("mouseenter mouseleave");
    
        if (isLargeScreen) {
          $(".sidebar-wrapper").hover(
            () => $("body").addClass("sidebar-hovered"),
            () => $("body").removeClass("sidebar-hovered")
          );
        }
      }
    
      toggleSidebar();
      $(window).resize(toggleSidebar);
    
      // Evento del botón para pantallas pequeñas
      $(".btn-toggle").click(function () {
        if ($(window).width() <= 1199) {
          $("body").toggleClass("toggled");
        }
      });
    });
    
    //$(document).ready(function () {
    //  // Añadir la clase 'toggled' al cargar la página para que el menú esté recogido por defecto
    //  $("body").addClass("toggled");
    //
    //  // Mostrar menú al hacer hover
    //  $(".sidebar-wrapper").hover(
    //    function () {
    //      $("body").addClass("sidebar-hovered");
    //    },
    //    function () {
    //      $("body").removeClass("sidebar-hovered");
    //    }
    //  );
    //});
    /* menu */
  
    $(function () {
      $('#sidenav').metisMenu();
    });
  
    $(".sidebar-close").on("click", function () {
      $("body").removeClass("toggled")
    })
  
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
  
    $(document).ready(function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 60) {
          $('.top-header .navbar').addClass('sticky-header');
        } else {
          $('.top-header .navbar').removeClass('sticky-header');
        }
      });
    });

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
  
    /* menu active */
  
    $(function () {
      for (var e = window.location, o = $(".metismenu li a").filter(function () {
        return this.href == e
      }).addClass("").parent().addClass("mm-active"); o.is("li");) o = o.parent("").addClass("mm-show").parent("").addClass("mm-active")
    });
  }
);