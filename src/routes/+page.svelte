<script>
/** @type {import('./$types').PageData} */
import { projects } from '$lib/data/projects';
</script>

<div>
	<div class="container">
		{#each projects as project}
            <div class="projectContainer">
				<div class="project">
					<div class="img" style= {`background: url('src/img/${project.image}') no-repeat; background-size: cover;`}>
						<div class="svg">				
							<div class="text">
								<h2>
									<a href={`/project/${project.title}`}>{project.title}</a>
								</h2>
								<p>{project.content}</p>
							</div>
							<div class="pointer">
								<a href={`/project/${project.title}`}>
								<svg class="svgPointer" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect x="0.707107" y="36" width="49.9117" height="49.9117" transform="rotate(-45 0.707107 36)" fill="#ff9d42" stroke="#878787" />
									<path d="M42.6406 35.9999H29.3593M29.3593 35.9999L31.6269 33.7864M29.3593 35.9999L31.6269 38.2135" stroke="#878787" stroke-linecap="round"/>
								</svg></a>
							</div>
						</div>
					</div>
				</div>
			</div>
        {:else}
            <div>Bringing the projects...</div>
        {/each}
	</div>
    
</div>


<style>
	.svgPointer rect, path{
		fill: #ffffff2a;
		stroke: #B58A4E;
	}
	.container{
		display: flex;
		justify-content: space-around;
		flex-flow: row wrap;
		margin: 5rem 19vw;
		text-align: center;

	}
	.projectContainer{
		width: 50%;
		margin-bottom: 10rem;
	}
	.project{
		margin: 0 2vw;
		height: 15vw;
		border: 2px solid #B58A4E;
	}
	.img{
		max-width: 794px;
		height: 100%;
	}
	.svg{
		background: url('src/svg/Box.svg') no-repeat;
		background-size: cover;
		position: relative;
		max-width: 794px;
		height: 100%;
		object-fit: fill;
	}
	.text{
		position: absolute;
		bottom: 2vw;
		left: 1vw;
		text-align: start;
	}
	.pointer{
		position: absolute;
		bottom: .8vw;
		right: 1.8vw;
  		transform: scaleX(-1);
	}
	.svgPointer:hover{
		scale: 1.3;
	}
	p{
		padding-top: 1rem;
		font-size: 1rem;

	}

	a:hover{
		color: #B58A4E;
	}

	
	@media (min-width: 640px) {
		main {
			max-width: none;
			
		}
	}
</style>