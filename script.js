
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



/*
var {
    laws
} = {
    "laws": [{
            "article": "第 1 條",
            "contents": [
                "本法所稱保險",
                "根據前項所訂之契約"
            ],
            "audio": "https://sodomcode.com/2022/06/26/chtlaw/%E4%BF%9D%E9%9A%AA%E6%B3%95/00001_000m01.mp3"
        }, {
            "article": "第 2 條",
            "contents": [
                "ver 1",
                "ver 1a",
                "ver 2"
            ],
            "audio": "https://sodomcode.com/2022/06/26/chtlaw/%E4%BF%9D%E9%9A%AA%E6%B3%95/00001_000m02.mp3"

        }, {
            "article": "第 3 條",
            "contents": [
                "ver 1",
                "ver 2"
            ],
            "audio": "https://sodomcode.com/2022/06/26/chtlaw/%E4%BF%9D%E9%9A%AA%E6%B3%95/00001_000m03.mp3"

        }
    ]
};
*/

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
		sound.src = url + laws[ran].ArticleContents[j][0] + '.mp3';
		console.log(url + laws[ran].ArticleContents[j][0] + '.mp3');
		sound.type = 'audio/mpeg';
		divAudio.appendChild(sound);
    }
	document.getElementById("contents").appendChild(divAudio);	



    contentDiv[0].style.height = "0px";
    toggles[0].style.color = "#111130";
    icons[0].classList.remove('fa-minus');
    icons[0].classList.add('fa-plus');

}