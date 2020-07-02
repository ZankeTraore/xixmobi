
        function myFunction() {
        
        
            var input, filter, ul, li, a, i;
            input=document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            nofound = document.getElementById("searchReponce");
            
            
             /* Loop through all list items, and hide
             those who don't match the search query */ 
            
            for (i = 0; i < li.length; i++) { 
            nofound.innerHTML="Pas de pub portant ce titre";
            
            a = li[i].getElementsByTagName("a")[0];
            
            if (a.innerHTML.toUpperCase()
            .indexOf(filter) > -1) {
              li[i].style.display = "";
            nofound.innerHTML="";
            
                } else {
                  li[i].style.display = "none";
                    }
                }
            }
            