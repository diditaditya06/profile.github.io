var hide;
function munculnama()
{
   if(hide==1) 
   {
    document.getElementsById("muncul").style.display="block";
    return hide=0;
   }
   else
   {
    document.getElementsById("muncul").style.display="none";
    return hide=1;
   }
}