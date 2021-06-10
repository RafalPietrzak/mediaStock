function mapChunkPromise(chunk: number, fn: Function): Function {
  return function innerMapChunkPromise(paramsArray: any[][]) {
    return new Promise(function (resolve, reject) {
      (async function sliceToChunk(result = [], paramsArray) {
        if (paramsArray.length > 0) {
          result.push(await Promise.allSettled(
            paramsArray.slice(0, chunk).map(
              function innerSliceMap(param) {
                return fn(...param);
              }
            )
          )
          );
          sliceToChunk(result, paramsArray.slice(chunk));
        } else {
          resolve(result);
        };
      })([], paramsArray);
    });
  };
};
export default mapChunkPromise; 