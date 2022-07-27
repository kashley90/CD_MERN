const mongoose = require("mongoose");
const dbName = "Stuff";
mongoose.connect(`mongodb://localhost/crmdb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to the ${dbName}!`))
.catch(err=>console.log("Something went wrong when connecting to the ${dbName}!", err));
