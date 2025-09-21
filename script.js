// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Reset category content when navigating away from disaster screen
    if (screenId !== 'disaster-screen') {
        const categoryContent = document.getElementById('category-content');
        if (categoryContent) {
            categoryContent.classList.remove('show');
        }
    }
    
    // Reset location dropdown when navigating away from disaster screen
    if (screenId !== 'disaster-screen') {
        const locationDropdown = document.getElementById('location-dropdown');
        const riskDisplay = document.getElementById('risk-display');
        if (locationDropdown) {
            locationDropdown.value = '';
        }
        if (riskDisplay) {
            riskDisplay.classList.remove('show');
        }
    }
}

// Location-based Risk Data
const locationRisks = {
    'delhi': {
        name: 'Delhi',
        risks: ['Flood risk in monsoon', 'Heat waves', 'Air pollution emergencies']
    },
    'assam': {
        name: 'Assam',
        risks: ['Floods', 'Earthquakes', 'Landslides']
    },
    'uttarakhand': {
        name: 'Uttarakhand',
        risks: ['Landslides', 'Earthquakes', 'Flash floods', 'Avalanches']
    },
    'tamil-nadu': {
        name: 'Tamil Nadu',
        risks: ['Cyclones', 'Floods', 'Droughts']
    },
    'kerala': {
        name: 'Kerala',
        risks: ['Floods', 'Landslides', 'Cyclones', 'Coastal erosion']
    },
    'maharashtra': {
        name: 'Maharashtra',
        risks: ['Floods', 'Droughts', 'Earthquakes', 'Cyclones']
    },
    'gujarat': {
        name: 'Gujarat',
        risks: ['Earthquakes', 'Cyclones', 'Droughts', 'Floods']
    },
    'rajasthan': {
        name: 'Rajasthan',
        risks: ['Droughts', 'Heat waves', 'Dust storms', 'Flash floods']
    },
    'karnataka': {
        name: 'Karnataka',
        risks: ['Floods', 'Droughts', 'Landslides', 'Cyclones']
    },
    'andhra-pradesh': {
        name: 'Andhra Pradesh',
        risks: ['Cyclones', 'Floods', 'Droughts', 'Heat waves']
    },
    'telangana': {
        name: 'Telangana',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Cyclones']
    },
    'west-bengal': {
        name: 'West Bengal',
        risks: ['Cyclones', 'Floods', 'Earthquakes', 'Landslides']
    },
    'odisha': {
        name: 'Odisha',
        risks: ['Cyclones', 'Floods', 'Droughts', 'Heat waves']
    },
    'jharkhand': {
        name: 'Jharkhand',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Landslides']
    },
    'bihar': {
        name: 'Bihar',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Earthquakes']
    },
    'up': {
        name: 'Uttar Pradesh',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Cold waves']
    },
    'mp': {
        name: 'Madhya Pradesh',
        risks: ['Droughts', 'Floods', 'Heat waves', 'Cold waves']
    },
    'chhattisgarh': {
        name: 'Chhattisgarh',
        risks: ['Droughts', 'Floods', 'Heat waves', 'Landslides']
    },
    'himachal-pradesh': {
        name: 'Himachal Pradesh',
        risks: ['Landslides', 'Earthquakes', 'Avalanches', 'Flash floods']
    },
    'jammu-kashmir': {
        name: 'Jammu & Kashmir',
        risks: ['Earthquakes', 'Avalanches', 'Landslides', 'Flash floods']
    },
    'ladakh': {
        name: 'Ladakh',
        risks: ['Flash floods', 'Avalanches', 'Extreme cold', 'Landslides']
    },
    'punjab': {
        name: 'Punjab',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Cold waves']
    },
    'haryana': {
        name: 'Haryana',
        risks: ['Floods', 'Droughts', 'Heat waves', 'Cold waves']
    },
    'goa': {
        name: 'Goa',
        risks: ['Cyclones', 'Floods', 'Landslides', 'Coastal erosion']
    },
    'manipur': {
        name: 'Manipur',
        risks: ['Floods', 'Landslides', 'Earthquakes']
    },
    'meghalaya': {
        name: 'Meghalaya',
        risks: ['Floods', 'Landslides', 'Earthquakes']
    },
    'mizoram': {
        name: 'Mizoram',
        risks: ['Floods', 'Landslides', 'Earthquakes']
    },
    'nagaland': {
        name: 'Nagaland',
        risks: ['Floods', 'Landslides', 'Earthquakes']
    },
    'tripura': {
        name: 'Tripura',
        risks: ['Floods', 'Earthquakes', 'Cyclones']
    },
    'arunachal-pradesh': {
        name: 'Arunachal Pradesh',
        risks: ['Floods', 'Landslides', 'Earthquakes', 'Flash floods']
    },
    'sikkim': {
        name: 'Sikkim',
        risks: ['Earthquakes', 'Landslides', 'Flash floods', 'Avalanches']
    }
};

// Show location risks
function showLocationRisks() {
    const dropdown = document.getElementById('location-dropdown');
    const riskDisplay = document.getElementById('risk-display');
    
    if (!dropdown || !riskDisplay) return;
    
    const selectedLocation = dropdown.value;
    
    if (selectedLocation && locationRisks[selectedLocation]) {
        const location = locationRisks[selectedLocation];
        
        riskDisplay.innerHTML = `
            <h3><i class="fas fa-map-marker-alt"></i> ${location.name} - Risk Assessment</h3>
            <ul>
                ${location.risks.map(risk => `<li>${risk}</li>`).join('')}
            </ul>
        `;
        
        riskDisplay.classList.add('show');
    } else {
        riskDisplay.classList.remove('show');
    }
}

