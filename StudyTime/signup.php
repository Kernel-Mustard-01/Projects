<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- Bootstrap 4 CSS-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">


    <title>Regiser</title>
</head>
<body>
    
<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <form action="signup.php" method="post">
                <h3 class="text-container">Regester</h3>

                <div class="form-group">
                    <label for="username">username</label>
                    <input type="text" name="username" class="form-control form-control-lg">
                </div>

                <div class="form-group">
                    <label for="email">email</label>
                    <input type="email" name="email" class="form-control form-control-lg">
                </div>

                <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" name="passwrord" class="form-control form-control-lg">
                </div>

                <div class="form-group">
                    <label for="passwordConf">Confirm password</label>
                    <input type="passwordConf" name="passwrordConf" class="form-control form-control-lg">
                </div>


                <div class="form-group">
                    <button type="submit" name="signup-btn" class="btn btn-primary btn-block btn-lg">Sign Up

                    </button>
                </div>

                <p class="text-center">Already a member? <a href="login.php">Sign In</a></p>

            </form>
        </div>
    </div>
</div>

</body>
</html>


<!--https://www.youtube.com/watch?v=8K4Wt37Itc4-->