(function($, Drupal) {

  Drupal.behaviors.form_placeholder = {
    attach: function(context, settings) {
      var include = Drupal.settings.form_placeholder.include;
      var exclude = Drupal.settings.form_placeholder.exclude;
      var required = Drupal.settings.form_placeholder.required;

      $(include, context).not(exclude).each(function() {
        textfield = $(this);

        // Check if element is a textfield
        if (!textfield.is('input[type=text], input[type=email], input[type=password], textarea')) {
          return;
        }

        form = textfield.closest('form');
        label = form.find('label[for=' + textfield.attr('id') + ']');

        if (required == 'append') {
          label.find('.form-required').insertAfter(textfield).prepend('&nbsp;');
        }
        else if (required == 'remove') {
          label.find('.form-required').remove();
        }
        else if (required == 'text') {
          label.find('.form-required').text('(' + Drupal.t('required') + ')');
        }

        label.hide();

        textfield.attr('placeholder', label.text());
        textfield.placeholder();
      });
    }
  }

})(jQuery, Drupal);
