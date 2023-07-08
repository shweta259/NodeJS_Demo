
const routes = (app) => {
    app.route('/contact')
    .get((req,res) => 
    res.send("GET request successful")
    )

    .post((req,res) => 
    res.send("POST successful!")
    )

    //defining new route here for PUT and DELETE
    app.route('/contact/:contactId')
    .put((req,res) => 
    res.send("PUT successful!")
    )

    .delete((req,res) => 
    res.send("DELETE successful!")
    )
}

export default routes;