const API = 'http://localhost:3000/api/auth'; // ajustar se necessário

const AuthService = {
  login: async (email, senha) => {
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    localStorage.setItem('user', JSON.stringify(data));
  },

  register: async (form) => {
    const res = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getUser: () => {
    const item = localStorage.getItem('user');
    return item ? JSON.parse(item) : null;
  },
};

export default AuthService;
