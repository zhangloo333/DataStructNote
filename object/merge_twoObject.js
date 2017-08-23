/**
 * Created by lee on 8/23/17.
 */
/**
 merger two object in one
 */


// Collection Name: contactInfor
var contactInfor = {
    id : "123adf2314asdf",
    aptNo: 131,
    streeName: "Nrupen Desai",
    mobileNo: 12345667790,
    email: "foo@bar.com",
}

//Collection name: customer
var customer = {
    id: "123adf2314asdddd",
    fName: "jerry",
    lName: "cavet",
    birthdate: "02/11/1987",
    contactInfold: contactInfor
}


function aggregate(data){
    var output = {};
    var outputFinal = []

    function findObject(ob) {
        for(var i in ob){
            if(typeof ob[i] == "object"){
                findObject(ob[i]);
            }else{
                if(!output.hasOwnProperty(i))
                    output[i] = ob[i];
            }
        }
    }

    findObject(data);
    outputFinal.push(output);

    return outputFinal;
}

console.log(merge(customer));
