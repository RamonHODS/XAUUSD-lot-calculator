function calculateLotSize(accountBalance, riskPercentage, stopLossPips, pipValue, leverage) {
    // Calculate the maximum risk amount in account currency
    const maxRiskAmount = accountBalance * (riskPercentage / 100);
  
    // Adjust the max risk amount based on leverage
    const adjustedRiskAmount = maxRiskAmount / leverage;
  
    // Calculate the position size in lots
    const positionSize = adjustedRiskAmount / (stopLossPips * pipValue);
  
    return positionSize.toFixed(2);
  }
  
  function calculate() {
    // Get input values
    const accountBalance = parseFloat(document.getElementById('accountBalance').value);
    const riskPercentage = parseFloat(document.getElementById('riskPercentage').value);
    const stopLossPips = parseFloat(document.getElementById('stopLossPips').value);
    const pipValue = parseFloat(document.getElementById('pipValue').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
  
    // Calculate the position size
    const positionSize = calculateLotSize(accountBalance, riskPercentage, stopLossPips, pipValue, leverage);

    // Divide the position size by 2
    const adjustedPositionSize = positionSize / 2;
  
    // Display the result
    document.getElementById('result').textContent = 'Position Size: ' + adjustedPositionSize;
  }
  