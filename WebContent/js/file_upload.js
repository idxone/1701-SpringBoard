/**
 *  파일 업로드와 이미지 미리보기
 */
var cnt=0; //file태그의 name값을 구분:fileName1, fileName2...
function attFileAppend(ev){
	//기존의 추가되었던 file태그의 class='fileName'인 요소를 가져옴
	var tags= document.getElementsByClassName('fileName');  //tags는  null값임
	var yn = true; // file태그중 값이 비어있는 태그가 있다면 true
	
	//file태그중 값이 비어있는 태그를 삭제
	for(var t=0; t<tags.length-1; t++){
		if(tags[t].value ==''){
			var br=tags[t].nextElementSibling; //file태그의 오른쪽에 있는 br태그
			var img=tags[t].previousElementSibling;  //file태그왼쪽에 있는 img태그
			
			br.parentNode.removeChild(br);
			img.parentNode.removeChild(img);
			tags[t].parentNode.removeChild(tags[t]);
			yn=false;
		}
	}
	
	//비어있는 file태그를 추가하는 부분
	if(yn){//yn이 true일 경우에만
		cnt++;
		var img = document.createElement("img");
		var file = document.createElement('input');
		var br = document.createElement('br');
		
		//img태그의 속성
		img.setAttribute("width", "35px");
		img.setAttribute("align", "center");
		img.setAttribute("id", "fileName"+cnt);
		
		//file태그의 속성 지정
		file.setAttribute('type', 'file');
		file.setAttribute('class', 'fileName');
		file.setAttribute('name', 'fileName'+cnt);
		file.onchange=attFileAppend;
		
		//file태그와 br태그를 attfile영역에 추가 순서 중요!!!
		var div=document.getElementById('fileatt');
		div.appendChild(img);
		div.appendChild(file);
		div.appendChild(br);
		
		//--------------------
		//첨부파일 미리보기
		//--------------------
		var event = ev||window.event;
		if(event == null) return;
		
		
		var target = event.srcElement; //이벤트가 발생한 요소
		var tagName = target.name;  //이벤트가 발생한 요소의 태그이름
		var url = target.files[0];  //파일 태그의 선택된 파일 오브젝트
		
		var reader = new FileReader();  //파일을 로딩하기 위한 자바스크립트 객체
		reader.readAsDataURL(url);

		reader.onload=function(ev2){
			var img = new Image();
			img.src = ev2.target.result;
			document.getElementById(tagName).src=img.src;
		}
	}
}