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


block = { txIndexes: 
    [ 288940296,
      288940230,
      288940188,
      288940170,
      288940149,
      288940140,
      288940158,
      288940164,
      288940146,
      288940185,
      288940209,
      288940155,
      288940215,
      288940179,
      288940221,
      288940200,
      288940182,
      288940173,
      288940206,
      288940203,
      288940212,
      288940260,
      288940251,
      288940242,
      288940245,
      288940233,
      288940224,
      288940194,
      288940236,
      288940218,
      288940197,
      288940239,
      288940257,
      288940263,
      288940266,
      288940269,
      288940227,
      288940191,
      288940143,
      288940248,
      288940161,
      288940152,
      288940254,
      288940176 ],
   nTx: 44,
   totalBTCSent: 50795853253,
   estimatedBTCSent: 574020817,
   reward: 0,
   size: 24442,
   blockIndex: 5482914,
   prevBlockIndex: 5482911,
   height: 1456791,
   hash: '000000000000009871dc54852fc9d6c23384a1226d3f61948ff9592508c56ede',
   mrklRoot: '1098d824823c2d7433afc90ac2d369c12152a290f9d7a8a2328d65a9d2c7c095',
   version: 893927424,
   time: 1549914931,
   bits: 436283074,
   nonce: 875307777,
   foundBy: 
    { description: 'AntPool',
      ip: '0.0.0.0',
      link: 'https://www.antpool.com/',
      time: 1549914931 } }
 

// mySocket.onBlock(function (block) {


 start()
 console.log("-----------")
 console.log("New Block")
 console.log("-----------")
 console.log("Index " + block.blockIndex)
 console.log("-----------")
 block.txIndexes.forEach(function (tx) {
    blockexplorer.getTx(tx).then(function (tx) {
        tx.inputs.forEach(function (input) {
                    if(input.prev_out != undefined){
                        // if(my_addrs.includes(input.prev_out.addr)){
                        console.log("Sent BTC")
                        console.log("--------")            
                        console.log("\tValue : "+satoshiToBTC(input.prev_out.value )+ " BTC")
                        console.log("\tAddress : "+input.prev_out.addr)
                    }
                    // }
                })
                    tx.out.forEach(function (out) {
                    if(out != undefined){
                        // if(my_addrs.includes(out.addr)){
                        console.log("Take BTC")            
                        console.log("--------")            
                        console.log("\tValue : "+satoshiToBTC(out.value)+ " BTC")
                        console.log("\tAddress : "+out.addr)
                        // }
                    }
                    }
                )

    })
 })

 




// start()
// blockexplorer.getBlock("0000000000000000002e10993a752c3422c4d13883fc000e27e5bbb35333be0c")
// .then(function (block) {
// block.tx.forEach(function (tx) {
//     tx.inputs.forEach(function (input) {
//         if(input.prev_out != undefined){
//             // input_addrs.push(input.prev_out.addr)
//             if(my_addrs.includes(input.prev_out.addr)){
//             console.log("Sent BTC")
//             console.log("--------")            
//             console.log("\tValue : "+satoshiToBTC(input.prev_out.value )+ " BTC")
//             console.log("\tAddress : "+input.prev_out.addr)
//         }
//         }
//     })
//         tx.out.forEach(function (out) {
//         if(out != undefined){
//             if(my_addrs.includes(out.addr)){
//             console.log("Take BTC")            
//             console.log("--------")            
//             console.log("\tValue : "+satoshiToBTC(out.value)+ " BTC")
//             console.log("\tAddress : "+out.addr)
//             // output_addrs.push(out.addr)
//             }
//         }
//         }
//         // console.log(satoshiToBTC(out.prev_out.value))
//     )
// })
// }).then(function () {
//     end()
// })