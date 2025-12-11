/**
 * ============================================
 * LGC (Let's Get Connect) - Portfolio Website
 * Main JavaScript File
 * ============================================
 * 
 * This file contains:
 * 1. Team member data array (easy to update)
 * 2. Dynamic team card rendering function
 * 3. Mobile hamburger menu functionality
 * 4. Smooth scroll and navigation helpers
 * 
 * For beginners: Each section is well-commented
 * to help you understand and modify the code.
 */


// ============================================
// SECTION 1: TEAM MEMBER DATA
// ============================================
/**
 * Team Members Array
 * ------------------
 * This array stores all team member information.
 * To add a new member, simply add a new object with:
 * - name: Full name of the member
 * - photo: URL to profile photo (use placeholder if no photo)
 * - role: Their position/role in the group
 * - interests: Array of their technical interests/skills
 * 
 * TIP: You can easily update this data without touching HTML!
 */
const teamMembers = [
    {
        name: "Alex Johnson",
        photo: "https://ui-avatars.com/api/?name=Alex+Johnson&background=2563eb&color=fff&size=200",
        role: "Team Lead",
        interests: ["Full Stack Development", "Cloud Computing", "Team Management"]
    },
    {
        name: "Sarah Chen",
        photo: "https://ui-avatars.com/api/?name=Sarah+Chen&background=1e40af&color=fff&size=200",
        role: "Frontend Developer",
        interests: ["React", "UI/UX Design", "CSS Animations"]
    },
    {
        name: "Michael Park",
        photo: "https://ui-avatars.com/api/?name=Michael+Park&background=3b82f6&color=fff&size=200",
        role: "Backend Developer",
        interests: ["Node.js", "Python", "Database Design"]
    },
    {
        name: "Emily Rodriguez",
        photo: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=2563eb&color=fff&size=200",
        role: "AI/ML Specialist",
        interests: ["Machine Learning", "TensorFlow", "Data Science"]
    },
    {
        name: "David Kim",
        photo: "https://ui-avatars.com/api/?name=David+Kim&background=1e40af&color=fff&size=200",
        role: "Mobile Developer",
        interests: ["React Native", "Flutter", "iOS Development"]
    },
    {
        name: "Jessica Thompson",
        photo: "https://ui-avatars.com/api/?name=Jessica+Thompson&background=3b82f6&color=fff&size=200",
        role: "DevOps Engineer",
        interests: ["Docker", "Kubernetes", "CI/CD Pipelines"]
    },
    {
        name: "Ryan Patel",
        photo: "https://ui-avatars.com/api/?name=Ryan+Patel&background=2563eb&color=fff&size=200",
        role: "Security Analyst",
        interests: ["Cybersecurity", "Penetration Testing", "Network Security"]
    },
    {
        name: "Amanda Liu",
        photo: "https://ui-avatars.com/api/?name=Amanda+Liu&background=1e40af&color=fff&size=200",
        role: "UI/UX Designer",
        interests: ["Figma", "User Research", "Design Systems"]
    }
];


// ============================================
// SECTION 2: DYNAMIC TEAM CARD RENDERING
// ============================================
/**
 * Renders team member cards to the DOM
 * ------------------------------------
 * This function takes the teamMembers array and creates
 * HTML cards for each member, then inserts them into
 * the team-container element.
 * 
 * How it works:
 * 1. Finds the container element by ID
 * 2. Loops through each team member
 * 3. Creates HTML for each card
 * 4. Appends all cards to the container
 */
