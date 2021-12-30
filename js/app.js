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
    let html = '';
    let htmlModal = '';
    regions.forEach(region => {
        let options =
            `<div>
        <option>${region.region_name}</option>
        
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