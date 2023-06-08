function back()
{
    window.location="activity_1.html";

}
    
function getScore()
{
    a=localStorage.getItem("score");
    document.getElementById("output").innerHTML=a;
    
}
    
