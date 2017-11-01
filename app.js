window.onload=function(){
    let search=document.getElementById("search");
    let search_all=document.getElementById("definition");
    let result=document.getElementById("result");
    let search_term = document.getElementById("search_value");
    search.addEventListener("click",function(){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                result.innerHTML = "<h2>Results</h2><p>"+request.responseText+"</p>";
            }
        };
        let url = "request.php?q=&all=true";
        request.open("GET","request.php?q=&all=true",true);
        request.send();
    });
    search_all.addEventListener("click",function(){
        let request_all = new XMLHttpRequest();
        request_all.onreadystatechange = function(){
            if(request_all.readyState === 4 && request_all.status === 200){
                let list="<ol>";
                let xml_document = request_all.responseXML;
                let words = xml_document.getElementsByTagName("definition");
                for(let index = 0; index<words.length; index++){
                    list+="<li><h3>"+words[index].getAttribute("name")+"</h3><p>"+words[index].childNodes[0].nodeValue+"</p><p> - "+words[index].getAttributeNode("author").value+"</p></li>";
                }
                list+="</ol>";
                result.innerHTML = "<h2>Result</h2>"+list;
            }
        };
        request_all.open("GET","request.php?q=&all=true",true);
        request_all.send();
    });
};