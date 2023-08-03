export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "993d25d079msh8c250965966dc9bp15fa5ajsn7b9114cfa61d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // preço base em dollares
  const mileageFactor = 0.1; // Adicional por distancia dirigida
  const ageFactor = 0.05; // Adicional por ano do modelo

  // tarifa adicional levando em conta distancia e ano do modelo
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calcular o total
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
