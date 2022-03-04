


Function AddWalletType(WalletType) return boolean

db : dbConnection

db = self.ConnectDB
	if db <> nil
		db.AddWalletType(WalletType)
	end
end