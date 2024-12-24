/*
Template Name: Laravel E-Commerce Admin Dashboard
Author: Themesdesign
Website: https://themesdesign.in/
Contact: themesdesign.in@gmail.com
File: Email Editor Js File
*/

ClassicEditor
    .create( document.querySelector( '#email-editor' ) )
    .then( function(editor) {
        editor.ui.view.editable.element.style.height = '200px';
    } )
    .catch( function(error) {
        console.error( error );
    } );
