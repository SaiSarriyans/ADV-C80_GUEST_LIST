names_of_people = [];

//output = [];

function Submit() {
    var GuestName = document.getElementById("name1").value;
    names_of_people.push(GuestName);
    document.getElementById("name_are_here").innerHTML = names_of_people;
    console.log(names_of_people);
    //var one = document.getElementById("name1").value;
//output.push(one + GuestName);
} 



    names_of_people.sort();

    function show()
    {
        document.getElementById("show_label").innerHTML = names_of_people; 
        document.getElementById("show_label").style.display = "inline-block"

    }



function search() {
    var s = document.getElementById("search_the_text").value;
    var found = 0;
    var j;
    for (j=0; j<names_of_people.length; j++)
         {
            if (s == names_of_people[j]) {
                found=found+1;
         }
    }
    document.getElementById("output").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+" time/s");
}
/*var lenght_of_name_of_people = names_of_people.length;
console.log(lenght_of_name_of_people);
for (var k = 0; k < lenght_of_name_of_people; k++) {
    display_people_array_sorting.push("NAME - " + name_of_the_people[k] + " < /h4>");
    console.log(display_people_array_sorting);*/
