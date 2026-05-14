(function(){
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize(); window.addEventListener('resize', resize);

    function drawPaw(x, y, size, alpha){
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = '#3E2A1A';
      ctx.beginPath();
      ctx.ellipse(x, y, size*0.55, size*0.45, 0, 0, Math.PI*2);
      ctx.fill();
      const toes = [[-0.55,-0.75],[0,-0.95],[0.55,-0.75]];
      toes.forEach(([dx,dy]) => {
        ctx.beginPath();
        ctx.ellipse(x+dx*size, y+dy*size, size*0.28, size*0.25, 0, 0, Math.PI*2);
        ctx.fill();
      });
      ctx.restore();
    }

    const particles = [];
    let spawnCount = 0;

    function spawn(){
      // alternate small and large paws
      const isLarge = spawnCount % 2 === 0;
      spawnCount++;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        size: isLarge ? (7 + Math.random()*6) : (3 + Math.random()*3),
        speed: 0.2 + Math.random()*0.35,
        drift: (Math.random()-0.5)*0.4,
        alpha: 0,
        maxAlpha: isLarge ? (0.14 + Math.random()*0.12) : (0.08 + Math.random()*0.1),
        rotation: Math.random()*Math.PI*2,
        rotSpeed: (Math.random()-0.5)*0.008,
        phase: Math.random()*Math.PI*2,
      });
    }

    let frame = 0;
    function loop(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      frame++;

      if(frame % 80 === 0) spawn();

      for(let i = particles.length-1; i >= 0; i--){
        const p = particles[i];
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame*0.015 + p.phase)*0.25;
        p.rotation += p.rotSpeed;

        if(p.y > window.innerHeight - 80) p.alpha = Math.min(p.alpha + 0.003, p.maxAlpha);
        else if(p.y < 80) p.alpha = Math.max(p.alpha - 0.004, 0);
        else p.alpha = Math.min(p.alpha + 0.002, p.maxAlpha);

        if(p.y < -30){ particles.splice(i,1); continue; }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        drawPaw(0, 0, p.size, p.alpha);
        ctx.restore();
      }
      requestAnimationFrame(loop);
    }

    for(let i=0;i<14;i++){
      spawn();
      const p = particles[particles.length-1];
      p.y = Math.random() * window.innerHeight;
      p.alpha = p.maxAlpha * Math.random();
    }

    loop();
  })();
