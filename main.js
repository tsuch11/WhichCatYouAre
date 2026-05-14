// ── quiz.js ──────────────────────────────────
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

// ── particles.js ──────────────────────────────────
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

// ── audio.js ──────────────────────────────────
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

// ── sparkle.js ──────────────────────────────────
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
