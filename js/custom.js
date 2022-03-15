import { editOptions } from './optionsModal.js'
import { isDone } from './doneModal.js'
window.load_data = load_data

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
    let html = '<option value=0 >---WYBIERZ---</option>';
    let htmlModal = '<option value = 0 >---WYBIERZ---</option>';
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
    options.forEach(option => option.addEventListener('click',
        //  isDone
        console.log('aaa')
    ))
}


function load_data(query = '', page_number = 1) {
    let form_data = new FormData();
    form_data.append('query', query)
    form_data.append('page', page_number)

    const url = 'api/process_data.php'
    fetch(
        url, {
        method: 'POST',
        dataType: 'multipart/form-data',
        body: form_data,
    }).then(response => response.json())
        .then(data => {
            let html = ''

            if (data.data.length > 0) {
                data.data.forEach(data => {
                    function addClass() {
                        if (data.priority == 1) {
                            return 'table-primary'
                        } else if (data.priority == 2) {
                            return 'table-warning'
                        } else {
                            return 'table-active'
                        }
                    }
                    let td =
                        `
                    <tr class=${addClass()} >
                    <td class= "text-middle"><small>${data.date}</small></td >
                    <td class="text-middle"><small>${data.name}</small></td>
                    <td class="text-middle"><small>${data.address}</small></td>
                    <td class="text-middle"><small>${data.tel_num}</small></td>
                    <td class="text-middle"><small>${data.bok_note}</small></td>
                     <td class="text-middle"><div id="instalation_options">
                     ${data.int ? '<img src="/assets/images/int.png" class="px-1"></img>' : ''}
                     ${data.tv ? '<img src="/assets/images/tv.png" class="px-1" ></img>' : ''}
                     ${data.tv_value > 0 ? data.tv_value : ''}</div></td >
                     <td class="text-middle" ><img src="/assets/images/options.png"  class="px-1 options"  id="${data.id}"><img src="/assets/images/done.png" class="px-1 done" id="${data.id}"></td>
                     </tr >
                     `
                    html += td
                })

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
            document.getElementById('pagination_link').innerHTML = data.pagination


        })

}


load_data()
let searchValue = document.getElementById('searchBar')
searchValue.addEventListener('keyup', (e) => load_data(e.target.value))

