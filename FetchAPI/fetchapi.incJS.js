$(document).ready(function () {
    displayUsers();
});




function displayUsers() {

    $.ajax({
        url: 'fetchapi.incPHP.php',
        type: 'POST',
        dataType: 'json',
        success: function (apiData) {
            
            console.log(apiData);

            var i;
            var j;
            
            
            //Programmør kode.
            for (i = 0; i < 270; i++) {
                if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1 && apiData.result[i].progress_id == 1 ) {
                    $("#hfpro1").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1 && apiData.result[i].progress_id == 2 ) {
                    $("#hfpro2").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1 && apiData.result[i].progress_id == 3 ) {
                    $("#hfpro3").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1 && apiData.result[i].progress_id == 4 ) {
                    $("#hfpro4").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[i].student_presence_id == 4 && apiData.result[i].education_id == 1 && apiData.result[i].progress_id == 5 ) {
                    $("#hfpro5").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }                  
                
            }
            
            
            
            //IT-Supporter kode.
            for (j = 0; j < 400; j++) {
                //alert([i]);
                if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2 && apiData.result[j].progress_id == 1) {
                    $("#hfit1").append("<div class=\"img-container\"><p>"+ apiData.result[j].student_id +"</p></div>");
                }else if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2 && apiData.result[j].progress_id == 2 ) {
                    $("#hfit2").append("<div class=\"img-container\"><p>"+ apiData.result[j].student_id +"</p></div>");
                }else if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2 && apiData.result[j].progress_id == 3 ) {
                    $("#hfit3").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2 && apiData.result[j].progress_id == 4 ) {
                    $("#hfit4").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
                }else if (apiData.result[j].student_presence_id == 4 && apiData.result[j].education_id == 2 && apiData.result[j].progress_id == 5 ) {
                    $("#hfit5").append("<div class=\"img-container\"><p>"+ apiData.result[i].student_id +"</p></div>");
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
