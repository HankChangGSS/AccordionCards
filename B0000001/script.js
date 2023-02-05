
let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0089c7";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

Refresh();

function Refresh() {
    var ran = Math.floor(Math.random() * laws.length);
	if(laws[ran].ArticleNo==="")
	{
		//alert("xxx");
		Refresh();
		return;
	}
    //console.log(ran);

    var ctlHead = document.getElementById("article");
    ctlHead.innerText = laws[ran].Article;

    document.getElementById("contents").innerHTML = '';
	var divAudio = document.createElement("div");
	
    for (var j = 0; j < laws[ran].ArticleContents.length; j++) {
        var content = laws[ran].ArticleContents[j][1];
        var div = document.createElement("div");
        div.innerHTML = content;
        document.getElementById("contents").appendChild(div);	
		
		var sound = document.createElement('audio');
		sound.id = 'audio-player';
		sound.controls = 'controls';
		//sound.src = 'https://airandom.com/B0000001/00001_000m01.wav';
		sound.src = url + laws[ran].ArticleContents[j][0] + '.wav';
		//console.log(url + laws[ran].ArticleContents[j][0] + '.mp3');
		sound.type = 'audio/mpeg';
		divAudio.appendChild(sound);
    }
	document.getElementById("contents").appendChild(divAudio);	



    contentDiv[0].style.height = "0px";
    toggles[0].style.color = "#111130";
    icons[0].classList.remove('fa-minus');
    icons[0].classList.add('fa-plus');

}