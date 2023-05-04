
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-ecommerce-app-ae42e-default-rtdb.firebaseio.com/",
});

module.exports = admin
