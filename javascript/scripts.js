var json = new XMLHttpRequest();
var create_html = "";
   json.open("GET", "https://raw.githubusercontent.com/oShadow05/Homework-Json/master/data.json", false);
   json.onreadystatechange = function ()
   {
       if(json.readyState === 4)
       {
           if(json.status === 200 || json.status == 0)
           {
               var text = json.responseText;
               json_parse = JSON.parse(text);
               create_html += "<ul class='list-container'>";
               for(var i=0; i<json_parse.homework.length; i++)
               {
                 create_html += "<li class='date'>" + json_parse.homework[i].date + "</li>";
                 create_html += "<li class='subject'>" + json_parse.homework[i].materia + "</li>";
                 create_html += "<li class='matter'>" + json_parse.homework[i].contenuto + "</li>";
               }
               create_html += "</ul>";
           }
       }
   }
   json.send(null);

document.getElementById('compiti').innerHTML = create_html;
