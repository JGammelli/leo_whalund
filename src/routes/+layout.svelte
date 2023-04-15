<script>
    import { page } from '$app/stores'
</script>

<div class="container">
    <div class="header">
        <h1>Leo Wahlund</h1>
        <p class="smalTxt">Programmer and Designer</p>
    </div>
    <div class="navigator">
        <nav>
            <div class="navPointer">
                {#if $page.url.toString() === 'https://leowahlund.netlify.app/about'}
                    <svg width="1402" height="80" viewBox="0 0 1402 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M419.432 53L449.058 79L478.685 53" stroke="#8E8E8E"/>
                        <path class="pointer" d="M434.535 53L449.639 66L464.743 53" stroke="#ff9d42"/>
                        <path d="M828.22 53H731.788" stroke="8E8E8E"/>
                        <path d="M672.535 53H576.104" stroke="8E8E8E"/>
                        <path d="M828.22 53L1080.34 53" stroke="#8E8E8E"/>
                        <path d="M323.988 53L576.104 53" stroke="#8E8E8E"/>
                        <path d="M1387.06 1L1359.17 27" stroke="#8E8E8E"/>
                        <path d="M1401 14L1373.12 40" stroke="#8E8E8E"/>
                        <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                        <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                        <path d="M1107.06 27L1079.17 53" stroke="#8E8E8E"/>
                        <path d="M14.9419 1L42.8257 27" stroke="#8E8E8E"/>
                        <path d="M1.00003 14L28.8839 40" stroke="#8E8E8E"/>
                        <path d="M42.8257 27L294.942 27" stroke="#8E8E8E"/>
                        <path d="M294.942 27L322.826 53" stroke="#8E8E8E"/>
                    </svg>   
                    {:else}
                        {#if $page.url.toString() === 'https://leowahlund.netlify.app/contact'}                           
                            <svg width="1402" height="80" viewBox="0 0 1402 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M923.432 53L953.058 79L982.685 53" stroke="#8E8E8E"/>
                                <path class="pointer" d="M938.535 53L953.639 66L968.743 53" stroke="#ff9d42"/>
                                <path d="M828.22 53H731.788" stroke="8E8E8E"/>
                                <path d="M672.535 53H576.104" stroke="8E8E8E"/>
                                <path d="M828.22 53L1080.34 53" stroke="#8E8E8E"/>
                                <path d="M323.988 53L576.104 53" stroke="#8E8E8E"/>
                                <path d="M1387.06 1L1359.17 27" stroke="#8E8E8E"/>
                                <path d="M1401 14L1373.12 40" stroke="#8E8E8E"/>
                                <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                                <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                                <path d="M1107.06 27L1079.17 53" stroke="#8E8E8E"/>
                                <path d="M14.9419 1L42.8257 27" stroke="#8E8E8E"/>
                                <path d="M1.00003 14L28.8839 40" stroke="#8E8E8E"/>
                                <path d="M42.8257 27L294.942 27" stroke="#8E8E8E"/>
                                <path d="M294.942 27L322.826 53" stroke="#8E8E8E"/>
                            </svg>    
                    {:else}
                        <svg width="1402" height="80" viewBox="0 0 1402 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M672.535 53L702.162 79L731.788 53" stroke="#8E8E8E"/>
                            <path class="pointer" d="M687.639 53L702.743 66L717.846 53" stroke="#ff9d42"/>
                            <path d="M828.22 53H731.788" stroke="8E8E8E"/>
                            <path d="M672.535 53H576.104" stroke="8E8E8E"/>
                            <path d="M828.22 53L1080.34 53" stroke="#8E8E8E"/>
                            <path d="M322.988 53L576.104 53" stroke="#8E8E8E"/>
                            <path d="M1387.06 1L1359.17 27" stroke="#8E8E8E"/>
                            <path d="M1401 14L1373.12 40" stroke="#8E8E8E"/>
                            <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                            <path d="M1359.17 27L1107.06 27" stroke="#8E8E8E"/>
                            <path d="M1107.06 27L1079.17 53" stroke="#8E8E8E"/>
                            <path d="M14.9419 1L42.8257 27" stroke="#8E8E8E"/>
                            <path d="M1.00003 14L28.8839 40" stroke="#8E8E8E"/>
                            <path d="M42.8257 27L294.942 27" stroke="#8E8E8E"/>
                            <path d="M294.942 27L322.826 53" stroke="#8E8E8E"/>
                        </svg>
                    {/if}
                {/if}                   
            </div>
            <ul>
                <li><a href="/about" style={`color:${($page.url.toString() === 'https://leowahlund.netlify.app/about') ? '#ECC977' : ''}`}>ABOUT</a></li>
                <li><a href="/" style={`color:${($page.url.toString() === 'https://leowahlund.netlify.app/') ? '#ECC977' : ''}`}>PORTFOLIO</a></li>
                <li><a href="/contact" style={`color:${($page.url.toString() === 'https://leowahlund.netlify.app/contact') ? '#ECC977' : ''}`}>CONTACT</a></li>
            </ul>
        </nav>
    </div>
<slot/>

</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
  /* Pointer svg */
    path{
        stroke: #ECC977;
    }
    .pointer{
        stroke: #ECE8E1;
    }
    a:hover{
        color: #ECC977;
    }
    .container {
		text-align: center;
	}
    .navPointer{
        height: 7rem;
    }
    .header{
        margin-top: 5rem;
    }
    h1{
        font-size: 3rem;
        color: #ECE8E1;
	}
    li{
        width: 252px;
        font-size: 1.5rem;
    }
    ul{
        width: 756px;
        height: 8rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .smalTxt{
        font-size: .9rem;
        margin-top: 1rem;
        letter-spacing: .4rem;
        color: #ECC977;
    }
    :global(a){
		text-decoration: none;
		color: #ECE8E1;
	}
	:global(body){
		background-color: #121824;
		color: #ECE8E1;
        background: url('http://drive.google.com/uc?export=view&id=1y6DAZU8_9YjqxjN-2r_0dbOm2BZCG4CF') no-repeat;

	}
	:global(*){
		margin: 0 auto;
		padding: 0;
		font-weight: 300;
        letter-spacing: 1px;
		font-family: 'Quicksand', sans-serif;
    }
	:global(li){
		list-style-type: none;
	}
    :global(p, a){
		font-size: 1.2rem;
	}
</style>

