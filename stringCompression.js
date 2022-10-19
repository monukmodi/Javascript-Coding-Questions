//  Convert string into compressed string

//  input = aaabccdee
//  output = a3b1c2d1e2

function stringCompression(str){
    let count = 0, result = ""
    for(let i =0 ; i< str.length; i++){
        count++
        if(str[i] != str[i+1]){
            result = result + str[i] + count
            count = 0
        }
    }
    console.log(result)
}

stringCompression("aaabcceddeess")