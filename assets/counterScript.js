
D_DAY = new Date(Date.UTC(2021, 09, 8, -2, 0, 0))
TIME_DATA_ATTRIBUTE = "time"

let COUNTER_NAMES = {
  DAYS: "days",
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds"
};

const conversions = {
  [COUNTER_NAMES.DAYS]: (ms) => ~~(ms / (60 * 60 * 24 * 1000)),
  [COUNTER_NAMES.HOURS]: (ms) => ~~(ms / (60 * 60 * 1000) % 24),
  [COUNTER_NAMES.MINUTES]: (ms) => ~~(ms / (60 * 1000) % 60),
  [COUNTER_NAMES.SECONDS]: (ms) => ~~(ms / (1000) % 60),

}
const msToUnit = (timeType, ms) => conversions[timeType](ms)
const timeRemainingNow = () => {
  const timeNow = new Date()
  const diff = new Date(D_DAY - timeNow)
  const remaining = Object.values(COUNTER_NAMES).reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: msToUnit(curr, diff).toString().padStart(4, '0')
    }
  }, {})
  return remaining
}

const get_counter = (timeType) => document.getElementById("counter-" + timeType);

const counters = Object.values(COUNTER_NAMES).reduce((prev, curr) => ({ ...prev, [curr]: get_counter(curr) }), {});

const updateDigit = (digit, newVal) => {
  const prevVal = digit.dataset[TIME_DATA_ATTRIBUTE]
  if (prevVal != newVal) {
    digit.dataset[TIME_DATA_ATTRIBUTE] = newVal
  }
}

const setTimeForCounter = (counterName, remainingTime) => {
  const counter = counters[counterName]
  remainingTime.split("").forEach((newVal, index, allDigits) => {
    const digitIndex = allDigits.length - index - 1
    const digitAmount = counter.querySelectorAll(".digit")
    if (digitIndex <= digitAmount.length - 1) {
      const counterDigit = counter.querySelector(`#${counterName}-${digitIndex}`)
      updateDigit(counterDigit, newVal)
    }
  })
}

const setTime = (remainingTimes) => Object.keys(counters).forEach(key => { setTimeForCounter(key, remainingTimes[key]) })

setTime(timeRemainingNow())
setInterval(() => setTime(timeRemainingNow()), 1000)