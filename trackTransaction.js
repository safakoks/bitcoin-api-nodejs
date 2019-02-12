var Socket = require('blockchain.info/Socket')

var blockexplorer = require('blockchain.info/blockexplorer')

var mySocket = new Socket()


var mySocket = new Socket({ network: 3 })
function satoshiToBTC(s){
    return (s / 100000000).toFixed(10)
}
mySocket.onTransaction(function (tx) {
    

    console.log("-----------")
    console.log("Transaction")
    console.log(tx.hash)
    console.log("-----------")
    console.log("Input Address")
    input_value = 0
    tx.inputs.forEach(function (input) {
    
        if(input.prev_out != undefined){
            console.log("\tValue : "+satoshiToBTC(input.prev_out.value )+ " BTC")
            console.log("\tAddress : "+input.prev_out.addr)
            input_value += input.prev_out.value
        }
    
            else
            console.log(input)
    })
    console.log("Output Address")
    output_value = 0
    tx.out.forEach(function (out) {
    
        if(out != undefined){
            console.log("\tValue : "+satoshiToBTC(out.value)+ " BTC")
            console.log("\tAddress : "+out.addr)
            output_value += out.value
        }
        }
        // console.log(satoshiToBTC(out.prev_out.value))
    )
    
    console.log("\n\tTotal Input Value : "+satoshiToBTC(input_value)+" BTC")
    console.log("\tTotal Output Value : "+satoshiToBTC(output_value)+" BTC")
    console.log("\tFee Value : "+satoshiToBTC(input_value-output_value)+" BTC\n")
    

})




