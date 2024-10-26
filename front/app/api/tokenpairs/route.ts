type TokenPairData = {
    id: number;
    name: string;
    MaxPrice: number;
    MinPrice: number;
};

const data: TokenPairData[] = [
    { id: 0, name: 'BNB/USDT', MaxPrice: 99, MinPrice: 34 },
    { id: 1, name: 'BTC/USDT', MaxPrice: 132, MinPrice: 43 },
    { id: 2, name: 'TON/USDT', MaxPrice: 232, MinPrice: 45 },
    { id: 3, name: 'ETH/USDT', MaxPrice: 15, MinPrice: 9 },
    { id: 4, name: 'EEE/USDT', MaxPrice: 67, MinPrice: 33 },
    { id: 5, name: 'BBB/USDT', MaxPrice: 56, MinPrice: 22 },
    { id: 6, name: 'CCC/USDT', MaxPrice: 86, MinPrice: 44 },
    { id: 7, name: 'DDD/USDT', MaxPrice: 45, MinPrice: 4 },
    { id: 8, name: 'qqq/USDT', MaxPrice: 67, MinPrice: 33 },
    { id: 9, name: 'www/USDT', MaxPrice: 56, MinPrice: 22 },
    { id: 10, name: 'aaa/USDT', MaxPrice: 86, MinPrice: 44 },
    { id: 11, name: 'sss/USDT', MaxPrice: 45, MinPrice: 4 },
    { id: 12, name: 'ttt/USDT', MaxPrice: 67, MinPrice: 33 },
    { id: 13, name: 'yyy/USDT', MaxPrice: 56, MinPrice: 22 },
    { id: 14, name: 'uuu/USDT', MaxPrice: 86, MinPrice: 44 },
    { id: 15, name: 'ooo/USDT', MaxPrice: 45, MinPrice: 4 },
];

export async function GET() { 
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
}
