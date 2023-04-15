<script>
import { about } from '$lib/data/projects';
</script>

<div>
    <h2>{about.title}</h2>
    <p>{about.content}</p>
    <img src={`../src/img/${about.image}`} alt="Profile">
</div>

<style>

    div{
        margin-top: 5rem;
        padding: 5rem;
        width: 756px;
    }
    p{
        margin-top: 3rem;
        line-height: 2;
    }
    img {
        padding-top: 5rem;
        border-radius: 50%;
        width: 20vw;
    }

</style>