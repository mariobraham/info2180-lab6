window.onload=function(){
    let search=document.getElementById("search");
    let result=document.getElementById("result");
    let search_term=document.getElementById("search_value");
    search.addEventListener("click",function(){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                result.innerHTML = "<h2>Result</h2>"+request.responseText;
            }
        };
        let url = "request.php?q="+search_term.value;
        request.open("GET",url,true);
        request.send();
    });
};