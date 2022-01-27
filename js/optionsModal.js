
export async function editOptions(options) {
    options.forEach(option => option.addEventListener('click', generateOptionsModal))

}

async function getAssemblayById(id) {
    let url = `api/getAssemblayById.php?+id=${id}`
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }

}
async function editAssemblay(event) {
    event.preventDefault()
    let form = event.target;
    let formData = new FormData(form)
    for (let key of formData.keys()) {
        console.log(key, formData.get(key))
    }
    fetch(`api/updateAssemblay.php`, {
        method: 'POST',
        dataType: 'multipart/form-data',
        body: formData
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(console.warn)
}
async function generateOptionsModal(e) {
    let id = e.target.id
    let assemblay = await getAssemblayById(id)
    let exampleModal = getExampleModal();
    if (!exampleModal) { exampleModal = initExampleModal(); }
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'))

    assemblay.forEach(data => {
        console.log(data.name)
        let htmlModal =
            `
            <div class="modal-body">
            <form action="#" id="editAssemblay">
               
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Nazwa</label>
                    <input type="text" class="form-control" required name="name-options" value="${data.name}"
                        id="formGroupExampleInput">
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Adres</label>
                    <input type="text" class="form-control" required name="address-options" value="${data.address}"
                        id="formGroupExampleInput2">
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Telefon</label>
                    <input type="text" class="form-control" required name="tel-options" value="${data.tel_num}"
                        id="formGroupExampleInput2">
                </div>

                <div class="mb3 ">


                    <input class="form-check-input m-1" type="checkbox" name="int-checkbox-options"
                        id="int-checkbox-options"  ${data.int ? 'checked' : ''}>
                        
             
                    <label for="int-checkbox">INT</label>

                    <input class="form-check-input m-1" type="checkbox" name="tv-checkbox-options"
                        id="tv-checkbox-options" ${data.tv ? 'checked' : ''}>
                    <label for="tv-checkbox-options">TV</label>

                    <input type="number"  id="tv-value-options" style="width: 60px" min="1" value="${data.tv_value}"
                        name="tv-value-options" ${data.tv ? '' : "disabled"}>
<div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Priorytet</label>
                    <select class="form-select" required name="priority-options" 
                        id="formGroupExampleInput2">
                        <option value="0" ${data.priority == 0 ? "selected" : ''}>Normalny</option>
                        <option value="1"${data.priority == 1 ? "selected" : ''}>Pilne</option>
                        <option value="2"${data.priority == 2 ? "selected" : ''}>Na już</option>
                        </select>
                </div>
                    <div class="mb-3 ">
                        <label for="formGroupExampleInput2" class="form-label">Notatka</label>
                        <textarea type="text" class="form-control" name='bok-note-options'
                            id="formGroupExampleInput2" >${data.bok_note}</textarea>
                    </div>

<input name=id type="hidden" id="id" value=${data.id}>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Zamknij</button>
                        <button type="submit" class="btn btn-primary " data-bs-dismiss="modal" id="submit">Zapisz zmiany</button>
                    </div>
                </div>
            </form>
        </div>
        `

        setExampleModalContent(htmlModal)
        modal.show()
        document.getElementById('tv-checkbox-options').onchange = function () {
            document.getElementById('tv-value-options').disabled = !this.checked;
        }
        let editAssemblayForm = document.getElementById('editAssemblay');
        editAssemblayForm.addEventListener("submit", editAssemblay)

    })


}
function getExampleModal() {
    return document.getElementById('exampleModal');
}

function setExampleModalContent(html) {
    getExampleModal().querySelector('.modal-content').innerHTML = html;
}

function initExampleModal() {
    var modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.setAttribute('id', 'exampleModal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
        `  <div class="modal-dialog" role="document">
        <div class="modal-content"></div>
        </div>`;
    document.body.appendChild(modal);
    return modal;
}