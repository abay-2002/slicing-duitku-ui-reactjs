import Desc from '../components/Desc'
import Title from '../components/Title'
import { Input, Button } from '../components/FormComponents';
import logo from "../assets/images/logo.png"
import featureBg from "../assets/images/Dashboard Example-feature-background.jpg"
import LinkText from '../components/LinkText';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RegisterForm() {
    const handleRecaptchaChange = (value: string | null) => {
        console.log('ReCAPTCHA value:', value);
    };

    return (
        <div className='flex flex-col md:flex-row'>
            <div className='w-[100vw] md:w-[50vw] p-10 pt-6 md:p-18 md:pt-16 md:pl-20'>
                <img src={logo} alt="logo" className='w-12 mb-24' />
                <div className='flex flex-col gap-6 mb-8'>
                    <Title 
                        title='Register Dashboard Example'
                    />
                    <Desc 
                        text="Your easy & secure online payment provider"
                    />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-row gap-0'>
                        <Input 
                            label='email'
                            id={null}
                            type='email'
                        />
                    </div>
                    <ReCAPTCHA 
                        sitekey="YOUR_RECAPTCHA_SITE_KEY" 
                        onChange={handleRecaptchaChange} 
                    />
                    <Button 
                        name='Register' 
                        link={null}
                    />
                    <div className='flex flex-row gap-3'>
                        <Desc text="Already have Dashboard Example Account?" />
                        <LinkText 
                            path='/login'
                            pathName='Sign In.'
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
