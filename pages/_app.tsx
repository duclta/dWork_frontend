import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ConnectWalletModal } from '../components/connectWalletModal';
import { useApp } from '../hooks/useApp';
import { store } from '../store';
import '../styles/global.less';

const Init = () => {
    useApp();
    return null;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Init />
                <ToastContainer />
                <ConnectWalletModal />
                <Component {...pageProps} />
            </Provider>
        </QueryClientProvider>
    );
}
