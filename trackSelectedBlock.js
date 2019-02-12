var Socket = require('blockchain.info/Socket')

var blockexplorer = require('blockchain.info/blockexplorer')


var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(timeDiff + " seconds");
}



var mySocket = new Socket()

var mySocket = new Socket({ network: 3 })
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


// mySocket.onBlock(function (block) {

//  console.log("-----------")
//  console.log("New Block")
//  console.log("-----------")
//  console.log(block)

// })
var blockexplorer = require('blockchain.info/blockexplorer')

function satoshiToBTC(s){
    return (s / 100000000).toFixed(10)
}
//-------------
//Variables
input_addrs = []
output_addrs = []
my_addrs = [
    "1KGsu5cCoXPqZaxZXPiyTL2oAarC9AHScK",
    "bc1q7tyenadl86dhfmhugwakmtce5ym8m2fxqkes9r",
    "3NN8SsM7tmE4NzM5fRqGbJQPE3RMjmiLjb",
    "1AMgx61EB7wPrwA96ZWtLTcvy1sJmHNkjm",
    "374xhprwzw3Bbvyzjxb8B3ci67Z4e2NbZ8",
    "1MzZZ7YHegi1f4P64wwzLtTDgmMYwdtCq3",
    "1MzZZ7YHegi1f4P64wwzLtTDgmMYwdtCq3",
    "3BMEXPWyyDhA8JHbC2bJrXc84Aaf6oiUmQ",
    "32vzy8bMmRez6gcq6Q1YLJzancuy7BrxFm",
    "1CEC6i6LNa24WFtMWVgdP4L1CQNBy3EZei",
    "16GP4Yr2WYMLHEURqzEU8WPD8F5oDrBuKT",
    "3BMEXJ8FjYdCBaiMdnyjaAVd5c9E2NPVCz",
    "327pgA3vijFXtyTxaxXSQ8LeLMeAf51cbo",
    "12PTrHhq4o1xtwPsD2imjWXhndWYyWQVkE",
    "1DWNvdFEHaVCCeEG3avtdL1yW43GLPyrfS",
    "16GP4Yr2WYMLHEURqzEU8WPD8F5oDrBuKT",
    "3Ee4TpPK9XtdFKrZd1cxgwUTPzzuqaq9C3",
    "1JKbQLrA3VvmArgFpgR9EpiGboNkn3WPit",
    "3PunabfC8ex8r6iTPFqNuUMxJyyvjLVQkv",
    "1MsxPeehr8C1FtiiqtPnZhhXc7wiiUKerC",
    "19g47wWvtBdN2ZSsSo5QPCxb3zispxNAM4",
    "162zXmXFdeiWTo6wm6m22YAmGMKUA2WCBs",
    "3HTLVPLUY21qUcq2w7cXjz6oXpHboSJ9xL",
    "12gUztsWfD7shx5pfMRJxtboi3zep7Dhfs"]

//-------------
start()
blockexplorer.getBlock("0000000000000000002e10993a752c3422c4d13883fc000e27e5bbb35333be0c")
.then(function (block) {
block.tx.forEach(function (tx) {
    tx.inputs.forEach(function (input) {
        if(input.prev_out != undefined){
            // input_addrs.push(input.prev_out.addr)
            if(my_addrs.includes(input.prev_out.addr)){
            console.log("Sent BTC")
            console.log("--------")            
            console.log("\tValue : "+satoshiToBTC(input.prev_out.value )+ " BTC")
            console.log("\tAddress : "+input.prev_out.addr)
        }
        }
    })
        tx.out.forEach(function (out) {
        if(out != undefined){
            if(my_addrs.includes(out.addr)){
            console.log("Take BTC")            
            console.log("--------")            
            console.log("\tValue : "+satoshiToBTC(out.value)+ " BTC")
            console.log("\tAddress : "+out.addr)
            // output_addrs.push(out.addr)
            }
        }
        }
        // console.log(satoshiToBTC(out.prev_out.value))
    )
})
}).then(function () {
    end()


})
