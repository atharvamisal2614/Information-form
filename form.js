var loadFile=function(event){
    var image=document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
}

function show()
{
    document.getElementById('visible').innerHTML = "Your Name = "+" "+ document.getElementById("name").value
                                    +"<br>"+"Your Phone.no = "+document.getElementById("phone").value
                                    +"<br>"+"Your Age = "+document.getElementById("age").value
                                    +"<br>"+"Your City = "+document.getElementById("city").value
                                    +"<br>"+"Your Date of Birth = "+document.getElementById("dob").value
                                    +"<br>"+"Your Gender = "+document.getElementById("gender").value
}
