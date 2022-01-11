
let exampleForm = document.getElementById('addinstalation');
exampleForm.addEventListener("submit", addInstallation)

const resetForm = () => {
    document.getElementById('dodajMontaż').reset();
}


async function addInstallation(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form)
    for (let key of formData.keys()) {
        console.log(key, formData.get(key))
    }


    fetch('api/addAssemblay.php', {
        method: 'POST',
        dataType: 'multipart/form-data',
        body: formData
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(console.warn)



    const url = 'api/downloadRegions.php';
    async function fetchRegions() {
        let response = await fetch(url)
        let data = await response.json();
        console.log(data);
    }
}
document.getElementById('regions').addEventListener('change', renderAssemblay)


async function getAssemblies(id) {
    let url = `api/getAssemlbay.php? + region_id= ${id}`
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }

}

async function renderAssemblay() {
    let id = this.value
    console.log(getAssemblies(id))
    let assemblies = await getAssemblies(id)
    let htmlBody = '';
    let html = '';
    console.log(assemblies)
    if (assemblies != null) {
        assemblies.forEach(assemblay => {
            console.log(assemblay.name)
            let td =
                `
            <tr class="table-success">
            <td class="text-middle" style="width:120px ">${assemblay.date}</td>
            <td class="text-middle">${assemblay.name}</td>
            <td class="text-middle">${assemblay.address}</td>
            <td class="text-middle">${assemblay.tel_num}</td>
            <td class="text-middle">${assemblay.bok_note}</td>
            <td class="text-middle">${assemblay.ins_note}</td>
            </tr>
            `
            html += td
        });
    } else {
        let td =
            `
        <tr class="row">
        <td class="col-12">BRAK MONTAŻY</td>
        </tr>
        `
        html += td
    }

    let table = document.querySelector('tbody')
    table.innerHTML = html;

}





async function getRegions() {
    let url = 'api/downloadRegions.php';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderRegions() {
    let regions = await getRegions();
    let html = '<option >---WYBIERZ---</option>';
    let htmlModal = '<option >---WYBIERZ---</option>';
    regions.forEach(region => {
        let options =
            `
            
            <div>
            
        <option value='${region.id}' >${region.region_name}</option>    
        </div>`;
        let modalOptions =
            `<div>
    <option value='${region.id}'>${region.region_name}</option>
    </div>`
        html += options
        htmlModal += modalOptions;

    });
    let formSelect = document.querySelector(".formRegion")
    let select = document.querySelector('.output');
    select.innerHTML = html;
    formSelect.innerHTML = htmlModal
}

renderRegions()
