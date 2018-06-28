/*jshint esversion:6 */

  $(document).ready(function() {

    $(".next").on("click",function() {
      let elem = document.getElementsByClassName("nav")[0].getElementsByTagName("a");
      let elemCss=[];
      let lastDisplayed=0;
      let elemsVisible=$(".nav a[style*='inline-block']");
      let elemsNovisible=$(".nav a[style*='none']");
      let elemsIndet=$(".nav a[style!='display: none;'][style!='display: inline-block;']");

      //if we are not at the end...
      if ($(elem[elem.length-1]).css("display")!="inline-block"){
          //lastDisplayed is number of the last elem of navbar displayed
          for (i=0;i<elem.length;i++){
            elemCss.push($(elem[i]).css("display"));
            if ($(elem[i]).css("display")=="inline-block") lastDisplayed=i;
          }

          //hide first of displayed
          if ($(elem[0]).prop("style").cssText!="display: none;") {
               $(elem[0]).hide();
             }
          else {
             $(elemsIndet[0]).hide();
           }

        //show first of no displayed
        $(elem[lastDisplayed+1]).prop("style","display:inline-block");
      }
   });

   $(".previous").on("click",function() {
      let elem = document.getElementsByClassName("nav")[0].getElementsByTagName("a");
      let elemsVisible=$(".nav a[style*='inline-block']");
      let elemCss=[];
      let elemsNovisible=$(".nav a[style*='none']");
      let elemsIndet=$(".nav a[style!='display: none;'][style!='display: inline-block;']");
      let lastHided=0;


         //if we are not at the begin of nav items
      if ($(elem[0]).css("display")!="inline-block"){

          // lastHided is number of the last elem of navbar displayed
        for (i=0;i<elem.length,$(elem[i]).css("display")!="inline-block";i++){
          elemCss.push($(elem[i]).css("display"));
          if ($(elem[i]).css("display")=="none") lastHided=i;
        }
          // lastHided is number of the last elem of navbar displayed
        for (i=lastHided+1;i<elem.length;i++){
          elemCss.push($(elem[i]).css("display"));
          if ($(elem[i]).css("display")=="inline-block") lastshowed=i;
        }

        $(elem[lastHided]).prop("style","display:inline-block");
        $(elem[lastshowed]).prop("style","display:none");

      }

    });

  });

//Launches functions at the beginning, for test purposes
window.onload=function(){
  moveleft();
  moverigth();
};

   function moveleft(){

    console.log("I'm MOVELEFT, test function");

   }

  function moverigth(){
    console.log("I'm MOVERIGHT, test function");


   }
