exports.deductFromWallet = (wallet, amount) => {
  if (wallet < amount) return false;
  return wallet - amount;
};
