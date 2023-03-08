const inputs = document.querySelectorAll('input')
const button = document.querySelector('.btn-secondary')

const patterns = {
    fullname: /^[a-z0-9_-]{3,16}$/
};

function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid'
    }
    else alert("Lỗi")
}

button.onclick =  function(validate){
    
}