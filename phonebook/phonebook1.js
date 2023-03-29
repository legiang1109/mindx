const form = document.getElementById('phonebook-form');
const table = document.getElementById('phonebook-table');
const searchTerm = document.getElementById("search-input").value;
let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;



// Khởi tạo mảng chứa danh sách 
let phonebook = [{
  name: "Nguyễn Văn",
  phone: "0987654321"
  },
  {
    name: "Văn Đạt",
    phone: "0987654342"
  },
  {
    name:"Chiến",
    phone:"12341451"
  },
  {
    name: "Nguyễn Văn A",
    phone: "0987654321"
  },
  {
    name: "Nguyễn Văn B",
    phone: "0987654321"
    },
];
// Bắt đầu chương trình
sortContacts(phonebook)
render(phonebook);

// Thêm liên hệ
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
addContact(name, phone)

render();
form.reset()

});

function addContact(name, phone) {
    if (name==''|| phone==''){
      alert('sai thông tin')
    }
    else{
      phonebook.push({ name, phone });
    }
    // sắp xếp lại danh sách  
    sortContacts(phonebook)
  
    // Hiển thị danh sách 
    render();
  }
function render(){
    table.innerHTML = "";
    for(let i = 0; i < phonebook.length; i++){
        table.innerHTML += `<li><div><p>${phonebook[i].name} </p><p>${phonebook[i].phone}</p></div></li>`
    }
    return table
}
function sortContacts(phonebook) {
  return phonebook.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // Chuyển tên của người liên hệ thành chữ in hoa để so sánh
    let nameB = b.name.toUpperCase(); // Chuyển tên của người liên hệ thành chữ in hoa để so sánh
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
}


// Tìm liên hệ
function searchContacts() {
  // Lấy giá trị nhập vào từ ô tìm kiếm
  const searchTerm = document.getElementById("search-input").value;

  // Lấy danh sách các li trong danh bạ
  let contacts = document.getElementById("phonebook-table").getElementsByTagName("li");

  // Lặp qua danh sách li và ẩn những li không khớp với từ khóa tìm kiếm
  for (let i = 0; i < contacts.length; i++) {
    let contactName = contacts[i].textContent;
    if (contactName.toLowerCase().includes(searchTerm.toLowerCase())) {
      contacts[i].style.display = "block";
    } else {
      contacts[i].style.display = "none";
    }
  }
}

// function removeNumb() {
//   // Lấy giá trị nhập vào từ ô tìm kiếm
//   const searchTerm = document.getElementById("search-input").value;

//   // Lấy danh sách các li trong danh bạ
//   let contacts = document.getElementById("phonebook-table").getElementsByTagName("li");
//   let coincidence = []
 
//   for (let i = 1; i < contacts.length; i++) {
//     let contactName = contacts[i].textContent;
//     if (contactName.toLowerCase().includes(searchTerm.toLowerCase())) {
//       phonebook.filter()
//       console.log(phonebook)    
//   }
// }
// }
