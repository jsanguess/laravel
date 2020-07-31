@extends('plantilla')
@section('seccion')
<h1>Nosotros</h1>
{{-- <h2>Este es</h2> --}}
@foreach ( $equipo as $item)
    <a href="{{ route('nosotros', $item) }}" class="h4 text-danger">{{ $item }}</a><br>
@endforeach

@if (!empty($nombre))

    @switch($nombre)
        @case($nombre=='Nancy')
        <h2>{{$nombre }}</h2>
        <p>{{ $nombre }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae ea atque cupiditate. Labore earum soluta, tempora odit enim nesciunt exercitationem. Id iusto itaque laboriosam in ipsam eos, ut optio!</p>
        @break
        @case($nombre=='Camila')
        <h2> Nombre: {{ $nombre }}</h2>
        <p>{{ $nombre }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae ea atque cupiditate. Labore earum soluta, tempora odit enim nesciunt exercitationem. Id iusto itaque laboriosam in ipsam eos, ut optio!</p>
            @break
        @case($nombre=='Denise')
            <h2> Nombre: {{ $nombre }}</h2>
            <p>{{ $nombre }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae ea atque cupiditate. Labore earum soluta, tempora odit enim nesciunt exercitationem. Id iusto itaque laboriosam in ipsam eos, ut optio!</p>
        @break

    @endswitch
@endif

@endsection
