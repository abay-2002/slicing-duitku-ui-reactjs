import { Input, Checkbox, Button } from '../components/FormComponents';
import { v4 as uuidv4 } from 'uuid';
import Desc from '../components/Desc'
import Title from '../components/Title'
import logo from "../assets/images/logo.png"
import featureBg from "../assets/images/Dashboard Example-feature-background.jpg"
import LinkText from '../components/LinkText';

export default function LoginForm() {
    const passwordId = `password-${uuidv4()}`;
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-[100vw] md:w-[50vw] p-10 pt-6 md:p-18 md:pt-16 md:pl-20'>
                <img src={logo} alt="logo" className='w-12  mb-24' />
                <div className='flex flex-col gap-6 mb-8'>
                    <Title
                        title='Welcome'
                    />
                    <Desc
                        text="Dashboard Example connects you to all key payment methods, enabling businesses to accept payments and optimize growth across online, in-app, and in-store."
                    />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row gap-0'>
                        <Input
                            label='email'
                            id={null}
                            type='email'
                        />
                        <Input
                            label='password'
                            id={passwordId}
                            type='password'
                        />
                    </div>
                    <Checkbox
                        name='Check to Login as Team member (?)'
                    />
                    <Button 
                        link={'/penarikan'}
                        name='Sign in' 
                    />
                    <LinkText
                        path='/forgot-password'
                        pathName='Forgot Password?'
                    />
                    <div className='flex flex-row gap-3'>
                        <Desc text="Don't have an account yet?" />
                        <LinkText
                            path='/register'
                            pathName='Register here.'
                        />
                    </div>
                </div>
            </div>
            <div
                className='h-[100vh] hidden md:block w-[100vw] md:w-[50vw] p-18 pl-20'
                style={{ backgroundImage: `url(${featureBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            </div>
        </div>
    );
}
