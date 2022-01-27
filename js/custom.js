import { editOptions } from './optionsModal.js'
import { isDone } from './doneModal.js'
let addAssemblayForm = document.getElementById('addAssemblay');
addAssemblayForm.addEventListener("submit", addInstallation)


function resetForm() {
    document.getElementById('addAssemblay').reset();
}
document.getElementById('tv-checkbox').onchange = function () {
    document.getElementById('tv-value').disabled = !this.checked;
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
    resetForm();
}
document.getElementById('regions').addEventListener('change', renderAssemblay)


async function getAssemblies(region_id) {
    let url = `api/getAssemlbay.php?+region_id=${region_id}`
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }

}

async function renderAssemblay() {
    console.log(this.value)
    let region_id = this.value
    console.log(region_id)
    let assemblies = await getAssemblies(region_id)

    let html = '';
    console.log(assemblies)
    if (assemblies != null) {
        assemblies.forEach(assemblay => {
            console.log(assemblay.name)
            function addClass() {
                if (assemblay.priority == 1) {
                    return 'table-primary'
                } else if (assemblay.priority == 2) {
                    return 'table-warning'
                } else {
                    return 'table-active'
                }
            }
            let td =
                `
            <tr class=${addClass()} >
            <td class= "text-middle"><small>${assemblay.date}</small></td >
            <td class="text-middle"><small>${assemblay.name}</small></td>
            <td class="text-middle"><small>${assemblay.address}</small></td>
            <td class="text-middle"><small>${assemblay.tel_num}</small></td>
            <td class="text-middle"><small>${assemblay.bok_note}</small></td>
            <td class="text-middle"><div id="instalation_options">
            ${assemblay.int ? '<img src="/assets/images/int.png" class="px-1"></img>' : ''}
            ${assemblay.tv ? '<img src="/assets/images/tv.png" class="px-1" ></img>' : ''}
            ${assemblay.tv_value > 0 ? assemblay.tv_value : ''}</div></td >
            <td class="text-middle" ><img src="/assets/images/options.png"  class="px-1 options"  id="${assemblay.id}"><img src="/assets/images/done.png" class="px-1 done" id="${assemblay.id}"></td>
            </tr >
            `
            html += td
        });
    } else {
        let td =
            `<tr class= "row" >
            <td class="col-12">BRAK MONTAŻY</td>
        </tr >
            `
        html += td
    }

    let table = document.querySelector('tbody')
    table.innerHTML = html;


    let assemblay_done = document.querySelectorAll('img.done')
    let assemblay_options = document.querySelectorAll('img.options')

    doneAssemblay(assemblay_done)
    editOptions(assemblay_options)

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

            < div >

            <option value='${region.id}' >${region.region_name}</option>    
        </div > `;
        let modalOptions =
            `< div >
            <option value='${region.id}'>${region.region_name}</option>
    </div > `
        html += options
        htmlModal += modalOptions;

    });
    let formSelect = document.querySelector(".formRegion")
    let select = document.querySelector('.output');
    select.innerHTML = html;
    formSelect.innerHTML = htmlModal
}

renderRegions()


async function doneAssemblay(options) {
    options.forEach(option => option.addEventListener('click', isDone))
}





