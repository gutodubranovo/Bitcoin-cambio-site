
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const cryptoRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd');
        const cryptoData = await cryptoRes.json();

        const fiatRes = await fetch('https://open.er-api.com/v6/latest/USD');
        const fiatData = await fiatRes.json();

        document.getElementById('btc').textContent = `$ ${cryptoData.bitcoin.usd}`;
        document.getElementById('eth').textContent = `$ ${cryptoData.ethereum.usd}`;
        document.getElementById('usdt').textContent = `$ ${cryptoData.tether.usd}`;
        document.getElementById('usd').textContent = `$ 1.00`;
        document.getElementById('brl').textContent = `R$ ${fiatData.rates.BRL.toFixed(2)}`;
        document.getElementById('eur').textContent = `€ ${fiatData.rates.EUR.toFixed(2)}`;
        document.getElementById('ars').textContent = `$ ${fiatData.rates.ARS.toFixed(2)}`;
        document.getElementById('pyg').textContent = `₲ ${fiatData.rates.PYG.toFixed(2)}`;
    } catch (error) {
        console.error('Erro ao buscar cotações:', error);
    }
});
