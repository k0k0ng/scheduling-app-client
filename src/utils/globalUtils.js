export function delay(milisecond) {
  return new Promise((res) => setTimeout(res, milisecond));
}

export function test() {
  return "test";
}
