(function() {
  'use strict';

  var
  		slideText = require('./slideText'),
  		map = require('./map'),
      card_menu = require('./card_menu'),
      manu = require('./menu'),
      height = require('./height'),
      increase = require('./increase_pic'),
      arrow = require('./arrow'),
      sned = require('./send'),
      countH = require('./countH');


  function isCurrent(page) {
    return $(page).length;
  };

  if (isCurrent('#contacts')) {
		map();
  };
  
  slideText();

  card_menu();
  
  manu();

  height();

  increase();

  arrow();

  sned();

  countH();    

   /*<script>
      (function(i,s,o,g,r,a,m){
        i['GoogleAnalyticsObject']=r;
        
        i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},
          
          i[r].l=1*new Date();
          a=s.createElement(o), 
          m=s.getElementsByTagName(o)[0];
          a.async=1;
          a.src=g;
          m.parentNode.insertBefore(a,m);
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-85254026-1', 'auto');
      ga('send', 'pageview');
    </script>

    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter40037115 = new Ya.Metrika({
                        id:40037115,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>

    <noscript><div><img src="https://mc.yandex.ru/watch/40037115" style="position:absolute; left:-9999px;" alt="" /></div></noscript>*/ 
  
})();