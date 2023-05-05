var container = document.getElementById("container");
// console.log(container);
fetch('student.json')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('my-table-body');
        data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${item.id}</td>
            <td class="cell">
            <img src=${item.img_src}/>
            <span>${item.first_name + " " + item.last_name}</span>
            </td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing == true ? "passing" : "failed"}</td>
            <td>${item.email}</td>
          `;
            tbody.appendChild(tr);
        });
    });


const searchFun = () => {
    let filter = document.getElementById("search-input").value.toUpperCase();
    let myTable = document.getElementById("myTable");
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 1; i < tr.length; i++) {
        var td1 = tr[i].getElementsByTagName('td')[1];
        var td6 = tr[i].getElementsByTagName('td')[6];
        let name = td1.innerText;
        let email = td6.innerText;
        //    console.log(email);
        if (name.toUpperCase().indexOf(filter) > -1 || (email.toUpperCase().includes('@') && email.toUpperCase().indexOf(filter) > -1)) {
            tr[i].style.display = "";
            tr[i].style.backgroundColor = "#759ee0";
        }
        else {
            tr[i].style.display = "none";
        }

    }
}

const sortAtoZ = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));
    rows.sort((a, b) => {
        // console.log(a,b);
        const name1 = a.getElementsByTagName('td')[1].innerText;
        const name2 = b.getElementsByTagName('td')[1].innerText;
        // console.log(name1); 
        // console.log(name2); 
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    })
    // console.log(rows);
    rows.forEach(row => tbody.appendChild(row));
}


const sortZtoA = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));
    rows.sort((a, b) => {
        // console.log(a,b);
        const name1 = a.getElementsByTagName('td')[1].innerText;
        const name2 = b.getElementsByTagName('td')[1].innerText;
        // console.log(name1); 
        // console.log(name2); 
        if (name1 < name2) {
            return 1;
        }
        if (name1 > name2) {
            return -1;
        }
        return 0;
    })
    // console.log(rows);
    rows.forEach(row => tbody.appendChild(row));
}


const sortByMarks = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));
    rows.sort((a, b) => {
        // console.log(a,b);
        const name1 = Number(a.getElementsByTagName('td')[4].innerText);
        const name2 = Number(b.getElementsByTagName('td')[4].innerText);
        // console.log(name1); 
        // console.log(name2); 
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    })
    // console.log(rows);
    rows.forEach(row => tbody.appendChild(row));
}


const sortByClass = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));
    rows.sort((a, b) => {
        // console.log(a,b);
        const name1 = Number(a.getElementsByTagName('td')[3].innerText);
        const name2 = Number(b.getElementsByTagName('td')[3].innerText);
        // console.log(name1); 
        // console.log(name2); 
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    })
    // console.log(rows);
    rows.forEach(row => tbody.appendChild(row));
}


const sortByPassing = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));
    for (const row of rows) {
        var status = row.getElementsByTagName('td')[5].innerText;
        if (status.includes("passing")) {
            tbody.appendChild(row);
        }
        else {
            row.style.display = "none";
        }
    }

}



const sortByGender = () => {
    const table = document.getElementById("myTable");
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = Array.from(tbody.getElementsByTagName("tr"));

    const table1 = document.getElementById("myTable1");
    const tbody1 = table1.getElementsByTagName('tbody')[0];
    // console.log(tbody1);
    table1.style.display = "block";
    for (const row of rows) {
        var gender = row.getElementsByTagName('td')[2].innerText;
        if (gender.includes("Female")) {
            tbody.appendChild(row);
        }
        else if (gender.includes("Male")){

            tbody1.appendChild(row);
        }
        else{
            row.style.display="none";
        }
            
            
        
    }


}


