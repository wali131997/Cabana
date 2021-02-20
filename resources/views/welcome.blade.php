<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cabana Capitals</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet"type="text/css" href="{{asset('css/app.css')}}">
        <link rel="stylesheet"type="text/css" href="{{asset('css/animate.css')}}">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.css"
    /><script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>

        <!-- Styles -->
        
    </head>
    <body>
        <div id="root">
        </div>
        <!-- <script src="js/jquery.min.js" type="text/javascript"></script> -->
<!-- <script src="js/jquery.dataTables.min.js" type="text/javascript"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


    <script
      type="text/javascript"
      charset="utf8"
      src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.js"
    ></script>
        <script type="text/javascript" src ="{{asset('js/app.js')}}"></script>
    </body>
</html>
