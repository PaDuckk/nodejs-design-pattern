/**
 *  6-2-2 Readable 스트림
 *
 *  Readable 스트림엔는 non-flowing 모드와 flowing모드 두가지가 있다..
 *  차이점은??????????
 */

// process.stdin
//   .on("readable", () => {
//     let chunk;
//     console.log("New data availalbe");

//     while ((chunk = process.stdin.read()) !== null) {
//       console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
//     }
//   })
//   .on("end", () => console.log("End of stream"));

/**
 * 바이너리 모드에서 반환하는 청크는 기본적으로 버퍼이다..
 */

/**
 * Readable 스트림은 비동기 반복자라 아래와 같이도 가능
 * 비동기 반복자 첨본다....
 */

async function main() {
  for await (const chunk of process.stdin) {
    console.log("New data available");
    console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
  }

  console.log("End of stream");
}

main();
