function findApproxBigIntLimit() {
  let bits = 1;
  try {
    while (true) {
      let test = (1n << BigInt(bits)); // 2^bits
      bits += 1000000; // step up by ~1 million bits at a time
    }
  } catch (e) {
    console.log(`Failed around ${bits} bits`);
    console.log(e.message);
  }
}
findApproxBigIntLimit();