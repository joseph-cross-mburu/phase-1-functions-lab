//  function distanceFromHqInBlocks(blocks){
//      return distanceFromHqInBlocks(blocks) 
//  }
// // function distanceFromHqInFeet(){
// //     return distanceFromHqInBlocks()*264
    
// // }
// // function distanceTravelledInFeet(start,destination){
// //     return (start-destination)*264
    
// // }
// // distanceTravelledInFeet(50,42)
// // function calculateFarePrice(){
// //   feet =  distanceTravelledInFeet(start,destination)
// //   if (feet >=400 && feet <=2000) {
// //     return 0.02*feet
// //   }
// //   else if (feet=400){
// //     return 0
// //   }
// //   else if (feet>=2000 && feet <=2500){
// //     return 25 
// //   }
// //   else if (feet>2500){
// //     return "no ride"
// //   }

//}
function distanceFromHqInBlocks(Hq) {
    if(Hq>42){
        return Hq-42
    }
    else if (42>Hq){
        return 42-Hq
    }
}
function distanceFromHqInFeet(feet){
   return distanceFromHqInBlocks(feet)*264
}
function distanceTravelledInFeet(start,destination){
    if (start < destination){
    return (destination-start)*264}
    else if(destination<start){
        return (start-destination)*264
    }  
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination)
    if (feet<400){
        return 0
    }
    else if(feet>=400 && feet<=2000){
        return 0.02*(feet-400)
    }
    else if(feet>2000 && feet <=2500){
        return 25  
    }
    else{
        return "cannot travel that far"
    }
}