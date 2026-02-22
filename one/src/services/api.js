// src/services/api.js
const dummyData = [
  { id: "1", employee_name: "Tiger Nixon", employee_salary: "320800", employee_age: "61" },
  { id: "2", employee_name: "Garrett Winters", employee_salary: "170750", employee_age: "63" },
  { id: "3", employee_name: "Ashton Cox", employee_salary: "86000", employee_age: "66" },
  { id: "4", employee_name: "Cedric Kelly", employee_salary: "433060", employee_age: "22" },
  { id: "5", employee_name: "Airi Satou", employee_salary: "162700", employee_age: "33" },
  { id: "6", employee_name: "Brielle Williamson", employee_salary: "372000", employee_age: "61" },
  { id: "7", employee_name: "Herrod Chandler", employee_salary: "137500", employee_age: "59" },
  { id: "8", employee_name: "Rhona Davidson", employee_salary: "327900", employee_age: "55" },
  { id: "9", employee_name: "Colleen Hurst", employee_salary: "205500", employee_age: "39" },
  { id: "10", employee_name: "Sonya Frost", employee_salary: "103600", employee_age: "23" }
];

export const fetchData = async () => {
  try {
    const response = await fetch('https://backend.jotish.in/backend_dev/gettabledata.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: "test", password: "123456" })
    });
    const result = await response.json();
    return result.data && result.data.length > 0 ? result.data : dummyData;
  } catch (error) {
    console.error("API Error, using dummy data:", error);
    return dummyData; // Fallback so your app isn't blank
  }
};