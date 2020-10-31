<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>HapEvent | HomePage</title>
        <script src="https://kit.fontawesome.com/aeef604827.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

        <!-- Fonts -->
        {{--<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">--}}

    </head>
    <body >
        <div id="homepage"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
    {{--<script type="text/javascript">--}}
        {{--var site_url = '{{ url("/") }}';--}}
        {{--var base_url = window.location.pathname;--}}
        {{--base_url = base_url.slice(0, base_url.lastIndexOf('/'));--}}
        {{--var storage_url = '{{ Storage::url('/pages/') }}';--}}
        {{--var course_slug = '{{ Request::segment(2) }}';--}}
        {{--var lecture_slug = '{{ Request::segment(3) }}';--}}
    {{--</script>--}}

</html>
