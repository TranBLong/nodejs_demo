function thongtin(name, age) {
  console.log("Tên:", name);
  console.log("Tuổi:", age);
}
thongtin("Chí", 22);

function tinhtuoi(namsinh) {
  const currentYear = new Date().getFullYear();
  return currentYear - namsinh;
}


const year = 2003;
const age = tinhtuoi(year);
console.log(`Năm sinh: ${year} → Tuổi: ${age}`);