function renderTeamCards() {
    // Get the container where cards will be inserted
    const container = document.getElementById('team-container');
    
    // Check if container exists (safety check)
    if (!container) {
        console.error('Team container not found!');
        return;
    }
    
    // Clear any existing content
    container.innerHTML = '';
    
    // Loop through each team member and create their card
    teamMembers.forEach((member, index) => {
        // Create the card HTML using template literals
        const cardHTML = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both;">
                <!-- Profile Image -->
                <div class="relative">
                    <img 
                        src="${member.photo}" 
                        alt="${member.name}'s profile photo"
                        class="w-full h-48 object-cover"
                        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=2563eb&color=fff&size=200'"
                    >
                    <!-- Role Badge -->
                    <span class="absolute bottom-3 right-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                        ${member.role}
                    </span>
                </div>
                
                <!-- Card Content -->
                <div class="p-5">
                    <!-- Member Name -->
                    <h3 class="text-xl font-bold text-dark mb-3">${member.name}</h3>
                    
                    <!-- Technical Interests -->
                    <div class="flex flex-wrap gap-2">
                        ${member.interests.map(interest => `
                            <span class="px-2 py-1 bg-blue-50 text-primary text-xs rounded-full">
                                ${interest}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Insert the card into the container
        container.innerHTML += cardHTML;
    });
}

// Add CSS animation for card entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);


// ============================================
// SECTION 3: MOBILE HAMBURGER MENU
// ============================================
/**
 * Mobile Menu Toggle Functionality
 * --------------------------------
 * This handles the hamburger menu for mobile devices:
 * - Opens/closes the mobile navigation menu
 * - Toggles between hamburger and X icons
 * - Closes menu when a link is clicked
 */
function initMobileMenu() {
    // Get DOM elements
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    
    // Track menu state
    let isMenuOpen = false;
    
    // Toggle menu function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Open menu
            mobileMenu.classList.remove('hidden');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            // Close menu
            mobileMenu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
    
    // Add click event to hamburger button
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }
    
    // Close menu when a mobile link is clicked
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (isMenuOpen && 
            !mobileMenu.contains(event.target) && 
            !hamburgerBtn.contains(event.target)) {
            toggleMenu();
        }
    });
}


// ============================================
// SECTION 4: NAVBAR SCROLL EFFECT
// ============================================
/**
 * Navbar Scroll Effect
 * --------------------
 * Adds a shadow to the navbar when user scrolls down
 * Makes the navigation feel more polished
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
}


// ============================================
// SECTION 5: SMOOTH SCROLL ENHANCEMENT
// ============================================
/**
 * Smooth Scroll for Anchor Links
 * ------------------------------
 * Enhances the default smooth scroll behavior
 * with proper offset for the fixed navbar
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate offset for fixed navbar (64px = h-16)
                const navbarHeight = 64;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// ============================================
// SECTION 6: INITIALIZATION
// ============================================
/**
 * Initialize All Functions
 * ------------------------
 * This runs when the DOM is fully loaded
 * Calls all setup functions in order
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render team member cards
    renderTeamCards();
    
    // Initialize mobile hamburger menu
    initMobileMenu();
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Log success message (helpful for debugging)
    console.log('LGC Website initialized successfully!');
});


// ============================================
// HELPER FUNCTIONS FOR FUTURE USE
// ============================================
/**
 * Add New Team Member
 * -------------------
 * Helper function to add a new team member dynamically
 * Can be called from console or other scripts
 * 
 * Usage: addTeamMember("John Doe", "Developer", ["JavaScript", "React"])
 */
function addTeamMember(name, role, interests) {
    teamMembers.push({
        name: name,
        photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=200`,
        role: role,
        interests: interests
    });
    
    // Re-render the team cards
    renderTeamCards();
    
    console.log(`Added new team member: ${name}`);
}

/**
 * Remove Team Member
 * ------------------
 * Helper function to remove a team member by name
 * 
 * Usage: removeTeamMember("John Doe")
 */
function removeTeamMember(name) {
    const index = teamMembers.findIndex(member => member.name === name);
    
    if (index !== -1) {
        teamMembers.splice(index, 1);
        renderTeamCards();
        console.log(`Removed team member: ${name}`);
    } else {
        console.log(`Team member not found: ${name}`);
    }
}
