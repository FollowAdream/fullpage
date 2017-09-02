$(function(){

	$("#box2").delay(500).animate({
		"right":"0px"
	},800,function(){
		$("#box1").find("h2").animate({
			"top":"0px"
		},800,function(){
			$("#box1").find("p").animate({
				"top":"0px"
			},1000,function(){
				$("#btn").animate({
					"left":"0px"
				});
			});
		});
	});
});

$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		menu: '#menu',
		loopBottom: true,

		afterLoad: function(anchorLink, index){
			if(index==1){
				$("#box2").delay(500).animate({
					"right":"0px"
				},800,function(){
					$("#box1").find("h2").animate({
						"top":"0px"
					},800,function(){
						$("#box1").find("p").animate({
							"top":"0px"
						},800,function(){
							$("#btn").animate({
								"left":"0px"
							});
						});
					});
				});
			}

			if(index==2){
				$("#box3").delay(500).animate({
					"left":"26%",
				},500,function(){
					$("#more").animate({
						"top":"84%"
					},500,function(){
						$("#btn").animate({
							"left":"0px"
						});
					});
				});
			}

			if(index==3){
				$(".gc1").css("display","block").delay(500).animate({
					"top":"-100px"
				},500,function(){
					$(".gc2").css("display","block").delay(500).animate({
						"top":"0px"
					},500,function(){
						$(".gc3").css("display","block").delay(500).animate({
							"top":"50px"
						},500,function(){
							$("#btn").animate({
								"left":"0px"
							});
						});
					});
				});
			}
		},

		onLeave: function(index, direction){
			if(index==1){
				$("#box1").find("h2").animate({
					"top":"-400px"
				},500,function(){
					$("#box1").find("p").animate({
						"top":"-400px"
					},500,function(){
						$("#btn").animate({
							"left":"120%"
						});
					});
				});
			}

			if(index==2){
				$("#box3").delay(500).animate({
					"left":"-120%",
				},500,function(){
					$("#more").animate({
						"top":"100%"
					},500,function(){
						$("#btn").animate({
							"left":"120%"
						});
					});
				});
			}

			if(index==3){
				$(".gc1").css("display","none").delay(500).animate({
					"top":"-500px"
				},500,function(){
					$(".gc2").css("display","none").delay(500).animate({
						"top":"500px"
					},500,function(){
						$(".gc3").css("display","none").delay(500).animate({
							"top":"-500px"
						},500,function(){
							$("#btn").animate({
								"left":"120%"
							});
						});
					});
				});
			}
		},

		'navigation': true,
		continuousVertical: true
	});	
});
