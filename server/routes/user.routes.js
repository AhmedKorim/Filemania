const router = require("express").Router();
const mongoose = require("mongoose");
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const bcrypt = require('bcryptjs');
const User = mongoose.model("user");

router.post("/register", (req, res) => {
    const {name, email, password, re_password, gender} = req.body;
    User.findOne({email}, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                msgs: ["Something went wrong!"]
            });
        }
        if (user) {
            return res.json({
                success: false,
                msgs: ["user already exists"]
            });
        }
        const errors = [];
        if (re_password != password && password.length < 6) {
            errors.push("invalid password");
        }
        if (!emailRegex.test(email)) {
            errors.push("invalid email");
        }
        if (gender != "male" && gender != "female") {
            errors.push("invalid gender");
        }
        const hashedPassword = bcrypt.hashSync(password, 8);
        if (errors.length > 0) {
            return res.json({
                success: false,
                msgs: errors
            })
        } else {
            User({
                name,
                email,
                password: hashedPassword,
                gender
            })
                .save()
                .then(user => {
                    console.log(user);
                    return res.json({
                        success: true,
                        msgs: ["Successfully register"],
                        user: {
                            name: user.name,
                            email: user.email,
                            _id: user._id,
                            gender: user.gender
                        }
                    });
                })
                .catch(_ => {
                    return res.json({
                        success: false,
                        msgs: ["Something went wrong!"]
                    });
                })
        }
    })
});


module.exports = router;