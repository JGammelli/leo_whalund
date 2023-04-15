<script>
import { about } from '$lib/data/projects';
</script>

<div>
    <h2>{about.title}</h2>
    <p>{about.content}</p>
    <img src={`http://drive.google.com/uc?export=view&id=${about.image}`} alt="Profile">
</div>

<style>

    div{
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