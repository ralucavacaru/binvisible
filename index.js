var health = 50;

function setHealth(x) {
	var elem = document.getElementById("health-bar");
	if (x > health) {
		var id = setInterval(frame, 10);
		function frame() {
		  if (health >= x || health >= 100) {
		    clearInterval(id);
		  } 
		  else {
		    health++; 
	    	elem.style.height = health + '%'; 
			elem.innerHTML = health * 1  + '%';
		  }
		}
	}
	else {
		var id = setInterval(frame, 10);
		function frame() {
		  if (health <= x || health <= 0) {
		    clearInterval(id);
		  } 
		  else {
		    health--; 
	    	elem.style.height = health + '%'; 
			elem.innerHTML = health * 1  + '%';
		  }
		}
	}

	setInterval(changeColor, 10);
	function changeColor() {
		if (health > 70) {
			elem.style.backgroundColor = '#41a46d';
		}
		else if (health > 30) {
			elem.style.backgroundColor = '#e9b14b';
		}
		else {
			elem.style.backgroundColor = '#e03645';
		}
	}
}

$(document).ready(function(){
    $("#option3a").click(function(){
    	$("#scene1").nextAll().removeClass('flex');
    	$("#option3a").addClass('active');
		$("#option3b").removeClass('active');
        $("#scene4a").addClass('flex');
        setHealth(25);
    });
    $("#option3b").click(function(){
    	$("#scene1").nextAll().removeClass('flex');
    	$("#option3b").addClass('active');
		$("#option3a").removeClass('active');
        $("#scene4b").addClass('flex');
        setHealth(50);
    });
    $("#option7aa").click(function(){
    	$("#scene4b").nextAll().removeClass('flex');
    	$("#option7aa").addClass('active');
		$("#option7ab").removeClass('active');
        $("#scene7aa").addClass('flex');
        setHealth(0);
    });
    $("#option7ab").click(function(){
    	$("#scene4b").nextAll().removeClass('flex');
    	$("#option7ab").addClass('active');
		$("#option7aa").removeClass('active');
        $("#scene7ab").addClass('flex');
        setHealth(50);
    });
    $("#option7ba").click(function(){
    	$("#scene4b").nextAll().removeClass('flex');
    	$("#option7ba").addClass('active');
		$("#option7bb").removeClass('active');
        $("#scene7aa").addClass('flex');
        setHealth(0);
    });
    $("#option7bb").click(function(){
    	$("#scene4b").nextAll().removeClass('flex');
    	$("#option7bb").addClass('active');
		$("#option7ba").removeClass('active');
        $("#scene7ab").addClass('flex');
        setHealth(50);
    });
    $("#option10aba").click(function(){
    	$("#scene7ab").nextAll().removeClass('flex');
    	$("#option10aba").addClass('active');
		$("#option10abb").removeClass('active');
        $("#scene10aba").addClass('flex');
        setHealth(0);
    });
    $("#option10abb").click(function(){
    	$("#scene7ab").nextAll().removeClass('flex');
    	$("#option10abb").addClass('active');
		$("#option10aba").removeClass('active');
        $("#scene10abb").addClass('flex');
        setHealth(75);
    });
    $("#option13abb").click(function(){
        $("#scene13abb").addClass('flex');
        $("#option13abb").addClass('active');
        setHealth(100);
    });
});