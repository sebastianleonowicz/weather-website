console.log("console operating");

//use v-on to refactor
$("#weather").on("click", function () {
    console.log("what");
    var string = $("#input").val()
    app.makeCall(string);
});




var app = new Vue({
    el: "#app",
    data: {

        data: [],
       
        wind: [],

    },
    updated: function () {

    },
    methods: {
        makeCall: function (string) {
            console.log("making call for " + string)
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + string + '&APPID=ab09102863dab40d247763093e6d11ff', {
                  
                })
                .then(function (response) {
                    // handle success
                    console.log(response);
                    console.log(response.data.main);
                    app.data = response.data.main;
                    app.wind = response.data.wind;
                console.log(app.wind.speed);
                    $("#app").css( 'display', 'flex');
                $(".col1, .col2, .col3, .col4").css( 'display', 'block');
                 $(".errorModal").css( 'display', 'none');
//                 $( this ).css( "background-color", "yellow" );/
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                $(".col1, .col2, .col3, .col4").css( 'display', 'none');
                $(".errorModal").css( 'display', 'flex');
                })
                .then(function () {
                    // always executed
                });

        }
    }

})


//function makeCall(string) {
//    console.log("making call for " + string)
//    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + string + '&APPID=ab09102863dab40d247763093e6d11ff', {
//         
//        })
//        .then(function (response) {
//            // handle success
//            console.log(response);
//        })
//        .catch(function (error) {
//            // handle error
//            console.log(error);
//        })
//        .then(function () {
//            // always executed
//        });
//
//}
