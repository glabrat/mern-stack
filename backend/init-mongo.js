db.createUser(
    {
        user: "userzoo",
        pwd: "passwordzoo",
        roles: [
            {
                role: "readWrite",
                db: "zoo"
            }
        ]
    }
);