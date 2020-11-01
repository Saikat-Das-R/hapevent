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
    {{--<script>--}}
        {{--window.fbAsyncInit = function() {--}}
            {{--FB.init({--}}
                {{--appId      : '{your-app-id}',--}}
                {{--cookie     : true,--}}
                {{--xfbml      : true,--}}
                {{--version    : '{api-version}'--}}
            {{--});--}}

            {{--FB.AppEvents.logPageView();--}}

        {{--};--}}

        {{--(function(d, s, id){--}}
            {{--var js, fjs = d.getElementsByTagName(s)[0];--}}
            {{--if (d.getElementById(id)) {return;}--}}
            {{--js = d.createElement(s); js.id = id;--}}
            {{--js.src = "https://connect.facebook.net/en_US/sdk.js";--}}
            {{--fjs.parentNode.insertBefore(js, fjs);--}}
        {{--}(document, 'script', 'facebook-jssdk'));--}}
    {{--</script>--}}
    {{--<script type="text/javascript">--}}
        {{--var site_url = '{{ url("/") }}';--}}
        {{--var base_url = window.location.pathname;--}}
        {{--base_url = base_url.slice(0, base_url.lastIndexOf('/'));--}}
        {{--var storage_url = '{{ Storage::url('/pages/') }}';--}}
        {{--var course_slug = '{{ Request::segment(2) }}';--}}
        {{--var lecture_slug = '{{ Request::segment(3) }}';--}}
    {{--</script>--}}

</html>
