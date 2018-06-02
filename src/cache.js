export const initializeCache = () => {
  localStorage.setItem("moonDayCalculations", JSON.stringify({}))
}

export const cacheCalculationResult = (cacheKey, cacheData) => {
  const moonDayCalculations = JSON.parse(localStorage.getItem("moonDayCalculations"))
  localStorage.setItem("moonDayCalculations", JSON.stringify({[cacheKey]: cacheData}))
}

export const getCachedCalculation = cacheKey => {
  const moonDayCalculations = JSON.parse(localStorage.getItem("moonDayCalculations"))
  return moonDayCalculations[cacheKey]
}