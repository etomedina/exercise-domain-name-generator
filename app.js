var pronoun = ['the','our'];
var adj = ['great','big'];
var noun = ['jogger','racoon'];
var ext = ['.com','.net','.us','.io']

for (var position of pronoun){
    for(var position2 of adj){
        for (var position3 of noun){
            for (var position4 of ext){
                var string1 = position+position2+position3+position4;
                console.log(string1);
            }
        }
    }
}

