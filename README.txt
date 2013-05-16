Installation
------------------
1. Unpack and move directory "form_placeholder" to your modules directory.
2. Enable it in the modules list of your site.
3. Go to configuraction page at "admin/config/user-interface/form-placeholder".
4. Specify CSS selectors for textfields you want to add a placeholder.


Usage
------------------
// Convert all childrens in given form
function MY_MODULE_form_FORM_ID_alter(&$form, &$form_state, $form_id) {
  $form['#form_placeholder'] = TRUE;
}

// Convert single form element
function MY_MODULE_form_FORM_ID_alter(&$form, &$form_state, $form_id) {
  $form['my_element']['#form_placeholder'] = TRUE;
}

It's also possible to convert form elements by classes:
1. form-placeholder-[include/exclude]-children
   Include/exclude all children of given class.
2. form-placeholder-[include/exclude]
   Include/exclude single element.
