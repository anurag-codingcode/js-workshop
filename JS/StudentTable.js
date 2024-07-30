$(document).ready(() => {
    $('#addUser').on('click', () => {
        addUser()
    })

})

function addData(e, t) {
    if (e.key == 'Enter') {
        // console.log(t.value)
        td = t.closest('td')
        // console.log(td)
        td.innerHTML = t.value
    }

}

function editData(e) {
    
    const x=$('<input>',{
        "onkeypress":"addData(event,this)"
    })
    x.val(e.innerHTML)
    e.innerHTML=''
    e.append(x[0])
   

}

function addUser() {
    const tr = $('<tr>');
    const input = $('<input id="table-input" onkeypress="addData(event,this)"></input>');
    const td1 = $('<td ondblclick=editData(this) class="one">');
    const td2 = $('<td ondblclick=editData(this) class="two">')
    const td3 = $('<td ondblclick=editData(this) class="three">')
    const td4 = $('<td ondblclick=editData(this) class="four">')
    const td5 = $('<td ondblclick=editData(this) class="five">')
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

    tr.append(td1, td2, td3, td4, td5, td6)
    $('table').append(tr)
}
function delFunction(button) {
    tr = button.closest('tr')
    tr.remove()

}
