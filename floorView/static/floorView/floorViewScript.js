window.addEventListener('load',function(){
	var rooms=document.getElementsByClassName('room');
	for (var i = 0; i < rooms.length; i++) {
		rooms[i].addEventListener('click', show);
	}
	var cross=document.getElementsByClassName('cross');
	cross[0].addEventListener('click', hide);
	var around_modal=document.getElementsByClassName("around_modal");
	window.onclick = function(event) {
    	if (event.target == around_modal[0]) {
        hide();
    	}
	};
	document.getElementById("backSideMenu").addEventListener('click', function(){
      document.getElementById("sideMenu").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      document.getElementById("backSideMenu").style.display = 'none'; 
    });
});
function show() {
	var modal=document.getElementsByClassName("grid_container");
	var around_modal=document.getElementsByClassName("around_modal");
	var number=document.getElementsByClassName("number");
	number[0].firstChild.textContent="Номер " + this.firstChild.textContent;
	modal[0].style.display = 'grid';
	around_modal[0].style.display = 'block';
	sessionStorage.setItem('room', this.firstChild.textContent);
				
}
function hide(){
	var modal=document.getElementsByClassName("grid_container");
	var around_modal=document.getElementsByClassName("around_modal");
	modal[0].style.display = 'none';
	around_modal[0].style.display = 'none';
}
function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("backSideMenu").style.display = 'block';    
}
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("backSideMenu").style.display = 'none'; 

}