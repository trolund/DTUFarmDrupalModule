
jQuery(function() {
    console.log( "ready!" );
    jQuery('.nav-tabs').append("<li><a class=\"DTUBtn\" href='#DTUBackend'>Få smart plan fra DTU</a></li>")

    jQuery('.DTUBtn').click(function () {
        fetch("https://distgalgeleg.herokuapp.com/api/game/getAntalForkerteBogstaver?userid=s161791") // Call the fetch function passing the url of the API as a parameter
            .then(function (data) {
                // Here you get the data to modify as you please
                console.log(data);
            })
            .catch(function (error) {
                console.log("Der skete en fejl..")
            });
})

});