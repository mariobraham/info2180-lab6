window.onload=function(){
    let search=document.getElementById("search");
    let result=document.getElementById("result");
    search.addEventListener("click",function(){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                let response=document.createElement("p");
                response.innerHTML=request.responseText;
                result.appendChild(response);
            }
        };
        let url = "request.php?q="+document.getElementById("search_value").value;
        request.open("GET",url,true);
        request.send();
    });
};