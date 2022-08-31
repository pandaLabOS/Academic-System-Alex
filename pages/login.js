import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import loginStyle from '../styles/login.module.css';


const name = 'AU Digital Academic Remuneration System';

export default function Login() {
    return (
      <div className={loginStyle.loginContainer}>
        <Image
          priority
          src="/logos/ABAC.png"
          className={loginStyle.logo}
          width={238}
          height={234}
          alt={name}
        />
      
        <h1>AU Digital Academic Remuneration System</h1>
        <button className={loginStyle.button}>Sign in with Microsoft</button>


    </div>

    );

}