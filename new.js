

    'use strict';
    //alert('Start');
    var tmp=document.querySelectorAll("#grid > div");
    for(var i=0;i<tmp.length;i++)
    {
      tmp[i].setAttribute('onclick','selected()');
    }

    var count=0;
    function selected()
    {
        count++;
        
        var a=document.getElementById('grid').childNodes;
        for (var i=0;i<a.length;i++)
        {
            if(a[i].nodeName=="DIV")
            {
                
                if(a[i].textContent==count)
                {
                    a[i].style.backgroundColor="green";
                    
                }
                else
                {
                    a[i].style.backgroundColor="silver";
                
                }

            }

        }
    }
selected();

