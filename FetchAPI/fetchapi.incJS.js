$(document).ready(function () {
    displayUsers();
});




function displayUsers() {

    $.ajax({
        url: 'fetchapi.incPHP.php',
        type: 'POST',
        dataType: 'json',
        success: function (apiData) {
            //Test slet når programmet er færdigt
            //console.log(apiData);
            //$("#hfpro").append("<div class=\"img-container\"><p>MCLovin</p></div>");
            //Stadig test skal 
            
             console.log(apiData);


            var i;
            var j;

            for (i = 0; i < 260; i++) {
                //alert([i]);
                if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1) {

                    $("#hfpro").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }
            }
            
            
            for (j = 0; j < 400; j++) {
                //alert([i]);
                if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2) {

                    $("#hfit").append("<div class=\"img-container\"><p>"+ apiData.result[j].student_id +"</p></div>");
                }
            }
            
            

            /*
              for (i = 0; i < 400; i++) {
                //alert([i]);
                if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1) {

                    $("#hfpro").append("<div class=\"img-container\"><img src=\"images/" + apiData.result[i].student_id+".png\" style=\"width=100%\"/></div>");
                }
            }
             
             **/
        }
    });
}
