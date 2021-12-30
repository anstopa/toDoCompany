

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
    }).then(res => res.text())
        .then(data => console.log(data))
        .catch(console.warn)



    const url = 'api/downloadRegions.php';
    async function fetchRegions() {
        let response = await fetch(url)
        let data = await response.json();
        console.log(data);
    }
}