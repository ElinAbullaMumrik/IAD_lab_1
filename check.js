function checkForm() {
    var error = true;
    var x = Number(document.querySelector('#X').value.replace(",", "."));
    if (isNaN(x) || x > 3 || x < -3) {
        document.querySelector('#X').textContent = "Х должен быть числом от -3 до 3";
        error = false;
    } else {
        document.querySelector('#X').textContent = "";
    }
    return error;
}


function tosubmit(e) {
    e.preventDefault();
    if (checkForm()) {
        const formData = new FormData(document.querySelector('#values'));
        fetch('check.php', {
            method: 'POST',
            body: formData,
        })
            .then(ressultat => ressultat.text())
            .then(table => document.querySelector('#ressultat').innerHTML=table);
    }
    return false;
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#Button').addEventListener('click', tosubmit());
}
