function checkCountry() {
    var selected = document.getElementById("States").value;

    try{
        document.getElementById("capital").remove();
    }
    catch{

    }
    if(selected.length > 0) {
        var capitalCity = document.createElement("p");
        capitalCity.innerHTML = "The Capital City Is: ";
        capitalCity.id = "capital"
        document.getElementById("Content").appendChild(capitalCity);

        if(selected == "AZ") {
            capitalCity.innerHTML = "The Capital City Is: Phoenix";
        }
        else if(selected == "CA") {
            capitalCity.innerHTML = "The Capital City Is: Sacramento";
        }
        else if(selected == "NV") {
            capitalCity.innerHTML = "The Capital City Is: Carson City";
        }
        else if(selected == "CO") {
            capitalCity.innerHTML = "The Capital City Is: Denver";
        }
        else if(selected == "UT") {
            capitalCity.innerHTML = "The Capital City Is: Salt Lake City";
        }
    }
}