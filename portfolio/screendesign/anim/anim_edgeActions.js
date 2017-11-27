
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'frame_01'
   (function(symbolName) {   
   
   })("frame_01");
   //Edge symbol end:'frame_01'

   //=========================================================
   
   //Edge symbol: 'footer_01'
   (function(symbolName) {   
   
   })("footer_01");
   //Edge symbol end:'footer_01'

   //=========================================================
   
   //Edge symbol: 'Symbol_01'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Button_01}", "click", function(sym, e) {
         window.open("", "_blank");
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_01}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_01}", "mouseout", function(sym, e) {
         sym.play("start");

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bg_01}", "mouseover", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_01}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_01}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_01}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("", "_blank");
         

      });
         //Edge binding end

   })("Symbol_01");
   //Edge symbol end:'Symbol_01'

   //=========================================================
   
   //Edge symbol: 'Symbol_02'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Button_02}", "click", function(sym, e) {
         window.open("", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_02}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_02}", "mouseout", function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bg_02}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_02}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_02}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_02}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("", "_blank");
         

      });
      //Edge binding end

   })("Symbol_02");
   //Edge symbol end:'Symbol_02'

   //=========================================================
   
   //Edge symbol: 'Symbol_03'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Button_03}", "click", function(sym, e) {
         window.open("", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_03}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_03}", "mouseout", function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bg_03}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_03}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_03}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_03}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("", "_blank");
         

      });
      //Edge binding end

   })("Symbol_03");
   //Edge symbol end:'Symbol_03'

   //=========================================================
   
   //Edge symbol: 'Symbol_04'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Button_04}", "click", function(sym, e) {
         window.open("", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_04}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Button_04}", "mouseout", function(sym, e) {
         sym.play("start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bg_04}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_04}", "mouseout", function(sym, e) {
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_04}", "mouseover", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${link_04}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("", "_blank");
         

      });
      //Edge binding end

   })("Symbol_04");
   //Edge symbol end:'Symbol_04'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-320695945");