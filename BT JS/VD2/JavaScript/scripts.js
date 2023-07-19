function calculateAge(){
    var fullName = document.getElementById("fullName").value;
    var birthYear = document.getElementById("birthYear").value;

    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    var result = "Tôi tên là " + fullName + " năm nay tôi " + age + " tuổi";
    document.getElementById("result").innerHTML = result;
}