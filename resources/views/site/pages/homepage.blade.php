<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
 <meta name="description" content="Panel Structure">
 <meta name="csrf-token" content="{{ csrf_token() }}">
 <script src="https://kit.fontawesome.com/aeef604827.js" crossorigin="anonymous"></script>
 <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

 <title>Hapevent | HomePage</title>
</head>
<body>

<div id = 'homepage'>

</div>

</body>
{{--<script src="{{ asset('frontend/js/jquery-3.3.1.min.js') }}"></script>--}}
<script type="text/javascript">
    var site_url = '{{ url("/") }}';
    var base_url = window.location.pathname;
    base_url = base_url.slice(0, base_url.lastIndexOf('/'));
    var storage_url = '{{ Storage::url('/pages/') }}';
    {{--var course_slug = '{{ Request::segment(2) }}';--}}
    {{--var lecture_slug = '{{ Request::segment(3) }}';--}}
</script>
<script src="{{ asset('js/app.js') }}" ></script>
</html>