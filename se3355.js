function closeAd() {
    document.getElementById("adBanner").style.display = "none";
}

function showAdInfo(){
    alert("This ad provided by Example Inc. For more details, visit example.com")
}

function validateForm(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid e-mail");
        return;
    }

    const phone = document.getElementById("phone").value;
    const phonePattern = /^\+90\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid Turkish phone number (Ex: +901234567890)");
        return;
    }

    window.location.href = "submitted.html";
}


window.addEventListener("load", function() {
        fetch("https://run.mocky.io/v3/479055ec-2c86-4e43-9030-635b898679d2")
        .then(response => response.json())
        .then(data => {
            const citySelect = document.getElementById("city");
            data.forEach(city => {
                const option = document.createElement("option");
                option.value = city.id;
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
        });
    
        
    
    

    fetch("https://run.mocky.io/v3/96014798-400a-4f97-8d8c-2dfdfc791c33")
        .then(response => response.json())
        .then(data => {
            const courseTypeSelect = document.getElementById("courseType");
            data.forEach(course => {
                const option = document.createElement("option");
                option.value = course.id;
                option.textContent = course.name;
                courseTypeSelect.appendChild(option);
            });
        });

    const form = document.querySelector("form");
    const adBanner = document.querySelector(".ad-banner");

    adBanner.style.height = form.offsetHeight + "px";
});

document.getElementById("termsLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("termsModal").style.display = "flex"; 
});

function closeTerms() {
    document.getElementById("termsModal").style.display = "none";
}

