(function(){
      const canvas = document.getElementById('sparkleCanvas');
      const ctx = canvas.getContext('2d');
      let particles = [];
      let animId = null;

      function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
      window.addEventListener('resize', resize);
      resize();

      const COLORS = ['#f5c842','#f7d86b','#ffe066','#ffd700','#fff176','#ffec40'];
      const SHAPES = ['star','star','star','circle','diamond'];

      let _cx = window.innerWidth/2, _cy = window.innerHeight/2;

      function createParticles(cx, cy){
        particles = [];
        cx = cx || window.innerWidth / 2;
        cy = cy || window.innerHeight / 2;
        for(let i = 0; i < 90; i++){
          const angle = (Math.PI * 2 / 90) * i + (Math.random() - 0.5) * 0.5;
          const speed = 1.5 + Math.random() * 5.5;
          const size  = 4 + Math.random() * 10;
          particles.push({
            x: cx, y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
            alpha: 0.75,
            decay: 0.003 + Math.random() * 0.004,
            gravity: 0.02 + Math.random() * 0.02,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.1,
          });
        }
      }

      function drawStar(ctx, x, y, r, rot){
        ctx.save(); ctx.translate(x,y); ctx.rotate(rot);
        ctx.beginPath();
        for(let i=0;i<5;i++){
          const a = (Math.PI*2/5)*i - Math.PI/2;
          const b = a + Math.PI/5;
          ctx.lineTo(Math.cos(a)*r, Math.sin(a)*r);
          ctx.lineTo(Math.cos(b)*r*0.4, Math.sin(b)*r*0.4);
        }
        ctx.closePath(); ctx.fill(); ctx.restore();
      }

      function loop(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        let alive = false;
        for(const p of particles){
          if(p.alpha <= 0) continue;
          alive = true;
          p.x += p.vx; p.y += p.vy;
          p.vy += p.gravity;
          p.vx *= 0.98;
          p.alpha -= p.decay;
          p.rotation += p.rotSpeed;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          if(p.shape === 'star'){
            drawStar(ctx, p.x, p.y, p.size, p.rotation);
          } else if(p.shape === 'circle'){
            ctx.beginPath(); ctx.arc(p.x,p.y,p.size*0.5,0,Math.PI*2); ctx.fill();
          } else {
            ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
            ctx.beginPath();
            ctx.moveTo(0,-p.size*0.6); ctx.lineTo(p.size*0.4,0);
            ctx.lineTo(0,p.size*0.6); ctx.lineTo(-p.size*0.4,0);
            ctx.closePath(); ctx.fill(); ctx.restore();
          }
        }
        ctx.globalAlpha = 1;
        if(alive) animId = requestAnimationFrame(loop);
        else particles = [];
      }

      window.triggerSparkle = function(targetEl){
        if(animId){ cancelAnimationFrame(animId); animId = null; }
        let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
        if(targetEl){
          const rect = targetEl.getBoundingClientRect();
          cx = rect.left + rect.width / 2;
          cy = rect.top + rect.height / 2;
        }
        createParticles(cx, cy);
        loop();
      };
    })();
