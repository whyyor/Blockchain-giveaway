import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
    apiProvider,
    configureChains,
    getDefaultWallets,
    RainbowKitProvider,
    darkTheme
} from '@rainbow-me/rainbowkit';
import {
    chain,
    createClient,
    WagmiProvider
} from 'wagmi';

const {
    chains,
    provider
} = configureChains(
    [chain.mainnet, chain.rinkeby],
    [
        apiProvider.infura('d1b36e5129b4479f842a7d30ad57c892'),
        apiProvider.fallback()
    ]
);
const {
    connectors
} = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


function MyApp({
    Component,
    pageProps
}) {
    return (
        <WagmiProvider client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={darkTheme()}>
                <Component {...pageProps}/>
            </RainbowKitProvider>
        </WagmiProvider>
  );
}

export default MyApp
