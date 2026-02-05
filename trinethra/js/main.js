// Core Application Logic
console.log('Trinethra System Initialized');

// Simple mocked state management
const AppState = {
    user: JSON.parse(localStorage.getItem('trinethra_user')) || null,
    
    login: (role, name) => {
        const user = { role, name, id: Date.now() };
        localStorage.setItem('trinethra_user', JSON.stringify(user));
        return user;
    },
    
    logout: () => {
        localStorage.removeItem('trinethra_user');
        window.location.href = 'index.html';
    }
};
