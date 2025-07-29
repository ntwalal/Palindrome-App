function checkPalindrome() {
    const input = document.getElementById("inputString").value 
    const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    const result = document.getElementById("result");
    if(cleaned === "") {
        result.innerHTML = `<span class= "text-warning"> Please enter a valid word or phrase.</span>`;
    }else if (cleaned === reversed){
        result.innerHTML = `<span class="text-success">"${input}"is a palindrome ✅</span>` ;
    }else {
        result.innerHTML = `<span class="text-danger">"${input}"is not a palindrome ❌</span>`;
        
    }
}