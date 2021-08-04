/**
 * flowing 모드
 */

/**
 *  스트림에서 데이터를 읽는 방법 중 하나는 이벤트 리스너를 연결하는 것
 *  이렇게 하면 Flowing 모드로 전환된다. 여기선 read()를 사용하여 가져오지 않고 도착하자마자 데이터 리스너로 바로 전달한다.
 *  Flowing모드는 non-flowing 모드에 비해 데이터 흐름 제어하는  유연성이 떨어짐
 *  스트림의 기본 동작은 non-flowing모드 이므로 flow 모드로 바꾸려면 리스너를 붙여야 한다.
 */

/**
 * flow모드중 pause를 호출하면 이벤트 전달을 중단하고 flow모드로 전환됨..
 * pause의 의미는 flow모드에선 상관없고 non-flow모드에만 영향을 끼치는건지????
 */

process.stdin
  .on("data", (chunk) => {
    console.log("New data available");
    console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
  })
  .on("end", () => console.log("End of stream"));
