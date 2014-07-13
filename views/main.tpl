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
    <link href="/css/folder.css" rel="stylesheet">
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
     <ul class="list-group" id = "artifact-list">
    </ul>
  </div>
  <img src="/img/ajax-loader.gif" id="loading-indicator" style="display:none" />

    <!-- The javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!-- But really should be async loaded -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
    <script src="/js/commoncloud.js"></script>
    <script src="/js/router.js"></script>
    <script src="/js/bootstrap.js"></script>
    <script src="/js/box.js"></script>
  </body>
</html>