$(function () {
	// body...
	$("#refreshbtn").click(function(){
	  $.get("/whiteboard_ajax.html",function(data,status){
	    var html_content = "";
	    data.forEach(function (ele) {
	      // body...
	      html_content += `<p>${ele}</p>`;
	    });
	    $("#mycontent").html(html_content);
	  });
	});



	$("#main-nav li").each(function(){ 
		var url = window.location.href;
		if($(this).find("a")[0].href == url){
			$(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
			$(this).addClass('active');
		}
		// console.log($(this).find("a")[0].href);
		// console.log(window.location);
		// console.log(window.location.href);
	}); 

	$(window).scroll(function() {
	       if ($(window).scrollTop() > 10)
	           $('div.go-top').show();
	       else
	           $('div.go-top').hide();
	});
   $('div.go-top').click(function() {
       $('html, body').animate({scrollTop: 0}, 10);
   });

})