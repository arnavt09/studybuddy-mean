exports.getUser = function(req, res) {

    const users = [
        { 
            id: 1, 
            name: "Arnav" 
        },
    ];

    res.json(users);
};