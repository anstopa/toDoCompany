<!DOCTYPE html>
<html lang=pl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style4.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css" integrity="sha384-QokYePQSOwpBDuhlHOsX0ymF6R/vLk/UQVz3WHa6wygxI5oGTmDTv8wahFOSspdm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossorigin="anonymous">
</head>

<body>

    <div class="wrapper">

        <!-- Sidebar -->
        <!-- <nav id="sidebar">
            <div class="sidebar-header">
                <h4>WSS</h4>

            </div>

            <ul class="list-unstyled components">
                <li id="mKlient" class="disabled">
                    <a href="#klientSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-user"></i>
                        Klient
                    </a>
                    <ul class="collapse list-unstyled" id="klientSubmenu">
                        <li>
                            <a href="#" id="custNew">Nowy klient</a>
                        </li>
                        <li>
                            <a href="#" id="custRadius">Wyszukaj klienta</a>
                        </li>

                        <li>
                            <a href="#" id="custMac">Wyszukaj MAC w Radius</a>
                        </li>
                        <li>
                            <a href="#">Radius</a>
                        </li>
                    </ul>
                </li>
                <li id="mMont" class="enable">
                    <a href="#montSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-hammer"></i>
                        Montaże
                    </a>
                    <ul class="collapse list-unstyled" id="montSubmenu">
                        <li>
                            <a href="#" id="montaz">Montaze</a>
                        </li>
                    </ul>
                </li>

                <li id="mSGT" class="disabled">
                    <a href="#jamboxSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-desktop"></i>
                        JAMBOX
                    </a>
                    <ul class="collapse list-unstyled" id="jamboxSubmenu">
                        <li>
                            <a href="#">Menu 1</a>
                        </li>
                        <li>
                            <a href="#">Menu 2</a>
                        </li>
                        <li>
                            <a href="#" id="JamboxEnd">Kończące się pakiety</a>
                        </li>
                    </ul>
                </li>

                <li id="mZTE" class="disabled">
                    <a href="#zteSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-laptop-code"></i>
                        ZTE
                    </a>
                    <ul class="collapse list-unstyled" id="zteSubmenu">
                        <li>
                            <a href="#" id="zteMNG">ZTE Manager</a>
                        </li>

                    </ul>
                </li>
                <li id="mSiec" class="disabled">
                    <a href="#netSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-network-wired"></i>
                        SIEĆ
                    </a>
                    <ul class="collapse list-unstyled" id="netSubmenu">
                        <li>
                            <a href="#" id="testZTE">Menu 1</a>
                        </li>
                        <li>
                            <a href="#">Menu 2</a>
                        </li>
                        <li>
                            <a href="#">Menu 3</a>
                        </li>
                    </ul>
                </li>
                <li id="mMapy" class="disabled">
                    <a href="#mapSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-globe"></i>
                        Mapy
                    </a>
                    <ul class="collapse list-unstyled" id="mapSubmenu">
                        <li>
                            <a href="#" id="mapTauron">Tauron słupy</a>
                        </li>
                        <li>
                            <a href="#" id="mapPON">Porty PON</a>
                        </li>
                        <li>
                            <a href="#" id="mapStan">Stan ONU</a>
                        </li>
                    </ul>
                </li>

                <li id="mTool" class="disabled">
                    <a href="#toolSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-toolbox"></i>
                        Narzędzia
                    </a>
                    <ul class="collapse list-unstyled" id="toolSubmenu">
                        <li>
                            <a href="#" id="mnuCall">Centralka</a>
                        </li>
                        <li>
                            <a href="#" id="mnuTOK">TOK</a>
                        </li>

                        <li>
                            <a href="#" id="mnuMagazyn">Magazyn</a>
                        </li>

                    </ul>
                </li>



                <li id="mAdmin" class="disabled">
                    <a href="#adminSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-cog"></i>
                        Admin
                    </a>
                    <ul class="collapse list-unstyled" id="adminSubmenu">
                        <li>
                            <a href="#" id="mnuAdminUsers">Użytkownicy</a>
                        </li>
                        <li>
                            <a href="#" id="mnuOff">Wylacz</a>
                        </li>

                    </ul>
                </li>

              
        <li>
            <a href="#" id="logout">
                <i class="fas fa-door-open"></i>
                Wyloguj
            </a>
        </li>
        </ul>


        </nav> -->

        <!-- Page Content  -->
        <div id="content">
            <div class="bg-light">
                <div class="container-fluid p-2">
                    <div class="alert alert-primary m-2" role="alert">
                        <h2>Montaże</h2>
                        <hr />
                        <div class="row">


                            <div class="col-sm-2">
                                <form action="#">
                                    <div class="form-group">
                                        <div class="input-group input-group-sm">
                                            <select class="output">
                                                <script src="js/app.js"></script>
                                            </select>


                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-2">

                            </div>

                            <div class="col-sm-2"><button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"> Dodaj montaż</button></div>

                        </div>



                    </div>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-body">
                                <form action="#" id="addinstalation">
                                    <!-- <input name="input1"></br>
                                    <input name="input2"></br>
                                    <input type="submit"> -->
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput" class="form-label">Regin</label>
                                        <select class="formRegion form-control" name="region" id="formGroupExampleInput"></select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput" class="form-label">Nazwa</label>
                                        <input type="text" class="form-control" name="name" id="formGroupExampleInput">
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label">Adres</label>
                                        <input type="text" class="form-control" name="address" id="formGroupExampleInput2">
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label">Telefon</label>
                                        <input type="text" class="form-control" name="tel" id="formGroupExampleInput2">
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label">Notatka</label>
                                        <textarea type="text" class="form-control" name='bok_note' id="formGroupExampleInput2"></textarea>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                                        <button type="submit" class="btn btn-primary ">Dodaj
                                            montaż</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <?php
            if ($_SERVER['REQUEST_METHOD'] === 'POST') {

                var_dump(empty($_POST));
            }
            ?>

        </div>
    </div>
    <script type="text/javascript" src="js/custom.js"></script>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

</html>