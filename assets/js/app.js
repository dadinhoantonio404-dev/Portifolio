
        let isJoined = false;
        let currentTab = 'post';
        let currentFilter = 'latest';

        function switchTab(tab) {
            currentTab = tab;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');

            const postContent = document.getElementById('postContent');
            const introductionContent = document.getElementById('introductionContent');

            if (tab === 'introduction') {
                postContent.style.display = 'none';
                introductionContent.style.display = 'block';
            } else {
                postContent.style.display = 'block';
                introductionContent.style.display = 'none';
            }
        }

        function filterPosts(filter) {
            currentFilter = filter;
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            event.target.classList.add('active');
        }

        function loadPosts() {
        }

        function openJoinModal() {
            if (isJoined) {
                showNotification('Você já se juntou a esta comunidade!');
                return;
            }
            document.getElementById('joinModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('joinModal').classList.remove('active');
        }

        function confirmJoin() {
            isJoined = true;
            const joinBtn = document.getElementById('joinBtn');
            joinBtn.textContent = 'Juntou-se';
            joinBtn.classList.add('joined');
            joinBtn.onclick = null;
            closeModal();
            showNotification('Juntou-se ao Lounge do Cliente com sucesso! 🎉');
        }

        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            notificationText.textContent = message;
            notification.classList.add('active');

            setTimeout(() => {
                notification.classList.remove('active');
            }, 3000);
        }

        document.getElementById('joinBtn').onclick = openJoinModal;


        const contentData = [
            {
                title: "Fingrow: Gestão financeira inteligente com análise preditiva de fluxo de caixa.",
                linkText: "Ver Documentação no GitHub"
            },
            {
                title: "Arquitetura escalável utilizando microserviços para garantir 99.9% de uptime.",
                linkText: "Explorar Stack Técnica"
            },
            {
                title: "Segurança de ponta: Implementação de protocolos de criptografia e auditoria real-time.",
                linkText: "Solicitar Demo"
            },
            {
                title: "Um cartão de crédito transparente, sem anuidade e com limite ajustável.",
                linkText: "Peça seu cartão"
            }
        ];

        const cards = document.querySelectorAll('.card');
        const indicators = document.querySelectorAll('.indicator');
        const textContainer = document.getElementById('textContent');
        const descTitle = document.getElementById('descTitle');
        const descLink = document.getElementById('descLink');
        const toggleBtn = document.getElementById('toggleBtn');
        const iconPause = document.getElementById('icon-pause');
        const iconPlay = document.getElementById('icon-play');

        let currentIndex = 0;
        let isPlaying = true;
        let intervalId;
        const INTERVAL_TIME = 3000; 

        function updateCarousel(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            indicators.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            textContainer.classList.add('fade-out');

            setTimeout(() => {
                descTitle.innerText = contentData[index].title;
                descLink.innerHTML = `${contentData[index].linkText} <svg viewBox="0 0 10 16"><path d="M2.28564 14.5716L1.14278 13.4287L6.57136 8.00018L1.14278 2.57161L2.28564 1.42875L8.85707 8.00018L2.28564 14.5716Z"/></svg>`;
                textContainer.classList.remove('fade-out');
            }, 300); 
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCarousel(currentIndex);
        }

        function startAutoPlay() {
            if (intervalId) clearInterval(intervalId);
            intervalId = setInterval(nextSlide, INTERVAL_TIME);
            isPlaying = true;
            iconPause.style.display = 'block';
            iconPlay.style.display = 'none';
        }

        function stopAutoPlay() {
            clearInterval(intervalId);
            isPlaying = false;
            iconPause.style.display = 'none';
            iconPlay.style.display = 'block';
        }

        toggleBtn.addEventListener('click', () => {
            if (isPlaying) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });

        function manualSelect(index) {
            currentIndex = index;
            updateCarousel(currentIndex);
            if (isPlaying) startAutoPlay();
        }

        startAutoPlay();

        
