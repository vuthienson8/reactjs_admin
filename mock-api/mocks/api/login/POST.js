var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    let { username, password } = req.body;

    // correct: query from db
    if (username !== "admin" || password !== "123456") {
        res.status(401).json({
            message: "Anauthorized!",
        });
        return;
    }

    var token = jwt.sign({
        username,
        roles: ["read", "write"]
    }, "thiensonvu", { expiresIn: "8h" })

    var data = jwt.decode(token);
    console.log("data:  ", data)
    console.log("username", username, "password", password);
    res.status(200).json({ status: true, username, token });
}