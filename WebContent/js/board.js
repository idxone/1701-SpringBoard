/**
 * 
 */


function getId(id){return document.getElementById(id)}

function init(){
   var ff = document.frm_board;
  
   var btnInput = getId("btnInput");
   var btnInputR = getId("btnInputR");
   var btnList = getId("btnList");
   var btnView = getId("btnView");
   var btnDelete = getId("btnDelete");
   var btnModify = getId("btnModify");
   var btnModifyR = getId("btnModifyR");
   var btnRepl = getId("btnRepl");
   var btnReplR = getId("btnReplR");
   var fileatt = getId("fileatt");
   
   if(btnInput != null){
	     btnInput.onclick = function(){
         ff.action = "input.do";
         ff.submit();
      }
   }
   
   if(btnInputR != null){
      btnInputR.onclick = function(){
         ff.action = "inputR.do";
         ff.submit();
      }
   }
   
   if(btnList != null){
      btnList.onclick = function(){
         ff.action = "list.do";
         ff.submit();
      }
   }
   
   if(btnView != null){
      btnView.onclick = function(){
         ff.action = "view.jsp";
         ff.submit();
      }
   }
   
   if(btnDelete != null){
      btnDelete.onclick = function(){
         ff.action = "delete_result.jsp";
         ff.submit();
      }
   }
   
   if(btnModify != null){
      btnModify.onclick = function(){
         ff.action = "modify.jsp";
         ff.submit();
      }
   }
   
   if(btnModifyR != null){
      btnModifyR.onclick = function(){
         ff.action = "modify_result.jsp";
         ff.submit();
      }
   }
   
   if(btnRepl != null){
      btnRepl.onclick = function(){
         ff.action = "repl.jsp";
         ff.submit();
      }
   }
   
   if(btnReplR != null){
      btnReplR.onclick = function(){
         ff.action = "repl_result.jsp";
         ff.submit();
      }
   }
   
   
  
}