<?php
/**
 * ValueBharat Stock Price Proxy
 * Upload this file to: https://valuebharat.phptutorialpoints.in/proxy.php
 * 
 * This fetches Yahoo Finance data server-side, bypassing all CORS restrictions.
 */

// Allow requests from your own domain only
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Cache-Control: no-cache');

$ticker = isset($_GET['ticker']) ? preg_replace('/[^A-Z0-9&]/', '', strtoupper($_GET['ticker'])) : '';

if (empty($ticker)) {
    http_response_code(400);
    echo json_encode(['error' => 'ticker parameter is required']);
    exit;
}

$url = "https://query1.finance.yahoo.com/v8/finance/chart/{$ticker}.NS";

$context = stream_context_create([
    'http' => [
        'method'  => 'GET',
        'timeout' => 10,
        'header'  => implode("\r\n", [
            'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Accept: application/json',
        ]),
    ],
    'ssl' => [
        'verify_peer'      => false,
        'verify_peer_name' => false,
    ],
]);

$response = @file_get_contents($url, false, $context);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['error' => 'Failed to fetch from Yahoo Finance']);
    exit;
}

$data = json_decode($response, true);

if (!isset($data['chart']['result'][0]['meta']['regularMarketPrice'])) {
    http_response_code(404);
    echo json_encode(['error' => 'Price not found for ' . $ticker]);
    exit;
}

$price = $data['chart']['result'][0]['meta']['regularMarketPrice'];
$prevClose = $data['chart']['result'][0]['meta']['chartPreviousClose'] ?? $price;
$change = $price - $prevClose;
$changePct = $prevClose > 0 ? (($change / $prevClose) * 100) : 0;

echo json_encode([
    'ticker'     => $ticker,
    'price'      => round($price, 2),
    'change'     => round($change, 2),
    'changePct'  => round($changePct, 2),
]);
