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

	$("#addrow").click(function (argument) {
		// body...
		var $tawb = $("#tawb");
		var rows_count = $tawb.attr("rows");
		var tmp = Number(rows_count);
		if (tmp < 40) {
			rows_count = (Number(rows_count)+5).toString();
			$tawb.attr({rows: rows_count});
			// console.log(rows_count);
		}
	})


	$("#main-nav li").each(function(){ 
		var url = window.location.href;
		if($(this).find("a")[0].href == url){
			$(this).siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
			$(this).addClass('active');
		}
	}); 

	$(window).scroll(function() {
	       if ($(window).scrollTop() > 10)
	           $('div.go-top').show();
	       else
	           $('div.go-top').hide();
	});
	
	$(".go-top").hover(function () {
		// body...
		$(this).css('background-color', '#ffaeb9');
	},function () {
		// body...
		$(this).css('background-color', '#eddec2');
	});

	$('div.go-top').click(function() {
	   $('html, body').animate({scrollTop: 0}, 10);
	});

	//f方案一，借助表单插件
	mySubmit = function () {
	  // body...
	  var options = {
	    url:'/whiteboard.html',
	    type:'post',
	    success: function (data) {
	      // body...
	      var html_content = "";
	      data.forEach(function (ele) {
	        // body...
	        html_content += `<p>${ele}</p>`;
	      });
	      $("#mycontent").html(html_content);
	    }
	  };
	  $("#whiteboard").ajaxSubmit(options);
	  // $("#whiteboard").submit();
	}

	// 方案二:
	// testSubmit = function () {
	// 	// body...
	// 	$("#whiteboard").submit(function () {
	// 		// body...
	// 		console.log("testSubmit");
	// 		console.log($(this).serialize());
	// 		var options = {
	// 			url:'/whiteboard.html',
	// 			type:"post",
	// 			data:$(this).serialize(),
	// 			success:function (data) {
	// 				// body...
	// 				    var html_content = "";
	// 				    data.forEach(function (ele) {
	// 				      // body...
	// 				      html_content += `<p>${ele}</p>`;
	// 				    });
	// 				    $("#mycontent").html(html_content);
	// 			}

	// 		}
	// 		$.ajax(options);
	// 	});
	// }


})
