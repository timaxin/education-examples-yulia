document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const currency1 = document.getElementById('currency1');
    const currency2 = document.getElementById('currency2');
    const amount1 = document.getElementById('amount1');
    const amount2 = document.getElementById('amount2');
    const rateDisplay = document.getElementById('rate');
    const flag1 = document.getElementById('flag1');
    const flag2 = document.getElementById('flag2');
    const errorDisplay = document.createElement('div');
    errorDisplay.className = 'error-message';
    currency1.parentElement.appendChild(errorDisplay);

    // Update flag when currency changes
    currency1.addEventListener('change', () => updateFlag(currency1, flag1));
    currency2.addEventListener('change', () => updateFlag(currency2, flag2));

    // Update exchange rate and amount when currencies change
    currency1.addEventListener('change', updateExchangeRate);
    currency2.addEventListener('change', updateExchangeRate);

    // Add validation for negative numbers
    amount1.addEventListener('input', () => {
        const value = parseFloat(amount1.value);
        
        // Clear error message
        errorDisplay.textContent = '';
        
        if (value < 0) {
            amount1.value = amount1.value.replace(/-/g, '');
            errorDisplay.textContent = 'Введите положительное число';
            errorDisplay.style.display = 'block';
            return;
        }

        if (amount1.value && rateDisplay.textContent) {
            const rate = parseFloat(rateDisplay.textContent);
            amount2.value = (parseFloat(amount1.value) * rate).toFixed(2);
        }
    });

    // Initial flag updates
    updateFlag(currency1, flag1);
    updateFlag(currency2, flag2);
    updateExchangeRate();

    // Function to update flag
    async function updateFlag(currencySelect, flagElement) {
        try {
            const currency = currencySelect.value;
            let countryCode;
            
            // Special cases for flags
            switch (currency) {
                case 'USD':
                    countryCode = 'US';
                    break;
                case 'EUR':
                    countryCode = 'EU';
                    break;
                case 'RUB':
                    countryCode = 'RU';
                    break;
                default:
                    // Get country code from currency
                    const response = await fetch(`https://restcountries.com/v3.1/currency/${currency.toLowerCase()}`);
                    const data = await response.json();
                    countryCode = data[0].cca2;
            }

            // Get flag from flagsapi.com
            const flagUrl = `https://flagsapi.com/${countryCode}/flat/32.png`;
            flagElement.src = flagUrl;
        } catch (error) {
            console.error('Error fetching flag:', error);
            flagElement.src = '';
        } finally {
            loader.style.display = 'none';
        }
    }

    // Function to update exchange rate
    async function updateExchangeRate() {
        try {
            loader.style.display = 'block';
            const fromCurrency = currency1.value;
            const toCurrency = currency2.value;
            
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
            const data = await response.json();
            const rate = data.rates[toCurrency];
            
            rateDisplay.textContent = rate.toFixed(4);
            
            if (amount1.value) {
                amount2.value = (parseFloat(amount1.value) * rate).toFixed(2);
            }
        } catch (error) {
            console.error('Error fetching exchange rate:', error);
            rateDisplay.textContent = 'Ошибка';
        } finally {
            loader.style.display = 'none';
        }
    }
});
