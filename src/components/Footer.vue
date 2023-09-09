<template>
    <footer>
        <p id="credits">Made with <i class="fa-solid fa-heart" id="red"></i> by <a id="me" href="https://gabs.eu.org">Gabs</a></p>
        <p id="copyright">© 2023 Gabs/Gabriel Cozma. All rights reserved.</p>
    </footer>
</template>

<style>
footer {
    text-align: center;
    background-color: #F3F3F3;
    padding: 15px;
}

#red {
        color: #dd2e44;
    }

    #me {
        font-weight: 900;
        text-decoration: underline;
    }

    #credits {
        font-weight: 700;
    }

    #copyright {
        font-weight: 600;
        color: #000000;
    }

    a {
        text-decoration: none;
        color: #000000 !important;
    }

@media (prefers-color-scheme: dark) {
    footer {
    font-family: 'Inter';
    background-color: #181818;
    }

    #copyright {
        font-weight: 600;
        color: #ffffff;
    }

    a {
        text-decoration: none;
        color: #ffffff !important;
    }
}
</style>