window.addEventListener('load',function(){
	let btnContainer  = document.getElementsByClassName("floor_container");
	let btns = document.getElementsByClassName("floor_button");
	for (let i = 0; i < btns.length; i++) 
	{
 		btns[i].addEventListener("click", function() {

 			let topContainer = document.getElementsByClassName("container_top");
 			let roomTop = topContainer[0].getElementsByClassName("room");
 			let botContainer = document.getElementsByClassName("container_bottom");
 			let roomBot = botContainer[0].getElementsByClassName("room");

 			roomTop[0].firstChild.textContent=1;
 			roomBot[0].firstChild.textContent=2;
 			for(let j=1; j<roomTop.length; j++)
 			{
 				roomTop[j].firstChild.textContent=+roomTop[j-1].firstChild.textContent+2;
 				roomBot[j].firstChild.textContent=+roomBot[j-1].firstChild.textContent+2;
 			}

    		let current = document.getElementsByClassName("active");
    		if(current[0]!=null)
    		{
    			current[0].className = current[0].className.replace(" active", "");	
    		}    		
    		this.className += " active";
    		
			for(let y = 0; y<roomTop.length; y++)
			{
				let rmNTop=+roomTop[y].firstChild.textContent;
				let rmNBot=+roomBot[y].firstChild.textContent;
				roomTop[y].firstChild.textContent = rmNTop+100*(i+1);		
				roomBot[y].firstChild.textContent = rmNBot+100*(i+1);	
			}	
  		} );
	}
});
