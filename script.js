/* ==========================================
   JARVIS OS Build 2.0
========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    background:#030814;
    overflow:hidden;
    color:#bff7ff;
    font-family:Arial, Helvetica, sans-serif;

}

/* ==========================
   Achtergrond
========================== */

#background{

    position:fixed;
    inset:0;

    background:
    radial-gradient(circle at center,#102244 0%,#071120 35%,#020611 100%);

}

/* ==========================
   Scanlijnen
========================== */

#scanlines{

    position:fixed;
    inset:0;

    pointer-events:none;

    opacity:.05;

    background:
    repeating-linear-gradient(
        to bottom,
        transparent 0px,
        transparent 3px,
        white 4px
    );

}

/* ==========================
   HUD
========================== */

#hud{

    position:absolute;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    display:flex;
    flex-direction:column;

    align-items:center;

}

/* ==========================
   Arc Reactor
========================== */

#arc-reactor{

    position:relative;

    width:300px;
    height:300px;

    margin-bottom:40px;

}

.ring{

    position:absolute;

    border-radius:50%;

    border:3px solid #00dfff;

    box-shadow:

        0 0 15px #00dfff,
        0 0 35px #00dfff,
        inset 0 0 20px #00dfff;

}

.outer{

    width:300px;
    height:300px;

    animation:spin 18s linear infinite;

}

.middle{

    width:220px;
    height:220px;

    left:40px;
    top:40px;

    animation:spinReverse 12s linear infinite;

}

.inner{

    width:140px;
    height:140px;

    left:80px;
    top:80px;

    animation:spin 7s linear infinite;

}

.coreGlow{

    position:absolute;

    width:120px;
    height:120px;

    top:90px;
    left:90px;

    border-radius:50%;

    background:#00dfff55;

    filter:blur(20px);

}

.core{

    position:absolute;

    width:80px;
    height:80px;

    top:110px;
    left:110px;

    border-radius:50%;

    background:#c7ffff;

    box-shadow:

        0 0 20px #00dfff,
        0 0 45px #00dfff,
        0 0 90px #00dfff;

}

/* ==========================
   Tekst
========================== */

h1{

    font-size:60px;

    letter-spacing:12px;

    color:#84eeff;

    text-shadow:
        0 0 15px #00dfff;

}

#statusText{

    margin-top:15px;

    letter-spacing:4px;

    font-size:18px;

    animation:pulse 2s infinite;

}

#systemInfo{

    margin-top:35px;

    text-align:center;

    color:#70dfff;

    line-height:28px;

    opacity:.85;

}

/* ==========================
   Verborgen onderdelen
========================== */

#workspace,
#windows,
#commandBar{

    display:none;

}

/* ==========================
   Animaties
========================== */

@keyframes spin{

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }

}

@keyframes spinReverse{

    from{
        transform:rotate(360deg);
    }

    to{
        transform:rotate(0deg);
    }

}

@keyframes pulse{

    0%{
        opacity:.4;
    }

    50%{
        opacity:1;
    }

    100%{
        opacity:.4;
    }

}
