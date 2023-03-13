import {NextRouter, useRouter} from 'next/router';
import React, {useEffect} from 'react';

const withAuth = WrappedComponent=>{
    const Wrapper = (props) =>{
        const router = useRouter();

        useEffect(()=>{
            const isLoggedIn = localStorage.getItem('iubRecordsIsLoggedIn');

            if(!isLoggedIn){
                router.push(`/login?redirectTo=${router.asPath}`);
            }
        }, []);

        return <WrappedComponent {...props} />;
    }
    return Wrapper;
};

export default withAuth;