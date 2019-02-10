$("button").click(function() {
    var name=$(".names").val();
    var hours=parseInt($(".hour").val());  
     var phones=$(".phone").val();
     var answer=(hours*11315);
     var result= (name+" you will use your "+phones+" for "+answer+" hours by 2050");
     
      $("h2").text(result);
});




    