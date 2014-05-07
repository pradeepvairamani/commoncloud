<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Common Cloud</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- The styles -->
    <link href="/css/bootstrap.css" rel="stylesheet">
  </head>

  <body>

    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" <data->    </data->target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Common Cloud</a>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a id="box" href="#">Box</a></li>
              <li ><a id="dropbox" href="#">Dropbox</a></li>
              <li><a id="gdrive" href="#">Google Drive</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
  </nav>

  <div class="panel panel-primary">
    <div class="panel-heading">Documents</div>
     <ul class="list-group">
      <a href="#" li class="list-group-item">
        <span class="glyphicon glyphicon-folder-close" style="float:left;width: 20px;"></span>
        Test
        <span class="glyphicon glyphicon-chevron-right" style="float:right"></span>
      </a>
      <a href="#" li class="list-group-item">One</a>
      <a href="#" li class="list-group-item">Two</a>
      <a href="#" li class="list-group-item">Three</a>
      <a href="#" li class="list-group-item">Four</a>
    </ul>
  </div>

    <!-- The javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- But really should be async loaded -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/js/commoncloud.js"></script>
    <script src="/js/bootstrap.js"></script>
  </body>
</html>