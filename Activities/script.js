function whatShallWear(temp) {
    if(temp < 60) {
        console.log("Wear a jacket");
    } else if (temp< 70) {
        console.log ('Wear a sweater');
    } else {
        console.log ("Wear a T-shirt")
    }
}

//Example calls
whatShallWear(80);
whatShallWear(60);
whatShallWear(50);