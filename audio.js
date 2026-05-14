(function(){
    let audioCtx = null;
    let bgmNodes = null;
    let bgmGain = null;
    let muted = false;
    let volume = 1.0;

    function getCtx(){
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      return audioCtx;
    }

    // ── helpers ──────────────────────────────────────────────────
    function playTone(freq, type, startTime, duration, vol, ctx, dest){
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(dest);
      osc.type = type; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(vol, startTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
      osc.start(startTime); osc.stop(startTime + duration + 0.05);
    }

    // ── 1. เสียงคลิกเลือกคำตอบ ──────────────────────────────────
    window.sfxClick = function(){
      if(muted) return;
      const ctx = getCtx();
      const master = ctx.createGain(); master.gain.value = 0.18 * volume;
      master.connect(ctx.destination);
      const now = ctx.currentTime;
      playTone(988,  "square", now,      0.05, 0.5, ctx, master);
      playTone(1319, "square", now+0.05, 0.12, 0.4, ctx, master);
    };

    window.sfx8bit = function(){
      if(muted) return;
      const ctx = getCtx();
      const master = ctx.createGain(); master.gain.value = 0.35 * volume;
      master.connect(ctx.destination);
      const now = ctx.currentTime;
      playTone(220, "square", now,      0.04, 0.4, ctx, master);
      playTone(440, "square", now+0.04, 0.04, 0.35, ctx, master);
      playTone(660, "square", now+0.08, 0.05, 0.3, ctx, master);
    };
    window.sfxTransition = function(){
      if(muted) return;
      const ctx = getCtx();
      const master = ctx.createGain(); master.gain.value = 0.25 * volume;
      master.connect(ctx.destination);
      const now = ctx.currentTime;
      [440, 554, 659].forEach((f, i) =>
        playTone(f, "sine", now + i*0.07, 0.18, 0.5, ctx, master)
      );
    };

    // ── 3. เสียงฉลอง quiz จบ ────────────────────────────────────
    window.sfxCelebrate = function(){
      if(muted) return;
      const ctx = getCtx();
      const master = ctx.createGain(); master.gain.value = 0.18 * volume;
      master.connect(ctx.destination);
      const now = ctx.currentTime;
      [523,659,784,1047,784,1047,1319].forEach((f,i) =>
        playTone(f, "square", now + i*0.09, 0.18, 0.5, ctx, master)
      );
    };

    window.sfxStarCollect = function(){
      if(muted) return;
      const ctx = getCtx();
      const master = ctx.createGain(); master.gain.value = 0.18 * volume;
      master.connect(ctx.destination);
      const now = ctx.currentTime;
      [659,784,880,988,1047,1175,1319].forEach((f,i) =>
        playTone(f, "sine", now + i*0.05, 0.15, 0.35, ctx, master)
      );
    };

    // ── 4. BGM — gentle looping chiptune ────────────────────────
    const BPM = 110;
    const BEAT = 60/BPM;
    // chord progression: C  Am  F  G  (repeated)
    const CHORDS = [
      [261.6, 329.6, 392.0],
      [220.0, 261.6, 329.6],
      [174.6, 220.0, 261.6],
      [196.0, 246.9, 293.7],
    ];
    const MELODY = [
      523,659,784,659,523,587,523,0,
      440,523,659,523,440,493,440,0,
      349,440,523,659,523,440,392,0,
      392,493,587,659,587,493,392,0,
    ];

    function startBGM(){
      if(bgmNodes || muted) return;
      const ctx = getCtx();
      bgmGain = ctx.createGain();
      bgmGain.gain.value = 0;
      bgmGain.connect(ctx.destination);
      bgmGain.gain.linearRampToValueAtTime(0.35 * volume, ctx.currentTime + 2);

      bgmNodes = [];
      const loopLen = BEAT * 16;

      function scheduleLoop(startT){
        const nodes = [];
        // chords (pads)
        CHORDS.forEach((chord, ci) => {
          chord.forEach(freq => {
            const osc = ctx.createOscillator();
            const g = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.value = freq * 0.5;
            const t = startT + ci * BEAT * 4;
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.18, t + 0.1);
            g.gain.setValueAtTime(0.18, t + BEAT*3.6);
            g.gain.linearRampToValueAtTime(0, t + BEAT*4);
            osc.connect(g); g.connect(bgmGain);
            osc.start(t); osc.stop(t + BEAT*4 + 0.1);
            nodes.push(osc);
          });
        });
        // melody
        MELODY.forEach((freq, i) => {
          if(!freq) return;
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.type = "square";
          osc.frequency.value = freq;
          const t = startT + i * BEAT * 0.5;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.12, t + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, t + BEAT*0.45);
          osc.connect(g); g.connect(bgmGain);
          osc.start(t); osc.stop(t + BEAT*0.5);
          nodes.push(osc);
        });
        // schedule next loop
        const timeout = setTimeout(() => scheduleLoop(startT + loopLen), (loopLen - 0.5) * 1000);
        bgmNodes.push(...nodes, { _timeout: timeout });
      }

      scheduleLoop(ctx.currentTime + 0.1);
    }

    function stopBGM(){
      if(!bgmNodes) return;
      if(bgmGain) bgmGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.5);
      bgmNodes.forEach(n => { if(n._timeout) clearTimeout(n._timeout); });
      setTimeout(() => { bgmNodes = null; }, 1600);
    }

    window.startBGM = startBGM;
    window.stopBGM  = stopBGM;

    // ── Volume toggle + vertical slider ─────────────────────────
    const volContainer = document.createElement("div");
    volContainer.style.cssText = `
      position:fixed; bottom:18px; right:18px; z-index:999;
      display:flex; flex-direction:column; align-items:center; gap:0;
    `;

    const sliderPanel = document.createElement("div");
    sliderPanel.style.cssText = `
      background:#2c1f14; border-radius:14px; padding:12px 10px 8px;
      display:flex; flex-direction:column; align-items:center; gap:6px;
      margin-bottom:6px;
      opacity:0; transform:translateY(8px) scale(0.95);
      pointer-events:none;
      transition:opacity .22s ease, transform .22s ease;
      box-shadow:0 4px 16px rgba(0,0,0,0.4);
      border:1px solid #4a3220;
    `;

    const volLabel = document.createElement("span");
    volLabel.style.cssText = `color:#f5f0e8;font-size:10px;font-family:monospace;`;
    volLabel.textContent = "100";

    const slider = document.createElement("input");
    slider.type = "range"; slider.min = "0"; slider.max = "100"; slider.value = "100"; slider.step = "1";
    slider.style.cssText = `
      writing-mode:vertical-lr; direction:rtl;
      width:20px; height:80px;
      accent-color:#f5f0e8; cursor:pointer;
    `;

    sliderPanel.appendChild(volLabel);
    sliderPanel.appendChild(slider);

    const muteBtn = document.createElement("button");
    muteBtn.innerHTML = "🔊";
    muteBtn.style.cssText = `
      background:#2c1f14; border:1px solid #4a3220; color:#f5f0e8;
      border-radius:50%; width:38px; height:38px;
      font-size:16px; cursor:pointer;
      box-shadow:0 2px 10px rgba(0,0,0,0.3);
      transition:opacity .2s; opacity:0.85;
      display:flex; align-items:center; justify-content:center;
    `;

    volContainer.appendChild(sliderPanel);
    volContainer.appendChild(muteBtn);
    document.body.appendChild(volContainer);

    function showPanel(){ sliderPanel.style.opacity="1"; sliderPanel.style.transform="translateY(0) scale(1)"; sliderPanel.style.pointerEvents="auto"; }
    function hidePanel(){ sliderPanel.style.opacity="0"; sliderPanel.style.transform="translateY(8px) scale(0.95)"; sliderPanel.style.pointerEvents="none"; }

    volContainer.addEventListener("mouseenter", showPanel);
    volContainer.addEventListener("mouseleave", hidePanel);

    slider.addEventListener("input", () => {
      const val = parseInt(slider.value);
      volume = val / 100;
      volLabel.textContent = val;
      muted = val === 0;
      muteBtn.innerHTML = val === 0 ? "🔇" : val < 40 ? "🔉" : "🔊";
      if(bgmGain && audioCtx) bgmGain.gain.setValueAtTime(0.35 * volume, audioCtx.currentTime);
    });

    muteBtn.addEventListener("click", () => {
      muted = !muted;
      if(muted){
        slider.value = "0"; volume = 0; volLabel.textContent = "0"; muteBtn.innerHTML = "🔇";
        if(bgmGain && audioCtx) bgmGain.gain.setValueAtTime(0, audioCtx.currentTime);
      } else {
        slider.value = "70"; volume = 0.7; volLabel.textContent = "70"; muteBtn.innerHTML = "🔊";
        if(bgmGain && audioCtx) bgmGain.gain.setValueAtTime(0.35 * volume, audioCtx.currentTime);
      }
    });
  })();
