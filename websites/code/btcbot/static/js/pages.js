((function() {
	$(document).ready(function() {
		return $("<div id='preview' class='wikistyle'></div>").insertAfter($("#page_body")), $(".edit a").click(function() {
			return $(this).parent().addClass("active"), $(".preview a").parent().removeClass("active"), $("#preview").hide(), $("#page_body").show(), !1
		}), $(".preview a").click(function() {
			return $(this).parent().addClass("active"), $(".edit a").parent().removeClass("active"), $("#preview").html("Loading..."), $("#page_body").hide(), $("#preview").show(), $.post("/wiki/preview", {
				body: $("#page_body").val()
			}, function(a) {
				return $("#preview").html(a), !1
			}), !1
		})
	})
})).call(this)