

function getImages(input,successData){
	//alert(input);
	$.ajax(`https:repetitora.net/api/JS/Images?page=${input}&count=1`, {
	success: successData
		}
	)
}


console.log(5);