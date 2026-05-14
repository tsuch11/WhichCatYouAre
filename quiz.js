const questions = [
      { q:"เวลาเครียดที่สุด คุณมักจะ…", image:"", opts:{A:"หายไปอยู่คนเดียว",B:"หาอะไรอร่อยกิน",C:"ระบายออกทันที",D:"หาใครสักคนอยู่ข้าง ๆ"} },
      { q:"ถ้ามีคนมาชมคุณต่อหน้า คุณจะ…", image:"", opts:{A:"เขินจนทำตัวไม่ถูก",B:"รับคำชมเต็มที่",C:"แกล้งกวนกลับ",D:"ทำเป็นไม่สนใจ"} },
      { q:"คุณชอบคนแบบไหนมากที่สุด", image:"", opts:{A:"คนอบอุ่น",B:"คนตลก",C:"คนลึกลับน่าค้นหา",D:"คนที่เข้าใจเราโดยไม่ต้องพูดเยอะ"} },
      { q:"ถ้าเลือกที่นอนในบ้านได้ คุณจะเลือก…", image:"", opts:{A:"เตียงนุ่ม ๆ",B:"ริมหน้าต่าง",C:"มุมแปลก ๆ ที่ไม่มีใครคิดถึง",D:"ใกล้คนที่รัก"} },
      { q:"ในกลุ่มเพื่อน คุณมักเป็น…", image:"", opts:{A:"คนเงียบแต่ฟังทุกอย่าง",B:"ตัวสร้างเสียงหัวเราะ",C:"คนชอบแกล้งคนอื่น",D:"คนคอยดูแลเพื่อน"} },
      { q:"ถ้ามีคนทำให้เสียใจ คุณจะ…", image:"", opts:{A:"เก็บไว้คนเดียว",B:"พยายามลืมเร็ว ๆ",C:"ประชดกลับ",D:"แอบร้องไห้ตอนอยู่คนเดียว"} },
      { q:"คุณชอบบรรยากาศแบบไหน", image:"", opts:{A:"ฝนตก เงียบ ๆ",B:"คาเฟ่คึกคัก",C:"กลางคืนและไฟเมือง",D:"บ้านที่มีคนรออยู่"} },
      { q:"ถ้าเป็นแมว คุณคิดว่าตัวเองจะ…", image:"", opts:{A:"นอนทั้งวัน",B:"วิ่งเล่นไม่หยุด",C:"เดินเชิด ๆ ไม่สนใคร",D:"ติดเจ้าของแจ"} },
      { q:"เวลาเริ่มชอบใคร คุณจะ…", image:"", opts:{A:"แอบมอง",B:"เข้าหาก่อน",C:"ชอบแกล้งเขา",D:"ดูแลแบบเนียน ๆ"} },
      { q:"คุณกลัวอะไรมากที่สุด", image:"", opts:{A:"การถูกทอดทิ้ง",B:"ความน่าเบื่อ",C:"การเสียศักดิ์ศรี",D:"การไม่มีใครเข้าใจ"} },
      { q:"ถ้ามีวันหยุด 1 วันเต็ม คุณจะ…", image:"", opts:{A:"นอนพัก",B:"ออกไปเที่ยว",C:"หาอะไรใหม่ ๆ ทำ",D:"ใช้เวลากับคนสำคัญ"} },
      { q:"ถ้าคนรักงอนคุณ คุณจะ…", image:"", opts:{A:"ง้อเงียบ ๆ",B:"ซื้อของอร่อยให้",C:"แกล้งหยอกจนเขาหายงอน",D:"กอดก่อนเลย"} },
    ];

    const mainResults = {
      A:{title:"แมวเปอร์เซีย",enTitle:"PERSIAN CAT",image:"assets/cats/persian.png",desc:"นิ่ง สุขุม มีโลกส่วนตัวสูง อ่อนโยนแต่เปิดใจยาก",explain:"คุณตัดสินใจจากความรู้สึกภายในมากกว่าความเร่งรีบภายนอก จึงต้องการความสัมพันธ์ที่มั่นคงและพื้นที่ปลอดภัย เมื่อไว้ใจใครแล้วจะดูแลแบบลึกและจริงใจมาก",stats:["อ่อนไหว","มั่นคง","ช่างคิด"],quote:"เงียบ...แต่รักจริงไม่เล่น",rarity:3,traits:["introvert","อ่อนไหว","รักความสงบ","ขี้คิด"]},
      B:{title:"แมวส้มจอมป่วน",enTitle:"ORANGE CAT",image:"assets/cats/orange.png",desc:"พลังงานสูง เข้ากับคนง่าย ขี้เล่นและใจดี",explain:"คุณเป็นคนส่งพลังบวกให้คนรอบตัวเก่ง มีความกล้าเริ่มบทสนทนาและชอบสร้างบรรยากาศสนุก ๆ แม้ภายนอกสดใส แต่ลึก ๆ ก็ต้องการคนที่รับฟังด้านอ่อนโยนของคุณเช่นกัน",stats:["ขี้เล่น","อบอุ่น","เฟรนด์ลี่"],quote:"ยิ้มไว้ก่อน เดี๋ยวทุกอย่างก็ดีขึ้น",rarity:2,traits:["social สูง","ตลก","ขี้อ้อน","กินเก่ง","ใจดี"]},
      C:{title:"แมวดำลึกลับ",enTitle:"BLACK CAT",image:"assets/cats/black.png",desc:"มีเสน่ห์น่าค้นหา ฉลาด ปกป้องตัวเองเก่ง",explain:"คุณอ่านสถานการณ์เก่งและเก็บรายละเอียดได้ไว จึงไม่ค่อยเปิดไพ่ทั้งหมดตั้งแต่แรก ภาพรวมดูนิ่งและคูล แต่จริง ๆ เป็นคนจริงจังกับความสัมพันธ์และให้คุณค่ากับความชัดเจนมาก",stats:["ลึกลับ","ฉลาด","คมชัด"],quote:"ไม่พูดเยอะ แต่มองลึกเสมอ",rarity:4,traits:["independent","ฉลาด","ปากแข็ง","มีเสน่ห์เงียบ ๆ"]},
      D:{title:"เมนคูนผู้ปกป้อง",enTitle:"MAINE COON",image:"assets/cats/mainecoon.png",desc:"อบอุ่น รักคนของตัวเอง ดูแลเก่งและจริงใจ",explain:"คุณชอบแสดงความรักผ่านการลงมือทำ เช่นดูแลรายละเอียดเล็ก ๆ และอยู่ข้างคนสำคัญในวันที่ยากที่สุด ภายนอกดูเข้มแข็ง แต่หัวใจลึก ๆ ต้องการการตอบรับที่อบอุ่นไม่แพ้กัน",stats:["เอาใจใส่","ซื่อสัตย์","จริงใจ"],quote:"ดูแลเธอ คือภาษารักของฉัน",rarity:3,traits:["loyal","caring","โรแมนติก","emotional ลึก"]},
    };

    const tieResults = {
      "A+C":{title:"สฟิงซ์ผู้ซ่อนหัวใจอ่อนไหว",enTitle:"SPHYNX CAT",image:"assets/cats/sphynx.png",desc:"นิ่ง เย็นชา แต่ลึก ๆ ต้องการความรัก",explain:"คุณมีทั้งความสงบแบบเก็บตัวและความคมชัดแบบสังเกตการณ์ จึงดูเข้าถึงยากในตอนแรก แต่เมื่อปลอดภัยพอจะเผยด้านอ่อนโยนและรักจริงแบบไม่ผิวเผิน",stats:["นิ่งลึก","อ่านคนเก่ง","แพชชั่นสูง"],quote:"ดูเฉย ๆ แต่ใจอ่อนกับคนพิเศษ",rarity:4,traits:["ลึกลับ","อ่อนไหว"]},
      "B+D":{title:"แร็กดอลล์แมวขี้อ้อน",enTitle:"RAGDOLL CAT",image:"assets/cats/ragdoll.png",desc:"ขี้อ้อน อบอุ่น เป็น safe zone ให้คนอื่น",explain:"คุณมีสมดุลระหว่างความสดใสกับความใส่ใจ ทำให้คนรอบตัวรู้สึกสบายใจเวลาอยู่ด้วย เป็นประเภทที่ทั้งสนุกและจริงใจ จึงสร้างความสัมพันธ์ระยะยาวได้ดี",stats:["ขี้อ้อน","ใจดี","น่าไว้ใจ"],quote:"ความนุ่มนวล คือพลังของฉัน",rarity:2,traits:["อบอุ่น","ติดคน"]},
      "B+C":{title:"เบงกอลนักผจญภัย",enTitle:"BENGAL CAT",image:"assets/cats/bengal.png",desc:"พลังงานสูง ฉลาด คาดเดายาก",explain:"คุณรวมความกล้าลุยกับความฉลาดเชิงกลยุทธ์ไว้ด้วยกัน ชอบลองสิ่งใหม่แต่ยังมีวิธีคิดของตัวเองชัดเจน เสน่ห์ของคุณคือความเป็นตัวเองที่ไม่จำเจ",stats:["กล้าลุย","ไวพริบดี","ครีเอทีฟ"],quote:"ฉันไม่ซ้ำใคร และภูมิใจกับสิ่งนั้น",rarity:5,traits:["ผจญภัย","ฉลาด"]},
      "A+D":{title:"บริติชชอร์ตแฮร์ผู้ดีแสนอบอุ่น",enTitle:"BRITISH SHORTHAIR",image:"assets/cats/british.png",desc:"นิ่ง สุภาพ จริงใจ แสดงรักผ่านการกระทำ",explain:"คุณไม่ได้แสดงออกหวือหวา แต่มั่นคงและใส่ใจในรายละเอียดของคนที่รักเสมอ คนอื่นอาจมองว่าคุณเงียบ แต่คนใกล้ชิดจะรู้ว่าคุณอบอุ่นและไว้ใจได้มาก",stats:["สุภาพ","มั่นคง","อบอุ่น"],quote:"ฉันไม่พูดเยอะ แต่ทำให้เห็นเสมอ",rarity:3,traits:["สุขุม","จริงใจ"]},
    };
    const crewMap = {
      A: [
        {name:"แมวดำลึกลับ", image:"assets/cats/black.png"},
        {name:"เมนคูนผู้ปกป้อง", image:"assets/cats/mainecoon.png"},
        {name:"บริติชชอร์ตแฮร์", image:"assets/cats/british.png"},
        {name:"แร็กดอลล์", image:"assets/cats/ragdoll.png"}
      ],
      B: [
        {name:"เบงกอล", image:"assets/cats/bengal.png"},
        {name:"แร็กดอลล์", image:"assets/cats/ragdoll.png"},
        {name:"เมนคูน", image:"assets/cats/mainecoon.png"},
        {name:"แมวเปอร์เซีย", image:"assets/cats/persian.png"}
      ],
      C: [
        {name:"สฟิงซ์", image:"assets/cats/sphynx.png"},
        {name:"เบงกอล", image:"assets/cats/bengal.png"},
        {name:"บริติชชอร์ตแฮร์", image:"assets/cats/british.png"},
        {name:"แมวเปอร์เซีย", image:"assets/cats/persian.png"}
      ],
      D: [
        {name:"แร็กดอลล์", image:"assets/cats/ragdoll.png"},
        {name:"แมวส้มจอมป่วน", image:"assets/cats/orange.png"},
        {name:"แมวเปอร์เซีย", image:"assets/cats/persian.png"},
        {name:"บริติชชอร์ตแฮร์", image:"assets/cats/british.png"}
      ],
      "A+C": [
        {name:"แมวดำลึกลับ", image:"assets/cats/black.png"},
        {name:"เบงกอล", image:"assets/cats/bengal.png"},
        {name:"สฟิงซ์", image:"assets/cats/sphynx.png"},
        {name:"แมวเปอร์เซีย", image:"assets/cats/persian.png"}
      ],
      "B+D": [
        {name:"แมวส้มจอมป่วน", image:"assets/cats/orange.png"},
        {name:"เมนคูน", image:"assets/cats/mainecoon.png"},
        {name:"แร็กดอลล์", image:"assets/cats/ragdoll.png"},
        {name:"บริติชชอร์ตแฮร์", image:"assets/cats/british.png"}
      ],
      "B+C": [
        {name:"เบงกอล", image:"assets/cats/bengal.png"},
        {name:"แมวดำลึกลับ", image:"assets/cats/black.png"},
        {name:"แมวส้มจอมป่วน", image:"assets/cats/orange.png"},
        {name:"สฟิงซ์", image:"assets/cats/sphynx.png"}
      ],
      "A+D": [
        {name:"บริติชชอร์ตแฮร์", image:"assets/cats/british.png"},
        {name:"เมนคูน", image:"assets/cats/mainecoon.png"},
        {name:"แมวเปอร์เซีย", image:"assets/cats/persian.png"},
        {name:"แร็กดอลล์", image:"assets/cats/ragdoll.png"}
      ]
    };
    const fallbackImage = "634416222_946939267760313_225817689217806069_n.jpg";

    const qNo = document.getElementById("qNo");
    const qTitle = document.getElementById("qTitle");
    const qImage = document.getElementById("qImage");
    const options = document.getElementById("options");
    const landing = document.getElementById("landing");
    const startBtn = document.getElementById("startBtn");
    const quizHead = document.getElementById("quizHead");
    const backBtn = document.getElementById("backBtn");

    function showSection(el){
      el.style.display = "block";
      el.classList.remove("page-hidden");
      void el.offsetWidth; // force reflow
      el.classList.add("page-visible");
    }
    function hideSection(el, cb){
      el.classList.remove("page-visible");
      el.classList.add("page-hidden");
      setTimeout(() => {
        el.style.display = "none";
        el.classList.remove("page-hidden");
        if(cb) cb();
      }, 350);
    }
    const nextBtn = document.getElementById("nextBtn");
    const bar = document.getElementById("bar");
    const result = document.getElementById("result");
    const quizCard = document.getElementById("quizCard");
    const mainWrap = document.getElementById("mainWrap");

    const answers = Array(questions.length).fill(null);
    let current = 0;
    let isTransitioning = false;
    let playerName = "";

    // ── Intro: ถามชื่อ ──
    startBtn.addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      landing.style.display = "none";
      document.getElementById("introStory").style.display = "flex";
      if(window.startBGM) window.startBGM();
    });

    document.getElementById("introStoryBtn").addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      document.getElementById("introStory").style.display = "none";
      document.getElementById("introName").style.display = "flex";
      setTimeout(() => document.getElementById("nameInput").focus(), 300);
    });

    const nameInput = document.getElementById("nameInput");
    const introNextBtn = document.getElementById("introNextBtn");
    nameInput.addEventListener("input", () => {
      introNextBtn.disabled = nameInput.value.trim().length === 0;
    });
    nameInput.addEventListener("keydown", (e) => {
      if(e.key === "Enter" && nameInput.value.trim().length > 0) introNextBtn.click();
    });
    introNextBtn.addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      playerName = nameInput.value.trim();
      document.getElementById("introName").style.display = "none";
      document.getElementById("greetName").textContent = playerName;
      document.getElementById("introGreet").style.display = "flex";
    });

    // ── Intro 2: ทักทาย → หน้าถัดไป ──
    document.getElementById("introGreetBtn").addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      document.getElementById("introGreet").style.display = "none";
      document.getElementById("introGreet2").style.display = "flex";
    });

    // ── Intro 3: ว่ากันว่า → หน้าถัดไป ──
    document.getElementById("introGreet2Btn").addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      document.getElementById("introGreet2").style.display = "none";
      document.getElementById("introGreet3").style.display = "flex";
    });

    // ── bounce handler สำหรับแมวดำใน intro ──
    function makeIntroCatClickable(id){
      const cat = document.getElementById(id);
      if(!cat) return;
      cat.addEventListener("click", () => {
        cat.style.animation = "none";
        void cat.offsetWidth;
        cat.style.animation = "popupCatBounce 0.45s cubic-bezier(.36,.07,.19,.97) both";
        cat.addEventListener("animationend", () => {
          cat.style.animation = "pawBounce 1.6s ease-in-out infinite";
        }, {once:true});
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = "sawtooth";
          o.frequency.setValueAtTime(1200, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.2);
          g.gain.setValueAtTime(0.22, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 0.25);
        } catch(e){}
      });
    }
    makeIntroCatClickable("introCat0");
    makeIntroCatClickable("introCat1");
    makeIntroCatClickable("introCat2");
    makeIntroCatClickable("introCat3");
    makeIntroCatClickable("introCat4");

    // ── Intro 4: ปูเรื่อง → เริ่ม quiz ──
    document.getElementById("introStartBtn").addEventListener("click", () => {
      if(window.sfx8bit) window.sfx8bit();
      const shuffled = shuffleArray(questions);
      questions.splice(0, questions.length, ...shuffled);
      document.getElementById("introGreet3").style.display = "none";
      mainWrap.classList.remove("wrap-landing");
      mainWrap.classList.add("wrap");
      quizHead.style.display = "block";
      quizCard.style.display = "block";
      renderQuestion();
    });

    function shuffleArray(arr){
      const a = [...arr];
      for(let i = a.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function renderQuestion(){
      const item = questions[current];
      qNo.textContent = `ข้อ ${current + 1} จาก ${questions.length}`;
      qTitle.textContent = item.q;

      bar.style.width = `${((current + 1) / questions.length) * 100}%`;

      if(item.image){
        qImage.src = item.image;
        qImage.classList.add("show");
      } else {
        qImage.src = "";
        qImage.classList.remove("show");
      }

      options.innerHTML = Object.entries(item.opts).map(([k,v]) => `
        <button class="opt" data-choice="${k}">
          <span>${v}</span>
        </button>
      `).join("");
      quizCard.classList.remove("question-exit");
      quizCard.classList.remove("question-anim");
      requestAnimationFrame(() => quizCard.classList.add("question-anim"));

      backBtn.disabled = current === 0;
      backBtn.style.visibility = current === 0 ? "hidden" : "visible";
      highlightSelected();
    }

    function highlightSelected(){
      const selected = answers[current];
      document.querySelectorAll(".opt").forEach(btn => {
        btn.style.borderColor = "";
        btn.style.background = "";
        btn.style.color = "";
        btn.classList.toggle("selected", btn.dataset.choice === selected);
      });
    }

    options.addEventListener("click",(e)=>{
      const btn = e.target.closest(".opt");
      if(!btn || isTransitioning) return;
      isTransitioning = true;
      if(window.sfxClick) window.sfxClick();
      answers[current] = btn.dataset.choice;
      // bounce animation
      document.querySelectorAll(".opt").forEach(b => b.classList.remove("bounce"));
      highlightSelected();
      requestAnimationFrame(() => {
        btn.classList.add("bounce");
        btn.addEventListener("animationend", () => btn.classList.remove("bounce"), {once:true});
      });
      quizCard.classList.remove("question-anim");
      quizCard.classList.add("question-exit");
      setTimeout(() => {
        if(current < questions.length - 1){
          current++;
          if(window.sfxTransition) window.sfxTransition();
          renderQuestion();
          isTransitioning = false;
        } else {
          if(window.sfxTransition) window.sfxTransition();
          if(window.stopBGM) window.stopBGM();
          showResult();
          isTransitioning = false;
        }
      }, 280);
    });

    backBtn.addEventListener("click",()=>{
      if(current > 0){
        current--;
        renderQuestion();
      }
    });

    function showResult(){
      const score = {A:0,B:0,C:0,D:0};
      answers.forEach(a=>score[a]++);

      const sorted = Object.entries(score).sort((a,b)=>b[1]-a[1]);
      const [topKey, topScore] = sorted[0];
      const secondScore = sorted[1][1];

      let out;
      let resultKey;
      if(topScore === secondScore){
        const pair = [sorted[0][0], sorted[1][0]].sort().join("+");
        out = tieResults[pair] || mainResults[topKey];
        resultKey = tieResults[pair] ? pair : topKey;
      } else {
        out = mainResults[topKey];
        resultKey = topKey;
      }

      const stars = "★".repeat(out.rarity || 3);
      const crew = (crewMap[resultKey] || crewMap[topKey] || []).slice(0, 3).map(cat => `
        <div class="crew-item">
          <img src="${cat.image}" alt="${cat.name}" onerror="this.src='${fallbackImage}'">
          <div>${cat.name}</div>
        </div>
      `).join("");
      const stats = (out.stats || out.traits || []).slice(0,3).map(stat => `
        <div class="stat">${stat}</div>
      `).join("");

      hideSection(quizCard, () => {
        quizHead.style.display = "none";
      });

      // show retro popup first
      const popup = document.getElementById("catPopup");
      popup.style.display = "flex";
      if(window.sfxCelebrate) window.sfxCelebrate();
      document.getElementById("popupOkBtn").onclick = () => {
        popup.style.display = "none";
        if(window.sfxStarCollect) window.sfxStarCollect();
        showSection(result);
        if(window.triggerSparkle) window.triggerSparkle(document.querySelector('.result-card'));
      };

      // click แมวใน popup → เสียง surprise + bounce
      const popupCat = document.getElementById("popupCatSvg");
      popupCat.onclick = () => {
        // bounce animation
        popupCat.classList.remove("cat-bounce");
        void popupCat.offsetWidth;
        popupCat.classList.add("cat-bounce");
        popupCat.addEventListener("animationend", () => popupCat.classList.remove("cat-bounce"), {once:true});
        // surprise sound
        try {
          const ctx = new (window.AudioContext || window.webkitAudioContext)();
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = "sawtooth";
          o.frequency.setValueAtTime(1200, ctx.currentTime);
          o.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.2);
          g.gain.setValueAtTime(0.22, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
          o.connect(g); g.connect(ctx.destination);
          o.start(); o.stop(ctx.currentTime + 0.25);
        } catch(e){}
      };
      result.innerHTML = `
        <div class="result-card">
          <div class="result-titlebar">
            <div class="result-titlebar-left">
              <div class="result-titlebar-btn">□</div>
            </div>
            <div style="display:flex;gap:3px;">
              <div class="result-titlebar-btn">－</div>
              <div class="result-titlebar-btn">✕</div>
            </div>
          </div>
          <div class="result-img-wrap">
            <img class="result-image" src="${out.image || fallbackImage}" alt="${out.title}" onerror="this.src='${fallbackImage}'">
          </div>
          <div class="result-body">
            <div class="result-head">
              ${playerName ? `<h2 class="result-title" style="font-size:clamp(16px,5vw,26px);margin-bottom:2px;">${playerName}</h2>` : ''}
              <h2 class="result-title" id="resultTitle" style="font-size:clamp(18px,6vw,30px);">คุณคือ${out.title}</h2>
              <p class="result-subtitle">${out.enTitle || "CAT PERSONALITY"}</p>
            </div>
            <p class="result-desc">${out.desc}</p>
            <div class="result-explain">${out.explain}</div>
            <div class="result-stats">${stats}</div>
            <div class="result-quote">"${out.quote || "นี่แหละตัวตนแมวในแบบคุณ"}"</div>
            <button class="retry-btn" id="retryBtn">ลองอีกครั้ง</button>
          </div>
        </div>
      `;
      const retryBtn = document.getElementById("retryBtn");
      if (retryBtn) {
        retryBtn.addEventListener("click", () => {
        if(window.sfx8bit) window.sfx8bit();
        resetQuiz();
      });
      }
    }

    function resetQuiz(){
      const shuffled = shuffleArray(questions);
      questions.splice(0, questions.length, ...shuffled);
      answers.fill(null);
      current = 0;
      hideSection(result, () => {
        quizHead.style.display = "block";
        showSection(quizCard);
      });
      if(window.startBGM) window.startBGM();
      renderQuestion();
    }
