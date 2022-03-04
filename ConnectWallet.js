function IsConnect(WalletType, Network) return boolean
var walletConnectionAPI: walletAPI


walletConnectionAPI = SupportedWallet.GetWalletAPI(WalletType)


if walletConnectionAPI <> nil
	walletConnectionAPI.connect(Network)
	return walletConnectionAPI.IsConnected()
end
end