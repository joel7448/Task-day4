var obj1 = { name: "Person 1", age:5 };var obj2 = { age:5, name: "Person 1"  };
let valueflag=0;let keyflag=0;let len1=0;let len2=0;
function objectcompare(){
    for(i in obj1){
        len1++;
    }
    for(j in obj2){
        len2++;
            }
    if(len1==len2){
     for(i in obj1 )

    for(j in obj2){
        if(obj1[i]==obj2[j]){
            valueflag++;
            break;
        }
        }
    for(i in obj1){
        for(j in obj2){
            
        if(i==j){
            keyflag++;
            break;
        }
            }
    }    
if(keyflag===valueflag){
     return true;   
}
else{
    return false;
}}
    else{
        return false;
    }
}
console.log(objectcompare());