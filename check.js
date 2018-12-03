function checkForm() {
    var error = true;
    var x = Number(document.querySelector('#inputX').value.replace(",", "."));
    if (isNaN(x) || x > 3 || x < -3) {
        document.querySelector('#labelX').textContent = "Х должен быть числом от -3 до 3";
        error = false;
    } else {
        document.querySelector('#labelX').textContent = "";
    }
    return error;
}


function submit(e) {
    e.preventDefault();
    if (checkForm()) {
        const formData = new FormData(document.querySelector('#form'));
        fetch('check.php', {
            method: 'POST',
            body: formData,
        })
            .then(ans => ans.text())
            .then(table => document.querySelector('#ans').innerHTML = table);
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#Button').addEventListener('click', submit);
});
