function calculator()
{
	var temp=document.getElementById("result").value;
	var res=eval(temp);
	document.getElementById("result").value=res;
}
function disp(x)
{
	document.getElementById("result").value += x;
}
function clr()
{
	document.getElementById("result").value="";
}
