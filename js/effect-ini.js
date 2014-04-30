// JavaScript Document

			$(document).ready(function() {
				$("#newsletter").livingElements("images/input-mask.png", {
				background:"url('images/gradient.png') no-repeat",
				easing: 'swing',
				preAnimationStartOpacity: 1,
				mainAnimationFade: false,
				scrollDirection: 'horizontal',					
				mainAnimationDuration:3800,
				mainAnimationStartBackgroundPositionX: -1300,     			
     			mainAnimationEndBackgroundPositionX: 0,
     			postAnimationEndOpacity: 0		
				});
				$(function () {
				var austDay = new Date();
				austDay = new Date(austDay.getFullYear() + 1, 6 - 14, 16);
				$('#countdown').countdown({until: austDay, layout: 
								'<div id="days" class="numbers">{dnn}</div>'+
								'<div class="spacer"></div>'+
								'<div id="hours" class="numbers">{hnn}</div>'+
								'<div class="spacer"></div>'+
								'<div id="minutes" class="numbers">{mnn}</div>'+
								'<div class="spacer"></div>'+
								'<div id="seconds" class="numbers">{snn}</div>'+
								'</div>'});
			});
			});