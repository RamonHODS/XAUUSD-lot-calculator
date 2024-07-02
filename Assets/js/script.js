document.getElementById('calculate-btn').addEventListener('click', calculateLotSize);

function calculateLotSize() {
  const accountBalance = document.getElementById('account-balance').value;
  const riskPercentage = document.getElementById('risk-percentage').value;
  const stopLoss = document.getElementById('stop-loss').value;

  if (accountBalance && riskPercentage && stopLoss) {
    const riskAmount = (accountBalance * (riskPercentage / 100));
    const lotSize = riskAmount / (stopLoss * 10);

    const lotSizeElement = document.getElementById('lot-size');
    lotSizeElement.textContent = `Lot Size: ${lotSize.toFixed(2)}`;
    lotSizeElement.classList.add('updated');

    setTimeout(() => {
      lotSizeElement.classList.remove('updated');
    }, 300);
  } else {
    alert('Please fill in all fields');
  }
}
