var images =["mother.jpg","download.jpg","download (1).png","download.png","brother.jpg","me1.jpg"];
var member =["Mother","Father","GrandMother","Brother","Brother","Me"]
var name3 =["Neeti Goyal","Sachin Goyal","Shoba Goyal","Aarav Goyal","Rutwik Goyal","Aditya Goyal"]
var i = 0;
function nextmember()
{
  if (i==6)
  {  
      i=0
      
  }
  document.getElementById("image1").src =images[i];
  document.getElementById("member").innerText=member[i];
  document.getElementById("name").innerText=name3[i];
  i++;
    console.log(images[i])
    console.log(member[i])
    console.log(name3[i])

  }