// Category Content Data
const categoryContentData = {
    'pre-disaster': {
        title: 'Pre-Disaster Checklist',
        items: [
            'Emergency kit with first aid supplies',
            'Non-perishable food and water (3-day supply)',
            'Important documents in waterproof container',
            'Family emergency plan and meeting points',
            'Medical supplies and prescription medications',
            'Flashlight, batteries, and portable radio',
            'Cash and emergency contact list',
            'Pet supplies if applicable'
        ]
    },
    'post-disaster': {
        title: 'Post-Disaster Actions',
        items: [
            'Stay calm and assess the situation safely',
            'Check for injuries and provide first aid',
            'Avoid spreading or believing rumors',
            'Follow official government instructions',
            'Contact emergency helplines if needed',
            'Check on neighbors and vulnerable people',
            'Document damage for insurance claims',
            'Stay informed through official channels'
        ]
    },
    'preparedness': {
        title: 'Disaster Preparedness Tips',
        items: [
            'Know your local emergency shelters',
            'Create and practice evacuation plans',
            'Spread awareness in your community',
            'Participate in community disaster drills',
            'Keep emergency supplies updated',
            'Learn basic first aid and CPR',
            'Identify safe rooms in your home',
            'Stay informed about local risks'
        ]
    }
};

// Show category content
function showCategoryContent(category) {
    const categoryContent = document.getElementById('category-content');
    
    if (!categoryContent || !categoryContentData[category]) return;
    
    const data = categoryContentData[category];
    
    categoryContent.innerHTML = `
        <h3><i class="fas fa-clipboard-list"></i> ${data.title}</h3>
        <ul>
            ${data.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    categoryContent.classList.add('show');
    
    // Scroll to content
    categoryContent.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Add click-to-call functionality for emergency numbers
function addClickToCall() {
    const emergencyNumbers = document.querySelectorAll('.emergency-number');
    
    emergencyNumbers.forEach(number => {
        number.addEventListener('click', function() {
            const phoneNumber = this.textContent.trim();
            
            // Create a temporary link to trigger phone call
            const link = document.createElement('a');
            link.href = `tel:${phoneNumber}`;
            link.click();
            
            // Show feedback
            this.style.transform = 'scale(1.1)';
            this.style.color = '#27ae60';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.color = '#e74c3c';
            }, 200);
        });
        
        // Add cursor pointer
        number.style.cursor = 'pointer';
        number.title = 'Click to call';
    });
}

// Add smooth scrolling for better UX
function addSmoothScrolling() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add keyboard navigation support
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key to go back
        if (e.key === 'Escape') {
            const activeScreen = document.querySelector('.screen.active');
            if (activeScreen) {
                const backBtn = activeScreen.querySelector('.back-btn');
                if (backBtn) {
                    backBtn.click();
                }
            }
        }
        
        // Enter key on focused buttons
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.tagName === 'BUTTON') {
                focusedElement.click();
            }
        }
    });
}

// Add loading animation
function addLoadingAnimation() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    });
}

// Add accessibility features
function addAccessibilityFeatures() {
    // Add ARIA labels to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && button.textContent.trim()) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, select, a');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #3498db';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// Add touch feedback for mobile devices
function addTouchFeedback() {
    const touchElements = document.querySelectorAll('button, .emergency-card, .helpline-card');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize the app
function initializeApp() {
    // Add all event listeners and features
    addClickToCall();
    addSmoothScrolling();
    addKeyboardNavigation();
    addLoadingAnimation();
    addAccessibilityFeatures();
    addTouchFeedback();
    
    // Request notification permission
    requestNotificationPermission();
    
    // Set initial screen
    showScreen('home-screen');
    
    console.log('Disaster Management App initialized successfully!');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Add service worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New content is available, show update notification
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(error => console.log('Service Worker registration failed:', error));
    });
}

// Show update notification
function showUpdateNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('App Update Available', {
            body: 'A new version of Disaster Management App is available. Refresh to update.',
            icon: 'icons/icon-192x192.png',
            tag: 'app-update'
        });
    }
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted');
            }
        });
    }
}

// Add install prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show install button
    showInstallButton();
});

function showInstallButton() {
    // Create install button
    const installBtn = document.createElement('button');
    installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
    installBtn.className = 'install-btn';
    installBtn.onclick = installApp;
    
    // Add to home screen
    const homeScreen = document.getElementById('home-screen');
    const header = homeScreen.querySelector('.header');
    header.appendChild(installBtn);
}

function installApp() {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Handle app installed event
window.addEventListener('appinstalled', (evt) => {
    console.log('App was installed');
    // Hide install button
    const installBtn = document.querySelector('.install-btn');
    if (installBtn) {
        installBtn.remove();
    }
});

// Add error handling
window.addEventListener('error', function(e) {
    console.error('App error:', e.error);
    // You could show a user-friendly error message here
});

// Add offline detection
window.addEventListener('online', function() {
    console.log('App is online');
    // You could show a notification that the app is back online
});

window.addEventListener('offline', function() {
    console.log('App is offline');
    // You could show a notification that the app is offline
});
