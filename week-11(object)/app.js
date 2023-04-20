const population = {
    male: 7,
    female: 93,
    
  };
  
  // Iterate through the object
  for (const key in population) {
    if (population.hasOwnProperty(key)) {
      console.log(`${key}: ${population[key]}`);
    }
  }