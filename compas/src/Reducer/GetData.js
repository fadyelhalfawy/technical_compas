// const fetchData = () => {
//     if (selectedDepartment && selectedSubOption && selectedFinalOption) {
//       fetch(`/api/data?department=${selectedDepartment}&subOption=${selectedSubOption}&finalOption=${selectedFinalOption}`)
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error('Error fetching data:', error));
//     } else {
//       alert('Please make all selections');
//     }
//   };