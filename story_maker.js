function makeStory() {

    // get form values
    var title = document.getElementById('title').value;

    var name1 = document.getElementById('name1').value;

    var name2 = document.getElementById('name2').value;

    var noun1 = document.getElementById('noun1').value;

    var noun2 = document.getElementById('noun2').value;

    var name3 = document.getElementById('name3').value;

    var noun3 = document.getElementById('noun3').value;

    var adjective1 = document.getElementById('adjective1').value;

    var verb1 = document.getElementById('verb1').value;

    var verb2 = document.getElementById('verb2').value;

    var verb3 = document.getElementById('verb3').value;

    var noun4 = document.getElementById('noun4').value;

    var noun5 = document.getElementById('noun5').value;

    var interjection1 = document.getElementById('interjection1').value;

    var noun6 = document.getElementById('noun6').value;

    var noun7 = document.getElementById('noun7').value;

    var noun8 = document.getElementById('noun8').value;

    var name4 = document.getElementById('name4').value;


    // Set title of story.
    var title = "Halloween Adventure";


    // Build story.
    var story = "Two friends " + name1 + " and " + name2 + " were wandering around the city to play tricks on Halloween. As they were walking, they passed "
    + noun1 + " where they heard weird " + noun2 + " from inside. " + name3 + " decided to go imvestigate. To get into the building, they climbed through an open "
    + noun3 + ". Inside, the hallway was dark and " + adjective1 + ". They heard " + verb1 + " coming from upstairs. "
    + verb2 + ", they climbed the stairs. In the hallway there was a light that " + verb3 + " from the ceiling. Suddenly, a "
    + noun4 + " appeared in the " + noun5 + " coming from an open door. " + interjection1 + "! " + noun6 + " is haunted! Suddenly, a gust of "
    + noun7 + " knocked down the " + noun8 + " and revealed " + name4 + " trying to scare them.";

    // Display story.
    document.getElementById('story').innerHTML = story;
    document.getElementById('title').innerHTML = title;


    var x = document.getElementById("instru");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}
