// --- Demo version. Code concealed ---
'use client';
import { useLanguage } from '@/model/LanguageContext';
import MainPage from '@/view/MainPage';
import { logEvent } from "@/model/Logger";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const validPass = process.env.NEXT_PUBLIC_AUTH_PASS;
  // Восстанавливаем авторизацию при монтировании
  useEffect(() => {
      logEvent("Login", "info", {
        name: user,
      
      setError(t.login.wrong_credentials);
        password: pass,

    );
        className="w-full 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={user}
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
  );
// --- End of demo block ---
