import {db} from './firebaseConfig';
var bcrypt = require('bcryptjs');
const saltRounds = 10;

export const addUser = async (user) => {
    let severity = "error";
    let existence =  await userExists(user.email);

    if(!existence){
        try{
            await bcrypt.hash(user.password, saltRounds, async (err, hashedPassword) => { 
                await db.collection("users").doc(user.email).set({
                    email: user.email,
                    password: hashedPassword,
                })
                .then( severity = "success" )
                .catch(e => console.log(e)); 

                console.log(severity)
                // var res = await writeToDatabase(hashedPassword, user.email);
                // res ? severity="success" : severity = "error";
                // console.log(severity);
                // return severity;
            });
            return severity;
        }catch(e){
            console.log(e);
            return severity;
        }
    }else{
        return severity;
    }
}

const writeToDatabase =  async (hashedPassword, email) =>{
    db.collection("users").doc(email).set({
        email: email,
        password: hashedPassword,
    }).then( () => { console.log("true");return true;} )
    .catch(e => console.log(e))
}

var userExists = async (email) =>{
    let doc = await db.collection("users").doc(email).get();
    return doc.exists;
}