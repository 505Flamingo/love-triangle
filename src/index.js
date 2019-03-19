/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift(' '); 
  let TriangleCount = 0; 
  preferences.forEach((value, index) => { 
  let spA = index; 
  let spAlove = preferences[spA]; 
  let spB = spAlove; 
  let spBlove = preferences[spB]; 
  let spC = spBlove; 
  let spClove = preferences[spC]; 
  //console.log(`Спичон A - ${spA} любит Спичона B - ${spAlove}`); 
  //console.log(`Спичон B - ${spB} любит Спичона C - ${spBlove}`); 
  //console.log(`Спичон C - ${spC} любит Спичона A - ${spClove}`); 
  if (spA !== spAlove && spB !== spBlove && spC !== spClove && spAlove == spB && spBlove == spC && spClove == spA){ 
  TriangleCount++; 
  } 
  //console.log(`Получилось ${TriangleCount} треугольников`) 
  //console.log(`This is speeconee ${index}, it loves ${value}`); 
  //console.log(sp2); 
  })
  return TriangleCount/3; 
}
