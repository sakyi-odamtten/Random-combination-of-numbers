//a program that prints all posible different combination of two digits

function combination(num){
    let straight = " ";
    for (let i = 0; i <=num; i++){
        if (i < 10){
            i = " "+ 0 + i;
        }

        if (straight.includes(i)){
            continue;
        }
        else{

            let reverseFormattedValue = "" + (i % 10) + Math.floor(i / 10);
            if (straight.includes(reverseFormattedValue)) {
                continue;
            }

            straight = straight + i + " ";
        }

        if (i != num){
            straight = straight + ',' + " ";
        }
    }
    console.log(straight);
}

combination(100)