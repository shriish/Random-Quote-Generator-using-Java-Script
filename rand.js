var q = ['The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela','The way to get started is to quit talking and begin doing. -Walt Disney'
,'If life were predictable it would cease to be life, and be without flavor.-Eleanor Roosevelt']
function newquote()
{
var random = Math.floor(Math.random()*(q.length));	
document.getElementById("quotes").innerHTML=q[random];
	
	
}