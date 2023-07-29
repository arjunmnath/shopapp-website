import ShortUniqueId from 'short-unique-id';



const addMins = (time: number, increment: number) => {
  return time + (increment * 1000 * 60)
}

const GenerateId = (length: number) => {
  return new ShortUniqueId({
    length: length,
    shuffle: true,
  })()
}

const timeGt = (time1: string, time2: string) => {
  let t1 = new Date(time1)
  let t2 = new Date(time2);
  return t2 > t1
}
const getCurrentTime = () => {
  return new Date().toUTCString()
}
const OTP = () => {
  const max: number = 9999999
  const min: number = 1000000
  return Math.floor(Math.random() * (max - min)) + min
}
export {
  addMins,
  OTP,
  GenerateId
}
