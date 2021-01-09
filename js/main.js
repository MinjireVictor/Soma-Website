$(document).ready(function(){
    /** create variables for the classes */
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    /**click event on toogle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

    });

});