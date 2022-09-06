document.getElementById('btn-add-name').addEventListener('click', function () {
    //setitem on local storage
    const namefield = document.getElementById('name-field');
    const nameValue = namefield.value;
    localStorage.setItem('name',nameValue)
})

document.getElementById('btn-remove-name').addEventListener('click', function () {
    //removeItem on local storage
    const namefield = document.getElementById('name-field');
    const nameValue = namefield.value;
    localStorage.removeItem('name',nameValue)
})

document.getElementById('btn-add-age').addEventListener('click', function () {
        //setAge on local storage
    const agefield = document.getElementById('age-field')
    const ageValue = agefield.value;
    localStorage.setItem('age',ageValue)
})


document.getElementById('btn-remove-age').addEventListener('click', function () {
        //removeAge on local storage
    const agefield = document.getElementById('age-field');
    const ageValue = agefield.value;
    localStorage.removeItem('age',ageValue)
})

document.getElementById('clear-all').addEventListener('click', function () {
    localStorage.clear();
})