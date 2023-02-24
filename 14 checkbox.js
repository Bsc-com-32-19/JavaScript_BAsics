document.getElementById("myButton").onclick = function(){
    //this easy to read
    const myCheckBox = document.getElementById("myCheckBox")
    if(myCheckBox.checked ) 

    // //or if(document.getElementById("myCheckBox")).checked{
    //           console.log("You are subscribed!");

    // }

    {
      console.log("You are subscribed!");
    } 
    else {
        console.log("You are not subscribed!");
    }   
}
