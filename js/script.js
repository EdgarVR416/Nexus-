document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Create project section with panels
    createProjectSection();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
});

// Create project section with panels
function createProjectSection() {
    // Create project section if it doesn't exist
    let projectSection = document.querySelector('#projects');
    if (!projectSection) {
        projectSection = document.createElement('section');
        projectSection.id = 'projects';
        projectSection.className = 'projects-section';
        
        const container = document.createElement('div');
        container.className = 'container';
        projectSection.appendChild(container);
        
        const sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = 'Our Projects';
        container.appendChild(sectionTitle);
        
        const sectionDesc = document.createElement('p');
        sectionDesc.className = 'section-description';
        sectionDesc.textContent = 'Explore our innovative solutions designed to enhance your gaming experience.';
        container.appendChild(sectionDesc);
        
        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';
        container.appendChild(projectsGrid);
        
        // Add project panels
        const projects = [
            {
                title: 'Nexus Aimbot',
                description: 'Advanced targeting system with customizable settings for precision and stealth.',
                image: 'img/aimbot.jpg',
                features: ['Smooth tracking', 'Multiple targeting modes', 'Anti-detection system']
            },
            {
                title: 'Nexus ESP',
                description: 'Comprehensive visual enhancement suite that reveals critical information.',
                image: 'img/esp.jpg',
                features: ['Player outlines', 'Item detection', 'Distance indicators']
            },
            {
                title: 'Nexus Movement',
                description: 'Enhanced movement capabilities that give you the edge in any situation.',
                image: 'img/movement.jpg',
                features: ['Speed boost', 'Jump enhancement', 'No-clip options']
            }
        ];
        
        projects.forEach(project => {
            const projectPanel = createProjectPanel(project);
            projectsGrid.appendChild(projectPanel);
        });
        
        // Add section to the document
        const mainContent = document.querySelector('main') || document.body;
        mainContent.appendChild(projectSection);
    }
    
    // Add styles for project section
    const style = document.createElement('style');
    style.textContent = `
        .projects-section {
            padding: 100px 0;
            background-color: #0a0a14;
            color: white;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .section-title {
            font-size: 36px;
            text-align: center;
            margin-bottom: 20px;
            font-weight: 700;
            background: linear-gradient(135deg, #6e00ff, #8a2be2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .section-description {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 50px;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }
        
        .project-panel {
            background: linear-gradient(to bottom, #13131f, #0a0a14);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-panel:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(106, 0, 255, 0.3);
        }
        
        .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-content {
            padding: 25px;
        }
        
        .project-title {
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: 600;
            color: white;
        }
        
        .project-description {
            font-size: 16px;
            margin-bottom: 20px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
        }
        
        .project-features {
            list-style: none;
            padding: 0;
            margin: 0 0 20px 0;
        }
        
        .project-features li {
            padding: 8px 0;
            position: relative;
            padding-left: 25px;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .project-features li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #8a2be2;
            font-weight: bold;
        }
        
        .project-button {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(135deg, #6e00ff, #8a2be2);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        
        .project-button:hover {
            background: linear-gradient(135deg, #8a2be2, #6e00ff);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(106, 0, 255, 0.4);
        }
        
        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .section-title {
                font-size: 28px;
            }
            
            .section-description {
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Create a project panel
function createProjectPanel(project) {
    const panel = document.createElement('div');
    panel.className = 'project-panel';
    
    // Project image
    const image = document.createElement('img');
    image.className = 'project-image';
    image.src = project.image;
    image.alt = project.title;
    panel.appendChild(image);
    
    // Project content
    const content = document.createElement('div');
    content.className = 'project-content';
    panel.appendChild(content);
    
    // Project title
    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;
    content.appendChild(title);
    
    // Project description
    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;
    content.appendChild(description);
    
    // Project features
    const featuresList = document.createElement('ul');
    featuresList.className = 'project-features';
    content.appendChild(featuresList);
    
    project.features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.textContent = feature;
        featuresList.appendChild(featureItem);
    });
    
    // Project button
    const button = document.createElement('a');
    button.className = 'project-button';
    button.href = '#';
    button.textContent = 'Learn More';
    content.appendChild(button);
    
    return panel;
}