$(document).ready(() => {
    $('#addUser').on('click', () => {
        addUser()
    })
    
   
})
function myFunction(event){
    console.log(this)
}


function addUser() {
    const tr = $('<tr>');
    const input=$('<input class="table-input" onkeypress="myFunction()"></input>');
    const td1 = $('<td>', {
        class: 'one'
    });
    const td2 = $('<td>', {
        class: 'two'
    })
    const td3 = $('<td>', {
        class: 'three'
    })
    const td4 = $('<td>', {
        class: 'four'
    })
    const td5 = $('<td>', {
        class: 'five'
    })
    td1.append(input.clone())
    td2.append(input.clone())
    td3.append(input.clone())
    td4.append(input.clone())
    td5.append(input.clone())
    const button = $('<button>', {
        onclick: 'delFunction(this)',
        text: 'Delete'
    })
    const td6 = $('<td>', {
        class: 'six'
    })
    
    td6.append(button)
    
    tr.append(td1,td2,td3,td4,td5,td6)
    $('table').append(tr)
}
function delFunction(button) {
    tr = button.closest('tr')
    tr.remove()

}
