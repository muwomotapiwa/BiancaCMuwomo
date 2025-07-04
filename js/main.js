// Main JavaScript for Bianca Charuma Portfolio

document.addEventListener('DOMContentLoaded', function () {
    
    
    // Professional Experience Data
    const professionalExperience = [
        {
            role: "Financial Inclusion and Gender Officer",
            company: "ActionAid International",
            dates: "Mar 2021 - Sep 2023",
            project: "Zimbabwe Resilience Building Fund Project (UNDP Funded)",
            achievements: [
                "Spearheaded comprehensive financial inclusion and wellbeing programs across <span class='font-semibold'>8 rural districts</span> in Zimbabwe, directly increasing the resilience of vulnerable populations.",
                "Managed grant portfolios <span class='font-semibold'>valued at over $1.5 million</span>, empowering <span class='font-semibold'>50+ women's groups, 30+ SMEs, and numerous youth organizations</span>.",
                "Delivered impactful financial literacy workshops to <span class='font-semibold'>over 5,000 participants</span> on money management, budgeting, savings, and debt management.",
                "Fostered relationships with <span class='font-semibold'>15+ grassroots organizations</span>, ensuring programmatic alignment with gender-sensitive and feminist principles.",
                "Provided technical support to <span class='font-semibold'>45 grantee partners</span>, including proposal development, capacity-building, and reporting compliance, leading to <span class='font-semibold'>95% compliance rate</span> with donor requirements."
            ],
            donors: ["UNDP"]
        },
        {
            role: "Rural Finance Officer",
            company: "Steward Bank",
            dates: "Oct 2018 - Dec 2020",
            project: "Livelihoods and Food Security Programme (FAO)",
            achievements: [
                "Empowered <span class='font-semibold'>over 10,000 rural community members</span> with financial literacy and market access, supporting sustainable income generation and economic independence.",
                "Facilitated <span class='font-semibold'>over 100 business management sessions</span> for Village Savings and Lending Associations (VSLA), reaching <span class='font-semibold'>200+ VSLAs</span>.",
                "Conducted <span class='font-semibold'>50+ pre-award assessments and financial analyses</span> for sub-grantees and SMEs.",
                "Developed gender-responsive approaches to build the capacity of <span class='font-semibold'>over 1,500 smallholder farmers and entrepreneurs</span>.",
                "Collaborated with diverse stakeholders, including <span class='font-semibold'>10+ community-based organizations</span>, to amplify local voices and foster systemic change."
            ],
            donors: ["FAO"]
        },
        {
            role: "Financial Literacy Trainer",
            company: "SNV Netherlands Development",
            dates: "Feb 2018 - Jul 2018",
            project: "VUNA Goat Value Chain and Climate Smart Project (EU)",
            achievements: [
                "Designed and delivered targeted training on financial planning and digital financial services for <span class='font-semibold'>over 800 smallholder farmers</span>.",
                "Trained <span class='font-semibold'>30+ women and youth groups</span> in loan portfolio management, grant management, and proposal writing to access funding for economic empowerment.",
                "Advocated for inclusive practices, integrating feminist approaches to ensure equitable access to resources, resulting in <span class='font-semibold'>increased participation of women by 30%</span> in financial programs.",
                "Managed beneficiary funding portfolios, ensuring strict compliance with donor requirements for <span class='font-semibold'>over 20 projects</span>."
            ],
            donors: ["European Union (EU)"]
        },
        {
            role: "Project Officer",
            company: "SNV Netherlands Development Organisation",
            dates: "Mar 2014 - Dec 2017",
            project: "Rural Finance Project (FAO)",
            achievements: [
                "Significantly improved value chain development and access to finance for <span class='font-semibold'>over 200 women and youth entrepreneurs</span> in remote districts.",
                "Managed extensive grant and loan portfolios <span class='font-semibold'>totaling $2 million</span>, ensuring stringent compliance with diverse donor requirements.",
                "Held primary responsibility for the Matching Grant Facility, from prescreening and eligibility assessments to disbursement and monitoring for <span class='font-semibold'>over 100 grantees</span>.",
                "Designed and implemented <span class='font-semibold'>5 participatory development projects</span> to address systemic barriers to financial inclusion.",
                "Strengthened feminist networks by promoting women entrepreneurship and establishing market linkages for <span class='font-semibold'>70+ women-led enterprises</span>."
            ],
            donors: ["FAO"]
        }
    ];

    // Case Studies Data
    const caseStudies = [
        {
            title: "Building Resilience in Rural Zimbabwe",
            organization: "ActionAid International (UNDP Funded)",
            challenge: "Vulnerable rural populations in Zimbabwe faced significant economic instability and limited access to financial tools, hindering their ability to withstand economic shocks and build sustainable futures.",
            action: "I led the design and implementation of comprehensive financial inclusion and wellbeing programs. This involved developing and delivering tailored financial literacy workshops to over 5,000 participants, establishing and managing grant portfolios valued at over $1.5 million for women, youth, and SMEs, and fostering deep partnerships with grassroots organizations to ensure a gender-sensitive and intersectional approach. I also provided technical guidance in entrepreneurship and market linkages.",
            outcome: "Successfully increased the economic resilience of thousands of individuals. Empowered local communities with practical financial skills, improved access to capital through well-managed grants, and created a more inclusive financial ecosystem aligned with feminist principles. The project saw a <span class='font-semibold'>25% increase in household savings</span> and <span class='font-semibold'>15% growth in women-led enterprises</span>."
        },
        {
            title: "Empowering Farmers via Value Chains",
            organization: "SNV (EU Funded)",
            challenge: "Smallholder farmers within the goat value chain lacked the financial literacy and planning skills necessary to capitalize on market opportunities and improve their financial stability.",
            action: "As a Financial Literacy Trainer, I created and conducted highly targeted training sessions focused on budgeting, financial planning, proposal writing, and accessing digital financial services for over 800 smallholder farmers. I specifically worked with 30+ women and youth groups, advocating for feminist approaches to ensure equitable access to all resources and managing beneficiary funding portfolios to ensure compliance.",
            outcome: "Equipped farmers with foundational financial skills, enabling better personal and business finance management. This led to improved access to funding, greater participation in economic activities, and enhanced financial stability for participants and their families. We observed a <span class='font-semibold'>20% increase in farmer incomes</span> and <span class='font-semibold'>40% adoption rate of digital financial services</span> among trained participants."
        },
        {
            title: "Dismantling Barriers to Rural Finance",
            organization: "SNV (FAO Funded)",
            challenge: "Systemic barriers in remote districts prevented women and youth entrepreneurs from accessing the finance and market linkages needed to grow their agribusinesses.",
            action: "As a Project Officer, I designed participatory projects to directly address these barriers. I managed the full lifecycle of a Matching Grant Facility, overseeing disbursements for over 100 grantees and supporting entrepreneurs in developing business plans. I actively built networks to connect them with markets and financing, and a key focus was strengthening feminist networks to promote 70+ women-led enterprises.",
            outcome: "Dramatically improved value chain development and financial access for marginalized entrepreneurs. My work in managing grant/loan portfolios totaling $2 million and fostering partnerships created a more robust and inclusive economic environment, contributing to long-term sustainable livelihoods. This resulted in a <span class='font-semibold'>35% increase in market linkages</span> for supported businesses and a <span class='font-semibold'>significant reduction in financial exclusion</span> in target areas."
        }
    ];

    // Scroll Progress Indicator
    function initializeScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #f59e0b, #d97706);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // Enhanced Mobile Menu with Swipe Gestures
    function initializeMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        let startY = 0;
        let currentY = 0;
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Add animation class
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.style.animation = 'slideDown 0.3s ease-out';
            }
        });
        
        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.animation = 'slideUp 0.3s ease-out';
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            });
        });

        // Touch gestures for mobile menu
        mobileMenu.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        mobileMenu.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = startY - currentY;
            if (diff > 50) { // Swipe up to close
                mobileMenu.style.animation = 'slideUp 0.3s ease-out';
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
            }
        });

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize Timeline with Enhanced Mobile Support
    function initializeTimeline() {
        const timelineContainer = document.getElementById('timeline-container');
        
        professionalExperience.forEach((job, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item cursor-pointer';
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <p class="text-sm text-slate-500">${job.dates}</p>
                <h3 class="text-xl font-bold text-slate-700">${job.role} <span class="text-slate-400 text-lg ml-2">&#9660;</span></h3>
                <p class="font-semibold text-slate-600">${job.company}</p>
                <div class="details-pane mt-4 pr-4">
                    <p class="font-semibold text-amber-600 mb-2">Project: ${job.project}</p>
                    <ul class="list-disc pl-5 space-y-2 text-slate-600">
                        ${job.achievements.map(ach => `<li>${ach}</li>`).join('')}
                    </ul>
                    ${job.donors && job.donors.length > 0 ? `<p class="font-semibold text-slate-700 mt-4">Key Donor(s): <span class="text-blue-600">${job.donors.join(', ')}</span></p>` : ''}
                </div>
            `;
            timelineContainer.appendChild(item);

            // Enhanced click/touch event listener
            const handleToggle = () => {
                // Close other items
                document.querySelectorAll('.timeline-item').forEach(el => {
                    if(el !== item) {
                        el.classList.remove('active');
                        el.querySelector('.details-pane').classList.remove('open');
                        el.querySelector('h3 span').innerHTML = '&#9660;';
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                item.querySelector('.details-pane').classList.toggle('open');
                
                // Toggle arrow direction
                const arrowSpan = item.querySelector('h3 span');
                if (item.classList.contains('active')) {
                    arrowSpan.innerHTML = '&#9650;'; // Up arrow
                    // Scroll to item on mobile
                    if (window.innerWidth <= 768) {
                        setTimeout(() => {
                            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 100);
                    }
                } else {
                    arrowSpan.innerHTML = '&#9660;'; // Down arrow
                }
            };

            item.addEventListener('click', handleToggle);
            item.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleToggle();
            });
        });
    }

    // Initialize Case Studies with Lazy Loading
    function initializeCaseStudies() {
        const caseStudiesContainer = document.getElementById('case-studies-container');
        
        caseStudies.forEach((study, index) => {
            const card = document.createElement('div');
            card.className = 'bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer case-study-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.innerHTML = `
                <h4 class="text-xl font-bold text-slate-800 mb-2">${study.title}</h4>
                <p class="text-slate-500 mb-4">${study.organization}</p>
                <p class="text-slate-600">Discover how strategic financial inclusion initiatives led to tangible increases in community resilience and empowerment.</p>
                <p class="mt-4 font-semibold text-amber-600">Read Impact Story &rarr;</p>
            `;
            caseStudiesContainer.appendChild(card);

            // Lazy loading animation
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);

            // Enhanced click/touch event listener
            const handleCardClick = () => {
                // Add haptic feedback on mobile
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
                openModal(study);
            };

            card.addEventListener('click', handleCardClick);
            card.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleCardClick();
            });
        });
    }

    // Enhanced Modal with Swipe to Close
    function initializeModal() {
        const modal = document.getElementById('case-study-modal');
        const closeModalButton = document.getElementById('close-modal-button');
        const modalBody = document.getElementById('modal-body');
        let startY = 0;
        let currentY = 0;

        // Close modal function
        function closeModal() {
            modal.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
        }

        // Open modal function with enhanced animations
        window.openModal = function(study) {
            modalBody.innerHTML = `
                <h3 class="text-3xl font-bold text-slate-800 mb-2">${study.title}</h3>
                <p class="text-slate-500 mb-6">${study.organization}</p>
                <div class="space-y-4 text-slate-700">
                    <div class="modal-section" style="opacity: 0; transform: translateY(20px);">
                        <h4 class="text-xl font-semibold text-amber-600 mb-1">The Challenge</h4>
                        <p>${study.challenge}</p>
                    </div>
                    <div class="modal-section" style="opacity: 0; transform: translateY(20px);">
                        <h4 class="text-xl font-semibold text-amber-600 mb-1">My Action</h4>
                        <p>${study.action}</p>
                    </div>
                     <div class="modal-section" style="opacity: 0; transform: translateY(20px);">
                        <h4 class="text-xl font-semibold text-amber-600 mb-1">The Outcome</h4>
                        <p>${study.outcome}</p>
                    </div>
                </div>
            `;
            modal.style.display = 'flex';
            document.body.classList.add('overflow-hidden');

            // Animate modal sections
            const sections = modalBody.querySelectorAll('.modal-section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 150);
            });
        };

        // Touch gestures for modal
        modal.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        modal.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = currentY - startY;
            if (diff > 100) { // Swipe down to close
                closeModal();
            }
        });

        // Event listeners
        closeModalButton.addEventListener('click', closeModal);
        
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // Enhanced Counter Animation with Intersection Observer
    function initializeCounters() {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = +el.getAttribute('data-target');
                    let current = 0;
                    const increment = target / 60; // Slower animation
                    const duration = 2000; // 2 seconds
                    const stepTime = duration / 60;

                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            el.innerText = Math.ceil(current);
                            setTimeout(updateCounter, stepTime);
                        } else {
                            el.innerText = target;
                            // Add completion animation
                            el.style.transform = 'scale(1.1)';
                            setTimeout(() => {
                                el.style.transform = 'scale(1)';
                            }, 200);
                        }
                    };
                    updateCounter();
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('[data-target]').forEach(el => {
            el.style.transition = 'transform 0.2s ease';
            counterObserver.observe(el);
        });
    }

    // Enhanced Chart with Responsive Design
    function initializeChart() {
        const competencyData = {
            labels: [
                'Grant Admin & Portfolio Mgt', 
                'Financial Inclusion & Literacy', 
                'Livelihoods & Econ. Empowerment', 
                'Gender Equity & Mainstreaming', 
                'Stakeholder Engagement', 
                'Capacity Building & Training',
                'Program M&E / RBM'
            ],
            datasets: [{
                label: 'Level of Expertise',
                data: [5, 5, 5, 5, 4, 5, 4],
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderColor: 'rgba(245, 158, 11, 1)',
                pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(245, 158, 11, 1)',
                borderWidth: 2,
                pointRadius: window.innerWidth <= 768 ? 4 : 6,
                pointHoverRadius: window.innerWidth <= 768 ? 6 : 8
            }]
        };

        const competencyChartCtx = document.getElementById('competencyChart').getContext('2d');
        const chart = new Chart(competencyChartCtx, {
            type: 'radar',
            data: competencyData,
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(30, 41, 59, 0.1)' },
                        grid: { color: 'rgba(30, 41, 59, 0.1)' },
                        pointLabels: { 
                            font: { 
                                size: window.innerWidth <= 768 ? 10 : 12, 
                                weight: '500' 
                            },
                            color: '#334155'
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            stepSize: 1,
                            display: false
                        },
                        min: 0,
                        max: 5
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const descriptions = [
                                    "End-to-end grant lifecycle management, including pre-award assessments, financial analysis, and budget tracking.",
                                    "Designing & delivering impactful financial education workshops (budgeting, savings, debt management, digital tools).",
                                    "Fostering sustainable income generation, entrepreneurship, and market linkages for vulnerable populations.",
                                    "Integrating feminist principles and gender-transformative approaches into program design and implementation.",
                                    "Building strong partnerships with diverse stakeholders (donors, NGOs, community leaders) for systemic change.",
                                    "Providing expert technical guidance, capacity-building workshops, and one-on-one coaching.",
                                    "Ensuring accountability with robust M&E frameworks (RBM, Theory of Change) and comprehensive reporting."
                                ];
                                return descriptions[context.dataIndex];
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart'
                }
            }
        });

        // Responsive chart updates
        window.addEventListener('resize', () => {
            chart.options.scales.r.pointLabels.font.size = window.innerWidth <= 768 ? 10 : 12;
            chart.data.datasets[0].pointRadius = window.innerWidth <= 768 ? 4 : 6;
            chart.data.datasets[0].pointHoverRadius = window.innerWidth <= 768 ? 6 : 8;
            chart.update();
        });
    }

    // Enhanced Smooth Scrolling with Offset for Fixed Header
    function initializeSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced Active Navigation with Mobile Support
    function initializeActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerHeight = document.querySelector('header').offsetHeight;

        function updateActiveLink() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - headerHeight - 50;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateActiveLink();
                    ticking = false;
                });
                ticking = true;
            }
        });
        updateActiveLink(); // Call once on load
    }

    // Performance Optimization: Debounced Resize Handler
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Initialize all components
    initializeScrollProgress();
    initializeTimeline();
    initializeCaseStudies();
    initializeModal();
    initializeMobileMenu();
    initializeCounters();
    initializeChart();
    initializeSmoothScrolling();
    initializeActiveNavigation();

    // Enhanced fade-in animation with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        fadeObserver.observe(section);
    });

    // Add loading state management
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        console.log('Bianca Charuma Portfolio - All components initialized successfully!');
    });

    // Add error handling for chart
    window.addEventListener('error', (e) => {
        if (e.target.id === 'competencyChart') {
            console.warn('Chart failed to load, hiding chart container');
            document.querySelector('.chart-container').style.display = 'none';
        }
    });
});

