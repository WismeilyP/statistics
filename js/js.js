$(window).resize(function(){
    windows_(); 
    font_();

  });
  

 


//Get Data
fetch("./json.json")
.then(response => response.json())
.then(data => {

    document.querySelector("#container-influence").innerHTML = `<div class="one influence"><p>${data.leaders}</p><br><h2>LEADERS</h2></div> <div class="one influence"><p>${data.churchNumber}</p><br><h2>INFLUENCE ON NUMBER OF CHURCHES</h2></div> <div class="one influence"><p>${data.alone}</p><br><h2>INDIVIDUAL INFLUENCE</h2></div>`;
    document.querySelector("#container-language").innerHTML = `<h3>Language</h3><br><div class="one"><p>${data.language}</p><br><h2>LANGUAGE</h2></div>`;
    document.querySelector("#container-country").innerHTML = `<h3>Country</h3><br><div class="one"><p>${data.country}</p><br><h2>COUNTRY</h2></div>`;

    info= data.titles.map(e => {
        return `<div class="one title"><p>${e.count}</p> <br><h2 id="m"> ${e.title.toUpperCase()}</h2></div>`;
    }).join('');  
    document.querySelector("#container-title").innerHTML = info;

    infotwo= data.rangeMember.map(e => {
        return `<div id="range-mobile">${e.range} Members</div> <div class="movil"> <div id="range-desktop">${e.range} Members </div>  <div id="bar" style=" position: absolute; width: 45%;border-radius: 1em;background-color: #cbe5f9;"><div style="position: relative; width:${e.percentage}%;height: 1em;border-radius: 4em 0em 0em 4em;background-color: #007df9;color: #007df9;"> </div></div>  <div id="ministries"><strong>${e.percentage.toFixed(2)}% - ${e.count} Ministries</strong></div>  </div>`;
    }).join('');
    document.querySelector("#container-members").innerHTML = infotwo;


    var obj = (data["rangeMember"]);
    var asis= JSON.stringify(data["rangeMember"],["percentage"])
   

    console.log(asis);


})


















  
  function font_()
  {
      var width_ = $(window).width();
  
      i = 17;
  
      if(width_ > 450)
          i = 13
  
      if(width_ > 500)
          i = 12
  
      if(width_ > 600)
          i = 10
  
      if(width_ > 700)
          i = 9
  
      if (width_ > 992 && type == "landscape")
          var i = 5.5;
  
      var font_ = width_ * i / 400;
      $("body").css("font-size", font_+"px"); 


     
      
  }
  
  var type = "";
  
  function windows_()
  {
      var windows_w = $(window).width();
      var windows_h = $(window).height();
    
      var n_windows_w = (windows_w * 0.1) + windows_w;
      if (n_windows_w < windows_h){
          $("body").removeClass('landscape');
          $("body").addClass('portrait');
          type = 'portrait';
      }else{
          $("body").removeClass('portrait');
          $("body").addClass('landscape');
          type = 'landscape';
      }
    
  }
  
  setTimeout(function(){ windows_(); }, 50);
  setTimeout(function(){ font_(); }, 100);


