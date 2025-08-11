let input = "";
const correctPass = "12345"; // Đặt mật khẩu tùy ý

function addDigit(num) {
  input += num;
  document.getElementById("password").value = "*".repeat(input.length);
}

function clearPass() {
  input = "";
  document.getElementById("password").value = "";
}

function checkPass() {
  if (input === correctPass) {
    window.location.href = "birthday.html";
  } else {
    alert("Sai pass rồi nha 😛");
    clearPass();
  }
}
