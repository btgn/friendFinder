var peopleArray = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/characters", function (req, res) {
        return res.json(peopleArray);
    });

    app.post("/api/characters", function (req, res) {

        var newPerson = req.body;

        let newPersons = [];

        var diffArray = [];

        var sum = 0;

        let scoreArray = [];

        for (var i = 0; i < newPerson.points.length; i++) {
            newPerson.points[i] = parseFloat(newPerson.points[i]);
            newPersons.push(newPerson.points[i]);
        }

        // Looping through the peopleArray object
        for(var scores in peopleArray) {
            console.log("Scores are: " + peopleArray[scores].scores);

        }









        // console.log("peopleArray[0].scores[i] " + peopleArray[0].scores[0]);

        for (let i = 0; i < newPersons.length; i++) {
            diffArray[i] = Math.abs(newPersons[i] - peopleArray[0].scores[i])
        }

        // printing the difference between the First array and the Second Array
        for (let j = 0; j < diffArray.length; j++){
            // console.log("diffArray[j]" + diffArray[j]);
            sum += diffArray[j];
        }

        peopleArray.push(newPerson);

        res.json(newPerson);


    });
};