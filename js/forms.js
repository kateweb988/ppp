$(document).ready(function () {
   $('[data-submit1]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form1').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit2]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form2').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit3]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form3').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit4]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form4').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit5]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form5').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit6]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form6').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit7]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form7').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit8]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form8').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit9]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form9').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});

$(document).ready(function () {
   $('[data-submit10]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
   })
   $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
         var re = new RegExp(regexp);
         return this.optional(element) || re.test(value);
      },
      "Please check your input."
   );
   function valEl(el) {

      el.validate({
         rules: {
            tel: {
               required: true,
               regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
               required: true
            },
            email: {
               required: true,
               email: true
            }
         },
         messages: {
            tel: {
               required: 'Поле обязательно для заполнения',
               regex: 'Телефон может содержать символы + - ()'
            },
            name: {
               required: 'Поле обязательно для заполнения',
            },
            email: {
               required: 'Поле обязательно для заполнения',
               email: 'Неверный формат E-mail'
            }
         },
         submitHandler: function (form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
               case 'popupResult':
                  $.ajax({
                     type: 'POST',
                     url: $form.attr('action'),
                     data: $form.serialize(),
                  })
                     .always(function (response) {
                        setTimeout(function () {
                           $('#loader').fadeOut();
                        }, 800);
                        setTimeout(function () {
                           $.arcticmodal('close');
                           $('#popup-thank').arcticmodal({});
                           $form.trigger('reset');
                           //строки для остлеживания целей в Я.Метрике и Google Analytics
                        }, 1100);

                     });
                  break;
            }
            return false;
         }
      })
   }

   $('.js-form10').each(function () {
      valEl($(this));
   });
   $('[data-scroll]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
   })
});
