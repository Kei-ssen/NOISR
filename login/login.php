<!DOCTYPE html>
<html lang="es">

<head>
    <title>PHP - Ejemplo 3</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Manuale|Montserrat+Alternates&display=swap" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <!-- FAVICÓN -->
    <link href="media/logo.png" rel="icon" type="image/png">
</head>

<body>
    <!-- FONDO -->
    <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                        result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
        <div class="gradients-container">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
            <div class="interactive"></div>
        </div>
    </div>
    <!-- En action definimos la página php que va a recoger los datos del formulario
             y a comprobar que son corretos.
             En method pondremos siempre post en los formularios -->
    <header>
        <h1>PHP. Ejemplo 3</h1>
    </header>
    <main>
        <p class="instrucciones">Se comprobará si el identificador y la contraseña del usuario existen en la base de datos. Además, en la página principal, se mostrará el identificador del usuario.</p>
        <form action="control.php" method="post">
            <label for="id">Identificador</label>
            <input type="text" id="id" name="id" placeholder="Identificador">
            <label for="pass">Contraseña</label>
            <input type="password" id="pass" name="pass" placeholder="Contraseña" required>
            <input type="submit" value="Acceder al portal">
        </form>
        <?php
        //Definimos los errores que podemos recibir
        define('ERR_CONN',1); //No se puede conectar a la base de datos
        define('ERR_USUARIO',2); //Usuario o contraseña incorrectos
        define('ERR_NO_IDENTIF',3); //El usuario no se ha identificado

        //Presentamos el error
        //Comprobamos que existe el parámetro error a través del método GET, porque lo
        //enviamos a través de la URL. Si existe, cogemos su valor. Según el valor,
        //el error será de conexión en la base de datos (error=1), usuario o contraseña
        //incorrectos (error=2) o usuario no identificado (error=3)
        if(isset($_GET['error'])){
            $error=(int)$_GET['error'];
            switch($error){
                case ERR_CONN:
                    echo '<p class="error">Error: No se ha podido conectar con la base de datos</p>';
                    break;
                case ERR_USUARIO:
                    echo '<p class="error">Error: Identificador o contraseña incorrectos</p>';
                    break;
                case ERR_NO_IDENTIF:
                    echo '<p class="error">Error: Debe identificarse para acceder al portal</p>';
                    break;
                default:
                    echo '<p class="error">Error desconocido</p>';
                    break;
            }
        }
        ?>
    </main>
</body>

</html>
