import "./style.css";

fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
)
  .then((rawdata) => rawdata.json())
  .then((cryptoData) =>
    cryptoData.forEach((coin) => {
      console.log(coin);
      function formatNumber(num) {
        if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
        if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
        if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
        return num.toLocaleString();
      }
      const updated = new Date(coin.last_updated);
      const now = new Date();

      const diffMinutes = Math.floor((now - updated) / (1000 * 60));

      const card = document.createElement("div");

      card.className = "bg-slate-700 h-60 w-60 p-2 rounded-2xl";

      card.innerHTML = `
  <div class="flex items-center justify-between p-2">
    <p class="bg-slate-600 px-2 py-1 rounded-2xl text-white">
      #${coin.market_cap_rank}
    </p>

    <div class="flex h-12 w-12 mr-10 rounded-full">
      <img src="${coin.image}" alt="${coin.name}" />

      <div class="text-white">
        <h1>${coin.name}</h1>
        <p>${coin.symbol.toUpperCase()}</p>
      </div>
    </div>

    <div>
      <i class="fa-regular fa-heart text-white"></i>
    </div>
  </div>

  <h1 class="text-white">
    $${coin.current_price}
  </h1>

  <div class="flex items-center text-red-400">
    <p><i class="fa-solid fa-sort-down text-red-400 mx-2 mt-2"></i>
      ${coin.price_change_percentage_24h}% (24hr)
    </p>
  </div>

  <div class="mt-3 text-white">
    <div class="flex gap-11 mx-2">
      <p>Market Cap</p>
      <p>$${formatNumber(coin.market_cap)}</p>
    </div>

    <div class="flex gap-11 mx-2">
      <p>24hr Volume</p>
      <p>$${formatNumber(coin.total_volume)}</p>
    </div>
    <div class="flex gap-9 mx-2">
      <p>Last Updated</p>
      <p>${diffMinutes} min ago </p>
    </div>
  </div>
  </div>
`;
      document.querySelector("#container").appendChild(card);
    }),
  )
  .catch((err) => console.log(err));
