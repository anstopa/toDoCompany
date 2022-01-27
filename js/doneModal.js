let id = null

export async function isDone(e) {
    id = e.target.id
    let doneModal = getdoneModal();
    if (!doneModal) { doneModal = initdoneModal(); }
    let modal = new bootstrap.Modal(document.getElementById('doneModal'))


    let htmlModal =
        `
            <div class="modal-body">
            <form action="#" id="doneAssemblay">
            <div><h3>Montaż wykonany?</h3></div>
               <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal">Zamknij</button>
               <button type='submit' class="btn btn-primary " data-bs-dismiss="modal">Zatwierdź</button>
               
            </form>
        </div>
        `

    setdoneModalContent(htmlModal)
    modal.show()

    let doneAssemblayForm = document.getElementById('doneAssemblay');
    doneAssemblayForm.addEventListener("submit", doneAssemblay)




}
function getdoneModal() {
    return document.getElementById('doneModal');
}

function setdoneModalContent(html) {
    getdoneModal().querySelector('.modal-content').innerHTML = html;
}

function initdoneModal() {
    var htmlModal = document.createElement('div');
    htmlModal.classList.add('modal', 'fade');
    htmlModal.setAttribute('id', 'doneModal');
    htmlModal.setAttribute('tabindex', '-1');
    htmlModal.setAttribute('role', 'dialog');
    htmlModal.setAttribute('aria-labelledby', 'doneModalLabel');
    htmlModal.setAttribute('aria-hidden', 'true');
    htmlModal.innerHTML =
        `  <div class="modal-dialog" role="document">
        <div class="modal-content"></div>
        </div>`;
    document.body.appendChild(htmlModal);
    return htmlModal;
}
async function doneAssemblay() {

    const req = new FormData();
    req.append('id', id)
    let url = `api/setDoneAssemblay.php`

    fetch(url, {
        method: 'POST',
        body: req
    })
        .then(response => { return response.text() }).catch(error => {
            console.error(error)
        })
    modal.hide()
}